import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BRAND } from "@/lib/site";

export type ImageEnquiryItem = {
  title: string;
  category?: string;
  image: string;
  description?: string;
  specs?: { label: string; value: string }[];
  points?: string[];
  price?: string;
  fit?: "contain" | "cover";
};

interface ImageEnquiryModalProps {
  item: ImageEnquiryItem | null;
  onClose: () => void;
}

export function ImageEnquiryModal({ item, onClose }: ImageEnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    spaceType: "Villa Garden",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.phone.trim() || !/^[0-9+\-\s]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Valid 10-digit mobile number required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const specsText = item.specs?.map((s) => `${s.label}: ${s.value}`).join(" | ");

    const text = [
      `🌿 *ENQUIRY: ${item.title.toUpperCase()}*`,
      `📍 *Category:* ${item.category || "Luxury Collection"}`,
      specsText ? `📋 *Specs:* ${specsText}` : "",
      ``,
      `👤 *Customer Name:* ${formData.name}`,
      `📞 *Phone Number:* ${formData.phone}`,
      formData.location ? `🏠 *Location / Address:* ${formData.location}` : "",
      `🏢 *Space Type:* ${formData.spaceType}`,
      formData.notes ? `📝 *Requirements:* ${formData.notes}` : "",
      ``,
      `Sent from website image enquiry form (${BRAND.name})`
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-forest-deep/90 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          className="relative z-10 grid w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-none border border-gold/30 bg-forest-deep text-on-dark shadow-2xl lg:grid-cols-12"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center border border-on-dark/20 bg-forest-deep/80 text-on-dark transition-colors hover:border-gold hover:text-gold"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>

          {/* Left Side: Image Preview & Architectural Specs */}
          <div className="flex flex-col justify-between border-b border-on-dark/10 p-6 lg:col-span-6 lg:border-b-0 lg:border-r lg:p-8">
            <div>
              <div className="relative mb-6 overflow-hidden border border-on-dark/15 bg-black/40">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full transition-transform duration-500 cursor-zoom-in ${
                    item.fit === "contain" ? "object-contain bg-white p-4" : "object-cover"
                  } ${zoomed ? "scale-125" : "scale-100 h-64 sm:h-80 md:h-96"}`}
                  onClick={() => setZoomed(!zoomed)}
                />
                <span className="absolute bottom-3 left-3 bg-black/70 px-3 py-1 text-[0.65rem] tracking-[0.2em] uppercase text-gold">
                  {item.category || "Luxury Collection"}
                </span>
                <span className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 text-[0.65rem] text-stone/80">
                  {zoomed ? "Click to shrink" : "Click to zoom"}
                </span>
              </div>

              <h2 className="font-display text-2xl text-on-dark md:text-3xl">{item.title}</h2>
              
              {item.description && (
                <p className="mt-3 text-sm leading-relaxed text-stone/80 font-sans">{item.description}</p>
              )}

              {item.specs && item.specs.length > 0 && (
                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-on-dark/10 pt-4">
                  {item.specs.map((spec, i) => (
                    <div key={i} className="bg-white/5 p-3 border border-white/5">
                      <p className="text-[0.65rem] uppercase tracking-wider text-gold">{spec.label}</p>
                      <p className="mt-1 text-xs text-on-dark font-mono">{spec.value}</p>
                    </div>
                  ))}
                </div>
              )}

              {item.points && item.points.length > 0 && (
                <div className="mt-5 space-y-2 border-t border-on-dark/10 pt-4">
                  <p className="text-xs font-mono uppercase tracking-widest text-gold">Included Services & SLA</p>
                  <ul className="space-y-1.5 text-xs text-stone/80">
                    {item.points.map((pt, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 bg-gold" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-6 border-t border-on-dark/10 pt-4 text-[0.72rem] text-stone/60 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Direct Delivery & Installation across Rajarajeshwari Nagar & All Bengaluru
            </div>
          </div>

          {/* Right Side: Inquiry Contact Form & Direct WhatsApp Submit */}
          <div className="flex flex-col justify-between p-6 lg:col-span-6 lg:p-8 bg-forest-deep/60">
            <div>
              <div className="mb-6">
                <span className="text-[0.68rem] tracking-[0.22em] text-gold uppercase font-mono">
                  Instant Enquiry Form
                </span>
                <h3 className="mt-1 font-display text-xl text-on-dark">
                  Request Pricing & Site Visit
                </h3>
                <p className="mt-1 text-xs text-stone/70">
                  Submitting will open WhatsApp with your item specifications pre-filled.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[0.7rem] uppercase tracking-wider text-stone/70 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-on-dark/20 bg-white/5 px-4 py-2.5 text-sm text-on-dark placeholder:text-stone/40 focus:border-gold focus:outline-none"
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-[0.7rem] uppercase tracking-wider text-stone/70 mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-on-dark/20 bg-white/5 px-4 py-2.5 text-sm text-on-dark placeholder:text-stone/40 focus:border-gold focus:outline-none"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[0.7rem] uppercase tracking-wider text-stone/70 mb-1">
                      Location / Area
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. RR Nagar, Indiranagar"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full border border-on-dark/20 bg-white/5 px-4 py-2.5 text-sm text-on-dark placeholder:text-stone/40 focus:border-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.7rem] uppercase tracking-wider text-stone/70 mb-1">
                      Property Type
                    </label>
                    <select
                      value={formData.spaceType}
                      onChange={(e) => setFormData({ ...formData, spaceType: e.target.value })}
                      className="w-full border border-on-dark/20 bg-forest-deep px-3 py-2.5 text-sm text-on-dark focus:border-gold focus:outline-none"
                    >
                      <option value="Villa Garden">Villa Garden</option>
                      <option value="Apartment Balcony">Apartment Balcony</option>
                      <option value="Rooftop Terrace">Rooftop Terrace</option>
                      <option value="Indoor Living Room">Indoor Living Room</option>
                      <option value="Commercial / Office">Commercial / Office</option>
                      <option value="Resort / Farmhouse">Resort / Farmhouse</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[0.7rem] uppercase tracking-wider text-stone/70 mb-1">
                    Specific Details / Customization Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention quantity, dimensions, pot preference or timeline..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full border border-on-dark/20 bg-white/5 px-4 py-2.5 text-sm text-on-dark placeholder:text-stone/40 focus:border-gold focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold py-3.5 px-6 transition-colors shadow-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.33 4.988L2 22l5.132-1.346a9.92 9.92 0 0 0 4.88 1.28h.004c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.038-5.174-2.925-7.06A9.917 9.917 0 0 0 12.012 2zm0 18.272h-.003a8.257 8.257 0 0 1-4.212-1.157l-.302-.18-3.125.819.834-3.045-.198-.315a8.27 8.27 0 0 1-1.267-4.408c0-4.561 3.712-8.273 8.275-8.273 2.21 0 4.287.862 5.85 2.426a8.23 8.23 0 0 1 2.422 5.854c0 4.562-3.712 8.273-8.274 8.273zm4.537-6.2c-.248-.124-1.468-.724-1.696-.807-.228-.083-.394-.124-.56.124-.165.248-.642.807-.787.973-.145.166-.29.186-.538.062-.248-.124-1.047-.386-1.995-1.231-.738-.658-1.237-1.47-1.382-1.718-.145-.248-.015-.382.109-.505.111-.11.248-.29.373-.435.124-.145.165-.248.248-.415.083-.166.042-.31-.02-.435-.063-.124-.56-1.35-.767-1.848-.201-.485-.406-.419-.56-.427l-.476-.008c-.166 0-.436.062-.664.31-.228.248-.871.85-.871 2.073 0 1.223.892 2.404 1.016 2.57.124.166 1.756 2.68 4.254 3.758.594.256 1.058.41 1.42.525.597.19 1.141.163 1.57.099.479-.071 1.468-.601 1.676-1.18.207-.58.207-1.077.145-1.18-.062-.104-.228-.166-.476-.29z"/>
                  </svg>
                  <span>Enquire Now on WhatsApp</span>
                </button>
              </form>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-stone/50 border-t border-on-dark/10 pt-3">
              <span>Fast 10-Min Response Time</span>
              <span>🔒 100% Privacy Assured</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
