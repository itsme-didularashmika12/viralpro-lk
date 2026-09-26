import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { siteConfig } from "@/config/siteConfig";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, businessName, phone, city, service, message, _gotcha } = body;

    // Honeypot anti-spam check
    if (_gotcha) {
      return NextResponse.json({ success: true, message: "Inquiry received" }, { status: 200 });
    }

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ success: false, error: "Please enter your name." }, { status: 400 });
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 8) {
      return NextResponse.json({ success: false, error: "Please enter a valid phone number." }, { status: 400 });
    }

    const sanitizedData = {
      name: name.trim().slice(0, 100),
      businessName: (businessName || "").trim().slice(0, 100),
      phone: phone.trim().slice(0, 20),
      city: (city || "Anuradhapura").trim().slice(0, 100),
      service: (service || "General Inquiry").trim().slice(0, 80),
      message: (message || "").trim().slice(0, 1000),
      createdAt: new Date(),
      status: "new",
      source: "website_contact_form",
    };

    // Save to MongoDB
    try {
      const client = await clientPromise;
      const db = client.db("viralpro_db");
      const result = await db.collection("inquiries").insertOne(sanitizedData);
      
      const prefilledWhatsApp = `Hi ViralPro LK, my name is ${sanitizedData.name}${sanitizedData.businessName ? ` from ${sanitizedData.businessName}` : ""}. I'm in ${sanitizedData.city} and need ${sanitizedData.service}. Message: ${sanitizedData.message || "Please provide details and a quotation."}`;
      const whatsappUrl = siteConfig.getWhatsAppUrl(prefilledWhatsApp);

      return NextResponse.json({
        success: true,
        message: "Your inquiry has been submitted successfully!",
        inquiryId: result.insertedId.toString(),
        whatsappUrl,
      });
    } catch (dbError) {
      console.error("Database storage error:", dbError instanceof Error ? dbError.message : "Unknown error");
      // Even if DB has a momentary blip, return WhatsApp URL so user is never blocked from contacting!
      const prefilledWhatsApp = `Hi ViralPro LK, my name is ${sanitizedData.name}. I need ${sanitizedData.service}. ${sanitizedData.message || ""}`;
      return NextResponse.json({
        success: true,
        message: "Thank you for reaching out! You can also connect with us directly on WhatsApp.",
        whatsappUrl: siteConfig.getWhatsAppUrl(prefilledWhatsApp),
      });
    }
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request payload." }, { status: 400 });
  }
}
