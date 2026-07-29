import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { BRAND } from "@/lib/site";

export function BudgetEstimator() {
  const [spaceType, setSpaceType] = useState<"villa" | "balcony" | "terrace" | "indoor">("villa");
  const [areaSize, setAreaSize] = useState<number>(1500);
  const [tier, setTier] = useState<"standard" | "luxury" | "signature">("luxury");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const estimatedPlants = Math.round(areaSize * (spaceType === "indoor" ? 0.08 : 0.04));
  const estimatedDays = spaceType === "balcony" ? 2 : spaceType === "terrace" ? 5 : 12;

  const tierDetails = {
    standard: { label: "Executive Tier", specs: "Acclimatised Nursery Stock + UV Poly Planters" },
    luxury: { label: "Luxury Villa Tier", specs: "Architectural Palms + Artisan Glazed Ceramics + Drip Irrigation" },
    signature: { label: "Signature Estate Tier", specs: "Mature Specimen Trees + Granite Monoliths + Hardscaping" },
  };

  const handleExportToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    const spaceLabel =
      spaceType === "villa"
        ? "Villa Garden & Landscape"
        : spaceType === "terrace"
        ? "Rooftop Terrace Lounge"
        : spaceType === "balcony"
        ? "Apartment Balcony Garden"
        : "Indoor Living Room & Bio Wall";

    const text = [
      `📊 *PROJECT SCOPE REQUEST — ${BRAND.name}*`,
      `-----------------------------------------`,
      `🏡 *Space Type:* ${spaceLabel}`,
      `📐 *Area Size:* ${areaSize} sq ft`,
      `✨ *Specification Tier:* ${tierDetails[tier].label}`,
      `📋 *Material Specs:* ${tierDetails[tier].specs}`,
      `🌱 *Est. Plant Count:* ~${estimatedPlants} specimen plants`,
      `⏱️ *Estimated Turnaround:* ~${estimatedDays} days execution`,
      ``,
      `👤 *Client Name:* ${name || "Client"}`,
      `📞 *Phone:* ${phone}`,
      `-----------------------------------------`,
      `Please contact me to confirm site inspection and share customized BOQ.`
    ].join("\n");

    window.open(
      `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="bg-forest-deep py-24 text-on-dark md:py-36 border-t border-gold/20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="mb-16 max-w-3xl">
          <p className="eyebrow text-gold font-mono">Interactive Tool</p>
          <h2 className="display-lg mt-6 text-on-dark">
            Instant Garden & Landscape Scope Estimator
          </h2>
          <p className="mt-4 text-stone/75 body-lux max-w-xl">
            Estimate plant count, material specifications, and execution turnaround time for your luxury villa, balcony, rooftop terrace, or indoor space in Bengaluru.
          </p>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Controls */}
          <Reveal className="space-y-8 lg:col-span-7 bg-white/5 p-6 sm:p-8 border border-white/10">
            {/* Step 1: Space Type */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-gold font-mono mb-3">
                1. Select Space Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "villa", label: "Villa Garden" },
                  { id: "terrace", label: "Rooftop Deck" },
                  { id: "balcony", label: "Balcony" },
                  { id: "indoor", label: "Indoor Living" },
                ].map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setSpaceType(st.id as any)}
                    className={`py-3 px-3 text-xs uppercase font-mono tracking-wider border transition-all ${
                      spaceType === st.id
                        ? "border-gold bg-gold text-black font-bold shadow-lg"
                        : "border-white/15 bg-transparent text-stone/80 hover:border-gold/50"
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Area Size */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs uppercase tracking-widest text-gold font-mono">
                  2. Area Size (sq ft)
                </label>
                <span className="font-mono text-lg text-gold font-bold">{areaSize} sq ft</span>
              </div>
              <input
                type="range"
                min={100}
                max={10000}
                step={50}
                value={areaSize}
                onChange={(e) => setAreaSize(Number(e.target.value))}
                className="w-full h-2 bg-white/20 accent-gold rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[0.68rem] text-stone/50 font-mono mt-1">
                <span>100 sq ft (Balcony)</span>
                <span>2,500 sq ft (Terrace)</span>
                <span>10,000 sq ft (Estate)</span>
              </div>
            </div>

            {/* Step 3: Finish Tier */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-gold font-mono mb-3">
                3. Specification & Material Tier
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "standard", label: "Executive", desc: "Acclimatised plants + Fiber pots" },
                  { id: "luxury", label: "Luxury Villa", desc: "Architectural palms + Glazed pots + Drip" },
                  { id: "signature", label: "Signature", desc: "Mature specimens + Granite hardscape" },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTier(t.id as any)}
                    className={`p-3 text-left border transition-all ${
                      tier === t.id
                        ? "border-gold bg-gold/10 text-on-dark"
                        : "border-white/10 bg-transparent text-stone/60 hover:border-white/30"
                    }`}
                  >
                    <span className="block text-xs uppercase font-mono font-bold text-gold">{t.label}</span>
                    <span className="block text-[0.65rem] text-stone/70 mt-1 leading-tight">{t.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right Summary & WhatsApp Export */}
          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="border border-gold bg-forest-deep p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold text-black text-[0.6rem] font-mono font-bold uppercase px-3 py-1 tracking-widest">
                Scope Summary
              </div>

              <p className="eyebrow text-gold font-mono">Project Scope Overview</p>
              <div className="mt-4 border-b border-white/10 pb-6">
                <span className="font-display text-2xl sm:text-3xl text-on-dark block">
                  {tierDetails[tier].label}
                </span>
                <p className="text-xs text-stone/70 font-sans mt-2 leading-relaxed">
                  {tierDetails[tier].specs}
                </p>
              </div>

              <div className="py-6 grid grid-cols-2 gap-4 border-b border-white/10 text-xs">
                <div>
                  <span className="text-stone/50 block font-mono">SPECIMEN PLANTS</span>
                  <span className="text-on-dark font-bold text-base mt-0.5 block">~{estimatedPlants} Specimen Pots</span>
                </div>
                <div>
                  <span className="text-stone/50 block font-mono">TURN-AROUND</span>
                  <span className="text-on-dark font-bold text-base mt-0.5 block">~{estimatedDays} Working Days</span>
                </div>
              </div>

              <form onSubmit={handleExportToWhatsApp} className="mt-6 space-y-3">
                <p className="text-xs font-mono uppercase text-gold">Get Customized BOQ via WhatsApp</p>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-white/20 bg-white/5 px-3 py-2 text-xs text-on-dark placeholder:text-stone/40 focus:border-gold focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp Mobile Number *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-white/20 bg-white/5 px-3 py-2 text-xs text-on-dark placeholder:text-stone/40 focus:border-gold focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold py-3 px-4 text-xs tracking-wider uppercase transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.33 4.988L2 22l5.132-1.346a9.92 9.92 0 0 0 4.88 1.28h.004c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.038-5.174-2.925-7.06A9.917 9.917 0 0 0 12.012 2zm0 18.272h-.003a8.257 8.257 0 0 1-4.212-1.157l-.302-.18-3.125.819.834-3.045-.198-.315a8.27 8.27 0 0 1-1.267-4.408c0-4.561 3.712-8.273 8.275-8.273 2.21 0 4.287.862 5.85 2.426a8.23 8.23 0 0 1 2.422 5.854c0 4.562-3.712 8.273-8.274 8.273z"/>
                  </svg>
                  <span>Request BOQ Quotation on WhatsApp</span>
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
