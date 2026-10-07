import { jsPDF } from "jspdf";

export type QuotationLineItem = {
  serviceName: string;
  packageName: string;
  description?: string;
  quantity: number;
  unitPriceLkr: number;
};

export type QuotationPdfPayload = {
  quotationNumber: string;
  issueDate: string;
  validUntil: string;
  status?: string;
  customerName: string;
  businessName?: string;
  customerPhone?: string;
  customerEmail?: string;
  customerAddress?: string;
  projectTitle?: string;
  items: QuotationLineItem[];
  discountLkr?: number;
  advancePercent?: number;
  notes?: string;
  terms?: string;
};

function fmtLkr(val: number): string {
  const n = Number.isFinite(val) ? Math.round(val) : 0;
  return `Rs. ${n.toLocaleString("en-LK")}`;
}

export function generateQuotationPdf(data: QuotationPdfPayload) {
  const doc = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;

  // Brand colors
  const brandRed: [number, number, number] = [139, 10, 19]; // #8B0A13
  const darkInk: [number, number, number] = [24, 22, 25];
  const mutedInk: [number, number, number] = [105, 100, 106];
  const lightBg: [number, number, number] = [250, 248, 247];
  const borderCol: [number, number, number] = [230, 225, 223];

  // Top crimson bar
  doc.setFillColor(...brandRed);
  doc.rect(0, 0, pageWidth, 6, "F");

  // Header Left: Brand
  let y = 18;
  doc.setFillColor(...brandRed);
  doc.roundedRect(margin, y - 6, 11, 11, 2, 2, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.text("V", margin + 5.5, y + 1.5, { align: "center" });

  doc.setTextColor(...darkInk);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("VIRALPRO", margin + 14, y);
  const vpWidth = doc.getTextWidth("VIRALPRO ");
  doc.setTextColor(...brandRed);
  doc.text("LK", margin + 14 + vpWidth, y);

  doc.setTextColor(...mutedInk);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.text("Digital Solutions for Every Business · Create. Promote. Grow.", margin + 14, y + 4.5);
  doc.text("Anuradhapura, Sri Lanka · Tel / WhatsApp: 074 167 1668 · @viralprolk", margin + 14, y + 8.8);
  doc.text("Web: https://viralpro-lk.vercel.app", margin + 14, y + 13);

  // Header Right: QUOTATION badge & metadata
  doc.setTextColor(...brandRed);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("QUOTATION", pageWidth - margin, y, { align: "right" });

  doc.setTextColor(...darkInk);
  doc.setFontSize(9.5);
  doc.text(`No: ${data.quotationNumber || "VP-Q-DRAFT"}`, pageWidth - margin, y + 6, { align: "right" });

  doc.setFont("helvetica", "normal");
  doc.setTextColor(...mutedInk);
  doc.setFontSize(8.5);
  doc.text(`Issue Date: ${data.issueDate || new Date().toISOString().slice(0, 10)}`, pageWidth - margin, y + 10.5, { align: "right" });
  if (data.validUntil) {
    doc.text(`Valid Until: ${data.validUntil}`, pageWidth - margin, y + 14.8, { align: "right" });
  }

  y += 20;
  doc.setDrawColor(...borderCol);
  doc.setLineWidth(0.4);
  doc.line(margin, y, pageWidth - margin, y);
  y += 6;

  // Customer & Project Info Box
  const boxHeight = 30;
  doc.setFillColor(...lightBg);
  doc.setDrawColor(...borderCol);
  doc.roundedRect(margin, y, contentWidth, boxHeight, 2.5, 2.5, "FD");

  // Left column: Prepared For
  doc.setTextColor(...brandRed);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.text("PREPARED FOR (CLIENT)", margin + 5, y + 6);

  doc.setTextColor(...darkInk);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text(data.customerName || "Valued Customer", margin + 5, y + 11.8);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(...mutedInk);
  doc.setFontSize(8.5);
  let clientLineY = y + 16.5;
  if (data.businessName) {
    doc.text(data.businessName, margin + 5, clientLineY);
    clientLineY += 4.3;
  }
  const contactParts = [data.customerPhone, data.customerEmail].filter(Boolean).join("  ·  ");
  if (contactParts) {
    doc.text(contactParts, margin + 5, clientLineY);
    clientLineY += 4.3;
  }
  if (data.customerAddress) {
    doc.text(data.customerAddress, margin + 5, clientLineY);
  }

  // Right column: Project Overview
  const midX = margin + contentWidth * 0.55;
  doc.setDrawColor(...borderCol);
  doc.line(midX - 4, y + 4, midX - 4, y + boxHeight - 4);

  doc.setTextColor(...brandRed);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.text("PROJECT / QUOTATION DETAILS", midX, y + 6);

  doc.setTextColor(...darkInk);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  const projTitle = data.projectTitle || "Digital Marketing & Production Services";
  const wrappedTitle = doc.splitTextToSize(projTitle, contentWidth * 0.43);
  doc.text(wrappedTitle.slice(0, 2), midX, y + 11.8);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(...mutedInk);
  doc.setFontSize(8.5);
  doc.text("Currency: Sri Lankan Rupees (LKR)", midX, y + 21);
  doc.text(`Status: ${(data.status || "OFFICIAL QUOTATION").toUpperCase()}`, midX, y + 25.3);

  y += boxHeight + 8;

  // Items Table Header
  const colNo = margin;
  const colDesc = margin + 10;
  const colQty = margin + 112;
  const colUnit = margin + 132;
  const colTotal = pageWidth - margin;

  function drawTableHeader(topY: number) {
    doc.setFillColor(...darkInk);
    doc.roundedRect(margin, topY, contentWidth, 9, 1.5, 1.5, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("#", colNo + 3, topY + 5.8);
    doc.text("SERVICE & PACKAGE / DESCRIPTION", colDesc, topY + 5.8);
    doc.text("QTY", colQty + 6, topY + 5.8, { align: "center" });
    doc.text("UNIT PRICE", colUnit + 15, topY + 5.8, { align: "right" });
    doc.text("LINE TOTAL", colTotal - 3, topY + 5.8, { align: "right" });
    return topY + 9;
  }

  y = drawTableHeader(y);

  let subtotalLkr = 0;

  data.items.forEach((item, idx) => {
    const qty = Math.max(1, Math.round(Number(item.quantity) || 1));
    const unit = Math.max(0, Math.round(Number(item.unitPriceLkr) || 0));
    const lineTotal = qty * unit;
    subtotalLkr += lineTotal;

    const titleLine = [item.serviceName, item.packageName].filter(Boolean).join(" — ") || "Custom Service";
    const descLines = item.description ? doc.splitTextToSize(item.description, 98) : [];
    const rowHeight = Math.max(11, 7 + descLines.length * 4 + (descLines.length > 0 ? 3 : 0));

    if (y + rowHeight > pageHeight - 65) {
      doc.addPage();
      y = 20;
      y = drawTableHeader(y);
    }

    if (idx % 2 === 1) {
      doc.setFillColor(...lightBg);
      doc.rect(margin, y, contentWidth, rowHeight, "F");
    }

    doc.setDrawColor(...borderCol);
    doc.setLineWidth(0.25);
    doc.line(margin, y + rowHeight, pageWidth - margin, y + rowHeight);

    doc.setTextColor(...mutedInk);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(String(idx + 1).padStart(2, "0"), colNo + 3, y + 6);

    doc.setTextColor(...darkInk);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.2);
    doc.text(doc.splitTextToSize(titleLine, 98)[0], colDesc, y + 6);

    if (descLines.length > 0) {
      doc.setFont("helvetica", "normal");
      doc.setTextColor(...mutedInk);
      doc.setFontSize(8);
      doc.text(descLines, colDesc, y + 10.2);
    }

    doc.setTextColor(...darkInk);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(String(qty), colQty + 6, y + 6, { align: "center" });
    doc.text(fmtLkr(unit), colUnit + 15, y + 6, { align: "right" });

    doc.setFont("helvetica", "bold");
    doc.text(fmtLkr(lineTotal), colTotal - 3, y + 6, { align: "right" });

    y += rowHeight;
  });

  y += 6;

  // Totals calculation
  const discountLkr = Math.max(0, Math.min(subtotalLkr, Math.round(Number(data.discountLkr) || 0)));
  const totalLkr = Math.max(0, subtotalLkr - discountLkr);
  const advancePercent = Math.max(0, Math.min(100, Math.round(Number(data.advancePercent) || 0)));
  const advanceAmountLkr = Math.round((totalLkr * advancePercent) / 100);
  const balanceLkr = Math.max(0, totalLkr - advanceAmountLkr);

  if (y + 65 > pageHeight - 20) {
    doc.addPage();
    y = 20;
  }

  const summaryStartY = y;
  const sumX = margin + 104;
  const sumW = contentWidth - 104;

  // Subtotal row
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...mutedInk);
  doc.text("Subtotal", sumX + 4, y + 5);
  doc.setTextColor(...darkInk);
  doc.setFont("helvetica", "bold");
  doc.text(fmtLkr(subtotalLkr), pageWidth - margin - 3, y + 5, { align: "right" });
  y += 7;

  if (discountLkr > 0) {
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...mutedInk);
    doc.text("Discount", sumX + 4, y + 5);
    doc.setTextColor(22, 130, 65);
    doc.setFont("helvetica", "bold");
    doc.text(`- ${fmtLkr(discountLkr)}`, pageWidth - margin - 3, y + 5, { align: "right" });
    y += 7;
  }

  // Grand Total Box
  doc.setFillColor(...brandRed);
  doc.roundedRect(sumX, y, sumW, 11, 2, 2, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("TOTAL AMOUNT", sumX + 4, y + 7);
  doc.setFontSize(11);
  doc.text(fmtLkr(totalLkr), pageWidth - margin - 3, y + 7, { align: "right" });
  y += 14;

  if (advancePercent > 0) {
    doc.setFillColor(...lightBg);
    doc.setDrawColor(...borderCol);
    doc.roundedRect(sumX, y, sumW, 14, 2, 2, "FD");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.3);
    doc.setTextColor(...brandRed);
    doc.text(`Advance (${advancePercent}%)`, sumX + 4, y + 5.5);
    doc.text(fmtLkr(advanceAmountLkr), pageWidth - margin - 3, y + 5.5, { align: "right" });

    doc.setFont("helvetica", "normal");
    doc.setTextColor(...mutedInk);
    doc.text("Balance on Delivery", sumX + 4, y + 11);
    doc.setTextColor(...darkInk);
    doc.text(fmtLkr(balanceLkr), pageWidth - margin - 3, y + 11, { align: "right" });
    y += 17;
  }

  // Left side: Notes & Terms
  let leftY = summaryStartY;
  const leftWidth = 96;

  if (data.notes && data.notes.trim()) {
    doc.setTextColor(...brandRed);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("NOTES & DELIVERABLES", margin, leftY + 4);
    doc.setTextColor(...darkInk);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.2);
    const noteLines = doc.splitTextToSize(data.notes.trim(), leftWidth);
    doc.text(noteLines.slice(0, 6), margin, leftY + 9);
    leftY += 10 + Math.min(6, noteLines.length) * 3.8;
  }

  const defaultTerms =
    data.terms?.trim() ||
    "1. Quotation is valid until the date stated above.\n2. Advance payment is required before shooting/development begins.\n3. Drone, actors, outstation travel & third-party hosting/ad spend are billed as agreed.";
  doc.setTextColor(...brandRed);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("TERMS & CONDITIONS", margin, leftY + 4);
  doc.setTextColor(...mutedInk);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.8);
  const termLines = doc.splitTextToSize(defaultTerms, leftWidth);
  doc.text(termLines.slice(0, 7), margin, leftY + 8.8);

  const bottomSectionY = Math.max(y, leftY + 34) + 10;

  // Signature Row
  if (bottomSectionY < pageHeight - 25) {
    doc.setDrawColor(...borderCol);
    doc.line(margin, bottomSectionY, margin + 65, bottomSectionY);
    doc.line(pageWidth - margin - 65, bottomSectionY, pageWidth - margin, bottomSectionY);

    doc.setTextColor(...mutedInk);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text("Authorized by ViralPro LK", margin, bottomSectionY + 4.5);
    doc.text("Customer Acceptance Signature", pageWidth - margin, bottomSectionY + 4.5, { align: "right" });
  }

  // Footer
  doc.setFillColor(...darkInk);
  doc.rect(0, pageHeight - 12, pageWidth, 12, "F");
  doc.setTextColor(220, 215, 215);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text(
    "ViralPro LK · Anuradhapura & Island-wide · 074 167 1668 · @viralprolk · https://viralpro-lk.vercel.app",
    pageWidth / 2,
    pageHeight - 4.8,
    { align: "center" }
  );

  const safeNum = (data.quotationNumber || "Quotation").replace(/[^a-zA-Z0-9_-]/g, "-");
  doc.save(`ViralPro-LK-${safeNum}.pdf`);
}
