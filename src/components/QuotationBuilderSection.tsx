"use client";

import React, { useMemo, useState } from "react";
import { priceList } from "@/config/priceList";
import { generateQuotationPdf, type QuotationLineItem } from "@/lib/quotation-pdf";
import { Download, FilePlus2, FileText, MessageCircle, Plus, Trash2 } from "lucide-react";

function parseAmount(raw?: string): number {
  if (!raw) return 0;
  const digits = raw.replace(/[^0-9]/g, "");
  return digits ? Number(digits) : 0;
}

function formatLkr(amount: number): string {
  return `Rs. ${Math.round(amount).toLocaleString("en-LK")}`;
}

export default function QuotationBuilderSection() {
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const defaultValidUntil = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 14);
    return d.toISOString().slice(0, 10);
  }, []);

  const [quotationNumber, setQuotationNumber] = useState(
    () => `VP-Q-${new Date().getFullYear()}-${String(Math.floor(1000 + Math.random() * 9000))}`
  );
  const [customerName, setCustomerName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [projectTitle, setProjectTitle] = useState("Digital Marketing & Production Services");
  const [issueDate, setIssueDate] = useState(today);
  const [validUntil, setValidUntil] = useState(defaultValidUntil);

  const [selectedCatId, setSelectedCatId] = useState(priceList[0]?.id ?? "");
  const [selectedPkgIdx, setSelectedPkgIdx] = useState(0);

  const [items, setItems] = useState<QuotationLineItem[]>([
    {
      serviceName: "Promotional Video",
      packageName: "Standard",
      description: "Professional on-site filming (iPhone 16 Pro Max), editing, color grading & social media optimization",
      quantity: 1,
      unitPriceLkr: 95000,
    },
  ]);

  const [discountLkr, setDiscountLkr] = useState(0);
  const [advancePercent, setAdvancePercent] = useState(50);
  const [notes, setNotes] = useState(
    "Includes high-resolution final deliverables optimized for social media and web."
  );

  const currentCat = useMemo(
    () => priceList.find((c) => c.id === selectedCatId) ?? priceList[0],
    [selectedCatId]
  );

  const subtotalLkr = useMemo(
    () =>
      items.reduce(
        (sum, it) =>
          sum + Math.max(1, Number(it.quantity) || 1) * Math.max(0, Number(it.unitPriceLkr) || 0),
        0
      ),
    [items]
  );
  const safeDiscount = Math.min(subtotalLkr, Math.max(0, Number(discountLkr) || 0));
  const totalLkr = Math.max(0, subtotalLkr - safeDiscount);
  const advanceAmountLkr = Math.round(
    (totalLkr * Math.max(0, Math.min(100, Number(advancePercent) || 0))) / 100
  );
  const balanceLkr = Math.max(0, totalLkr - advanceAmountLkr);

  function addSelectedPackage() {
    if (!currentCat) return;
    const pkg = currentCat.items[selectedPkgIdx] ?? currentCat.items[0];
    if (!pkg) return;
    const unitPriceLkr = parseAmount(pkg.amount);
    const priceDesc = pkg.quote
      ? `Quotation basis (${pkg.quote})`
      : `${pkg.from ? "From " : ""}Rs. ${pkg.amount}${pkg.unit ? ` ${pkg.unit}` : ""}`;
    setItems((prev) => [
      ...prev,
      {
        serviceName: currentCat.title,
        packageName: pkg.name,
        description: `Package rate: ${priceDesc}`,
        quantity: 1,
        unitPriceLkr,
      },
    ]);
  }

  function addCustomItem() {
    setItems((prev) => [
      ...prev,
      {
        serviceName: "Custom Service",
        packageName: "Tailored Package",
        description: "",
        quantity: 1,
        unitPriceLkr: 0,
      },
    ]);
  }

  function updateItem(idx: number, patch: Partial<QuotationLineItem>) {
    setItems((prev) => prev.map((it, i) => (i === idx ? { ...it, ...patch } : it)));
  }

  function removeItem(idx: number) {
    setItems((prev) => (prev.length > 1 ? prev.filter((_, i) => i !== idx) : prev));
  }

  function handleDownloadPdf() {
    generateQuotationPdf({
      quotationNumber: quotationNumber.trim() || "VP-Q-2026",
      issueDate,
      validUntil,
      status: "OFFICIAL QUOTATION",
      customerName: customerName.trim() || "Valued Customer",
      businessName: businessName.trim(),
      customerPhone: customerPhone.trim(),
      customerEmail: customerEmail.trim(),
      customerAddress: customerAddress.trim(),
      projectTitle: projectTitle.trim(),
      items,
      discountLkr: safeDiscount,
      advancePercent,
      notes,
    });
  }

  function handleSendWhatsApp() {
    const lines = [
      `*VIRALPRO LK — OFFICIAL QUOTATION*`,
      `Quotation No: *${quotationNumber}*`,
      `Customer: *${customerName || "Valued Customer"}*${businessName ? ` (${businessName})` : ""}`,
      `Date: ${issueDate}${validUntil ? ` (Valid until ${validUntil})` : ""}`,
      ``,
      `*Selected Services & Packages:*`,
      ...items.map(
        (it, i) =>
          `${i + 1}. ${it.serviceName}${it.packageName ? ` (${it.packageName})` : ""} × ${it.quantity} — ${formatLkr(
            it.quantity * it.unitPriceLkr
          )}`
      ),
      ``,
      ...(safeDiscount > 0 ? [`Subtotal: ${formatLkr(subtotalLkr)}`, `Discount: -${formatLkr(safeDiscount)}`] : []),
      `*Total Quotation: ${formatLkr(totalLkr)}*`,
      ...(advancePercent > 0 ? [`Advance (${advancePercent}%): ${formatLkr(advanceAmountLkr)}`] : []),
      ``,
      `Contact ViralPro LK: 074 167 1668 · https://viralpro-lk.vercel.app`,
    ];
    const cleanPhone = customerPhone.replace(/[^0-9]/g, "");
    const targetPhone = cleanPhone.startsWith("0")
      ? `94${cleanPhone.slice(1)}`
      : cleanPhone.startsWith("94")
      ? cleanPhone
      : "94741671668";
    window.open(
      `https://wa.me/${targetPhone}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section
      id="quotation"
      className="py-16 sm:py-24 bg-white border-b border-neutral-100 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#8B0A13]/10 text-[#8B0A13] mb-3">
            Quotation Builder &amp; PDF Generator
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight sinhala-text mb-3">
            මිල ගණන් පත්‍රිකාවක් සකසා PDF ලෙස ලබාගන්න
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Create an official itemized ViralPro LK quotation in seconds — select services from our 2026 rate card or add custom items, then download a ready-to-send customer PDF.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Builder Left */}
          <div className="lg:col-span-7 space-y-6">
            {/* Customer Details Card */}
            <div className="bg-neutral-50 rounded-2xl border border-neutral-200/90 p-5 sm:p-6">
              <h3 className="text-sm font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-sm bg-[#8B0A13]" />
                1. Customer &amp; Quotation Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Customer Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kasun Perera"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full rounded-xl border border-neutral-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 focus:border-[#8B0A13] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Business / Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Royal Cafe Anuradhapura"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full rounded-xl border border-neutral-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 focus:border-[#8B0A13] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Customer Phone / WhatsApp
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 077 123 4567"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full rounded-xl border border-neutral-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 focus:border-[#8B0A13] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Customer Email / Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anuradhapura / info@shop.lk"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full rounded-xl border border-neutral-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 focus:border-[#8B0A13] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Project / Quotation Title
                  </label>
                  <input
                    type="text"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    className="w-full rounded-xl border border-neutral-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 focus:border-[#8B0A13] focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Quotation No
                    </label>
                    <input
                      type="text"
                      value={quotationNumber}
                      onChange={(e) => setQuotationNumber(e.target.value)}
                      className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-xs text-neutral-900 focus:border-[#8B0A13] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Valid Until
                    </label>
                    <input
                      type="date"
                      value={validUntil}
                      onChange={(e) => setValidUntil(e.target.value)}
                      className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-xs text-neutral-900 focus:border-[#8B0A13] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Line Items Card */}
            <div className="bg-neutral-50 rounded-2xl border border-neutral-200/90 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-2 mb-4">
                <h3 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-sm bg-[#8B0A13]" />
                  2. Select Services &amp; Packages
                </h3>
                <button
                  type="button"
                  onClick={addCustomItem}
                  className="inline-flex items-center gap-1 rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-xs font-bold text-neutral-800 hover:bg-neutral-100"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Custom Row
                </button>
              </div>

              {/* Quick Catalog Selector */}
              <div className="rounded-xl bg-white border border-neutral-200 p-3.5 mb-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#8B0A13] mb-2">
                  Quick Add from 2026 Price List
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                  <div className="sm:col-span-5">
                    <select
                      value={selectedCatId}
                      onChange={(e) => {
                        setSelectedCatId(e.target.value);
                        setSelectedPkgIdx(0);
                      }}
                      className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs font-semibold text-neutral-900"
                    >
                      {priceList.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-4">
                    <select
                      value={selectedPkgIdx}
                      onChange={(e) => setSelectedPkgIdx(Number(e.target.value))}
                      className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs font-semibold text-neutral-900"
                    >
                      {(currentCat?.items ?? []).map((it, idx) => (
                        <option key={idx} value={idx}>
                          {it.name} — {it.quote ? it.quote : `Rs. ${it.amount}${it.unit ? ` ${it.unit}` : ""}`}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-3">
                    <button
                      type="button"
                      onClick={addSelectedPackage}
                      className="w-full h-full min-h-[36px] inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#8B0A13] hover:bg-[#6B070E] text-white text-xs font-bold px-3 py-2 transition-colors"
                    >
                      <FilePlus2 className="w-3.5 h-3.5" />
                      Add Item
                    </button>
                  </div>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-white border border-neutral-200 p-3.5 shadow-2xs"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold text-[#8B0A13]">
                        Line Item #{idx + 1}
                      </span>
                      {items.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeItem(idx)}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          Remove
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                      <div className="sm:col-span-4">
                        <label className="block text-[10px] font-bold text-neutral-500 mb-0.5">
                          Service Name
                        </label>
                        <input
                          type="text"
                          value={item.serviceName}
                          onChange={(e) => updateItem(idx, { serviceName: e.target.value })}
                          className="w-full rounded-lg border border-neutral-200 px-2.5 py-1.5 text-xs text-neutral-900"
                        />
                      </div>
                      <div className="sm:col-span-3">
                        <label className="block text-[10px] font-bold text-neutral-500 mb-0.5">
                          Package / Tier
                        </label>
                        <input
                          type="text"
                          value={item.packageName}
                          onChange={(e) => updateItem(idx, { packageName: e.target.value })}
                          className="w-full rounded-lg border border-neutral-200 px-2.5 py-1.5 text-xs text-neutral-900"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-[10px] font-bold text-neutral-500 mb-0.5">
                          Qty
                        </label>
                        <input
                          type="number"
                          min={1}
                          value={item.quantity}
                          onChange={(e) =>
                            updateItem(idx, { quantity: Math.max(1, Number(e.target.value) || 1) })
                          }
                          className="w-full rounded-lg border border-neutral-200 px-2.5 py-1.5 text-xs text-neutral-900"
                        />
                      </div>
                      <div className="sm:col-span-3">
                        <label className="block text-[10px] font-bold text-neutral-500 mb-0.5">
                          Unit Price (LKR)
                        </label>
                        <input
                          type="number"
                          min={0}
                          value={item.unitPriceLkr}
                          onChange={(e) =>
                            updateItem(idx, {
                              unitPriceLkr: Math.max(0, Number(e.target.value) || 0),
                            })
                          }
                          className="w-full rounded-lg border border-neutral-200 px-2.5 py-1.5 text-xs font-bold text-neutral-900"
                        />
                      </div>
                      <div className="sm:col-span-12">
                        <input
                          type="text"
                          placeholder="Deliverables / notes for this item (shown on PDF)"
                          value={item.description ?? ""}
                          onChange={(e) => updateItem(idx, { description: e.target.value })}
                          className="w-full rounded-lg border border-neutral-200 px-2.5 py-1.5 text-xs text-neutral-600"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Discount, Advance & Notes */}
              <div className="mt-4 pt-4 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Discount (LKR)
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={discountLkr}
                    onChange={(e) => setDiscountLkr(Math.max(0, Number(e.target.value) || 0))}
                    className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-xs text-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Advance Payment (%)
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={advancePercent}
                    onChange={(e) =>
                      setAdvancePercent(Math.max(0, Math.min(100, Number(e.target.value) || 0)))
                    }
                    className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-xs text-neutral-900"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Additional Quotation Notes
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-xs text-neutral-900"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Live PDF Preview & Download Right */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="rounded-2xl border-2 border-[#8B0A13]/20 bg-white shadow-lg p-5 sm:p-6">
              <div className="flex items-start justify-between border-b border-neutral-200 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#8B0A13] text-xs font-extrabold text-white">
                      V
                    </span>
                    <span className="text-base font-extrabold text-neutral-900">
                      VIRALPRO <span className="text-[#8B0A13]">LK</span>
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    Anuradhapura · 074 167 1668 · @viralprolk
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 rounded-md bg-[#8B0A13]/10 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-[#8B0A13]">
                    <FileText className="w-3 h-3" /> Quotation PDF
                  </span>
                  <p className="text-xs font-bold text-neutral-900 mt-1">{quotationNumber}</p>
                  <p className="text-[10px] text-neutral-500">Date: {issueDate}</p>
                </div>
              </div>

              <div className="my-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80 p-3 text-xs">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#8B0A13]">
                  Prepared For
                </div>
                <div className="font-bold text-neutral-900 mt-0.5">
                  {customerName || "Valued Customer"}
                  {businessName ? ` — ${businessName}` : ""}
                </div>
                {(customerPhone || customerAddress) && (
                  <div className="text-[11px] text-neutral-500 mt-0.5">
                    {[customerPhone, customerAddress].filter(Boolean).join(" · ")}
                  </div>
                )}
              </div>

              <div className="divide-y divide-neutral-100 max-h-64 overflow-y-auto pr-1">
                {items.map((it, idx) => (
                  <div key={idx} className="py-2.5 flex items-start justify-between gap-3 text-xs">
                    <div>
                      <div className="font-bold text-neutral-900">
                        {it.serviceName}
                        {it.packageName ? ` (${it.packageName})` : ""}
                      </div>
                      <div className="text-[11px] text-neutral-500">
                        {it.quantity} × {formatLkr(it.unitPriceLkr)}
                      </div>
                    </div>
                    <div className="font-extrabold text-neutral-900 whitespace-nowrap">
                      {formatLkr(it.quantity * it.unitPriceLkr)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-200 space-y-2 text-xs">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span className="font-bold text-neutral-900">{formatLkr(subtotalLkr)}</span>
                </div>
                {safeDiscount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount</span>
                    <span className="font-bold">- {formatLkr(safeDiscount)}</span>
                  </div>
                )}
                <div className="flex items-center justify-between rounded-xl bg-[#8B0A13] px-3.5 py-2.5 text-white">
                  <span className="font-bold">Total Quotation Amount</span>
                  <span className="text-sm font-extrabold">{formatLkr(totalLkr)}</span>
                </div>
                {advancePercent > 0 && (
                  <div className="flex justify-between text-[11px] text-neutral-500 px-1">
                    <span>Advance ({advancePercent}%)</span>
                    <span className="font-bold text-neutral-800">
                      {formatLkr(advanceAmountLkr)} · Balance: {formatLkr(balanceLkr)}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-5 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={handleDownloadPdf}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#8B0A13] hover:bg-[#6B070E] text-white text-sm font-bold py-3.5 px-5 shadow-md transition-all active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Customer Quotation PDF</span>
                </button>
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 hover:bg-black text-white text-xs font-bold py-3 px-4 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Quotation Summary on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
