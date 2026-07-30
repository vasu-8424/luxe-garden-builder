import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as SERVICES, o as LuxLink, u as Reveal } from "./catalog-BQPxniiu.mjs";
import { t as BRAND } from "./site-18rpi0wb.mjs";
import { t as ImageEnquiryModal } from "./ImageEnquiryModal-BgB3rqwU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BudgetEstimator-BY_OdpZa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ServiceRows({ limit }) {
	const [selectedService, setSelectedService] = (0, import_react.useState)(null);
	const items = limit ? SERVICES.slice(0, limit) : SERVICES;
	const handleOpenInquiry = (s) => {
		setSelectedService({
			title: s.title,
			category: "Architectural Service",
			image: s.image,
			description: s.copy,
			points: s.points,
			specs: s.specs
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-cream-deep py-24 md:py-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1400px] px-5 md:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mb-20 max-w-3xl md:mb-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-6 text-forest",
						children: "From a single planter to an entire landscape."
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-24 md:space-y-36",
				children: items.map((s, i) => {
					const flipped = i % 2 === 1;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-[1400px] items-center gap-10 px-5 md:px-10 lg:grid-cols-2 lg:gap-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: flipped ? "lg:order-2" : "",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => handleOpenInquiry(s),
								className: "media-zoom group relative aspect-[4/3] w-full overflow-hidden bg-forest-deep shadow-lift text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: s.image,
										alt: `${s.title} by RR Heaven Gardenblr in Bengaluru`,
										loading: "lazy",
										className: "h-full w-full object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scrim-bottom absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "bg-forest-deep/90 border border-gold text-gold font-mono text-xs uppercase tracking-widest px-4 py-2 shadow-2xl",
											children: "Click to View & Enquire on WhatsApp"
										})
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: .1,
							className: flipped ? "lg:order-1" : "",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "numeral text-sm text-gold",
									children: String(i + 1).padStart(2, "0")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "display-md mt-5 text-forest",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-7" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "body-lux mt-7 max-w-lg",
									children: s.copy
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-9 space-y-3",
									children: s.points.map((pt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-4 border-b border-foreground/8 pb-3 text-sm text-foreground/75",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 shrink-0 bg-gold" }), pt]
									}, pt))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex flex-wrap gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => handleOpenInquiry(s),
										className: "bg-forest text-on-dark hover:bg-forest-deep px-6 py-3 text-xs tracking-[0.18em] uppercase font-mono transition-colors font-semibold shadow-md flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enquire Service" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "14",
											height: "14",
											viewBox: "0 0 24 24",
											fill: "currentColor",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.33 4.988L2 22l5.132-1.346a9.92 9.92 0 0 0 4.88 1.28h.004c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.038-5.174-2.925-7.06A9.917 9.917 0 0 0 12.012 2zm0 18.272h-.003a8.257 8.257 0 0 1-4.212-1.157l-.302-.18-3.125.819.834-3.045-.198-.315a8.27 8.27 0 0 1-1.267-4.408c0-4.561 3.712-8.273 8.275-8.273 2.21 0 4.287.862 5.85 2.426a8.23 8.23 0 0 1 2.422 5.854c0 4.562-3.712 8.273-8.274 8.273z" })
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxLink, {
										to: "/book-consultation",
										variant: "outline",
										children: "Book Site Inspection"
									})]
								})
							]
						})]
					}, s.title);
				})
			}),
			limit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-20 flex max-w-[1400px] justify-center px-5 md:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxLink, {
					to: "/services",
					variant: "solid",
					children: "All eight services"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageEnquiryModal, {
				item: selectedService,
				onClose: () => setSelectedService(null)
			})
		]
	});
}
function BudgetEstimator() {
	const [spaceType, setSpaceType] = (0, import_react.useState)("villa");
	const [areaSize, setAreaSize] = (0, import_react.useState)(1500);
	const [tier, setTier] = (0, import_react.useState)("luxury");
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const estimatedPlants = Math.round(areaSize * (spaceType === "indoor" ? .08 : .04));
	const estimatedDays = spaceType === "balcony" ? 2 : spaceType === "terrace" ? 5 : 7;
	const tierDetails = {
		standard: {
			label: "Executive Tier",
			specs: "Acclimatised Nursery Stock + UV Poly Planters"
		},
		luxury: {
			label: "Luxury Villa Tier",
			specs: "Architectural Palms + Artisan Glazed Ceramics + Drip Irrigation"
		},
		signature: {
			label: "Signature Estate Tier",
			specs: "Mature Specimen Trees + Granite Monoliths + Hardscaping"
		}
	};
	const handleExportToWhatsApp = (e) => {
		e.preventDefault();
		if (!phone) return;
		const spaceLabel = spaceType === "villa" ? "Villa Garden & Landscape" : spaceType === "terrace" ? "Rooftop Terrace Lounge" : spaceType === "balcony" ? "Apartment Balcony Garden" : "Indoor Living Room & Bio Wall";
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
		window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-forest-deep py-24 text-on-dark md:py-36 border-t border-gold/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-16 max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold font-mono",
						children: "Interactive Tool"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-6 text-on-dark",
						children: "Instant Garden & Landscape Scope Estimator"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-stone/75 body-lux max-w-xl",
						children: "Estimate plant count, material specifications, and execution turnaround time for your luxury villa, balcony, rooftop terrace, or indoor space in Bengaluru."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-12 lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "space-y-8 lg:col-span-7 bg-white/5 p-6 sm:p-8 border border-white/10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs uppercase tracking-widest text-gold font-mono mb-3",
							children: "1. Select Space Type"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
							children: [
								{
									id: "villa",
									label: "Villa Garden"
								},
								{
									id: "terrace",
									label: "Rooftop Deck"
								},
								{
									id: "balcony",
									label: "Balcony"
								},
								{
									id: "indoor",
									label: "Indoor Living"
								}
							].map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSpaceType(st.id),
								className: `py-3 px-3 text-xs uppercase font-mono tracking-wider border transition-all ${spaceType === st.id ? "border-gold bg-gold text-black font-bold shadow-lg" : "border-white/15 bg-transparent text-stone/80 hover:border-gold/50"}`,
								children: st.label
							}, st.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs uppercase tracking-widest text-gold font-mono",
									children: "2. Area Size (sq ft)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-lg text-gold font-bold",
									children: [areaSize, " sq ft"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: 100,
								max: 1e4,
								step: 50,
								value: areaSize,
								onChange: (e) => setAreaSize(Number(e.target.value)),
								className: "w-full h-2 bg-white/20 accent-gold rounded-lg cursor-pointer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[0.68rem] text-stone/50 font-mono mt-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "100 sq ft (Balcony)" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2,500 sq ft (Terrace)" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "10,000 sq ft (Estate)" })
								]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs uppercase tracking-widest text-gold font-mono mb-3",
							children: "3. Specification & Material Tier"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 gap-3",
							children: [
								{
									id: "standard",
									label: "Executive",
									desc: "Acclimatised plants + Fiber pots"
								},
								{
									id: "luxury",
									label: "Luxury Villa",
									desc: "Architectural palms + Glazed pots + Drip"
								},
								{
									id: "signature",
									label: "Signature",
									desc: "Mature specimens + Granite hardscape"
								}
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setTier(t.id),
								className: `p-3 text-left border transition-all ${tier === t.id ? "border-gold bg-gold/10 text-on-dark" : "border-white/10 bg-transparent text-stone/60 hover:border-white/30"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs uppercase font-mono font-bold text-gold",
									children: t.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[0.65rem] text-stone/70 mt-1 leading-tight",
									children: t.desc
								})]
							}, t.id))
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-gold bg-forest-deep p-6 sm:p-8 shadow-2xl relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-0 right-0 bg-gold text-black text-[0.6rem] font-mono font-bold uppercase px-3 py-1 tracking-widest",
								children: "Scope Summary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-gold font-mono",
								children: "Project Scope Overview"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 border-b border-white/10 pb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl sm:text-3xl text-on-dark block",
									children: tierDetails[tier].label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-stone/70 font-sans mt-2 leading-relaxed",
									children: tierDetails[tier].specs
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-6 grid grid-cols-2 gap-4 border-b border-white/10 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-stone/50 block font-mono",
									children: "SPECIMEN PLANTS"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-on-dark font-bold text-base mt-0.5 block",
									children: [
										"~",
										estimatedPlants,
										" Specimen Pots"
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-stone/50 block font-mono",
									children: "TURN-AROUND"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-on-dark font-bold text-base mt-0.5 block",
									children: [
										"~",
										estimatedDays,
										" Working Days"
									]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleExportToWhatsApp,
								className: "mt-6 space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-mono uppercase text-gold",
										children: "Get Customized BOQ via WhatsApp"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										placeholder: "Your Name",
										value: name,
										onChange: (e) => setName(e.target.value),
										className: "w-full border border-white/20 bg-white/5 px-3 py-2 text-xs text-on-dark placeholder:text-stone/40 focus:border-gold focus:outline-none"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "tel",
										required: true,
										placeholder: "WhatsApp Mobile Number *",
										value: phone,
										onChange: (e) => setPhone(e.target.value),
										className: "w-full border border-white/20 bg-white/5 px-3 py-2 text-xs text-on-dark placeholder:text-stone/40 focus:border-gold focus:outline-none"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										className: "w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold py-3 px-4 text-xs tracking-wider uppercase transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "16",
											height: "16",
											viewBox: "0 0 24 24",
											fill: "currentColor",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.33 4.988L2 22l5.132-1.346a9.92 9.92 0 0 0 4.88 1.28h.004c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.038-5.174-2.925-7.06A9.917 9.917 0 0 0 12.012 2zm0 18.272h-.003a8.257 8.257 0 0 1-4.212-1.157l-.302-.18-3.125.819.834-3.045-.198-.315a8.27 8.27 0 0 1-1.267-4.408c0-4.561 3.712-8.273 8.275-8.273 2.21 0 4.287.862 5.85 2.426a8.23 8.23 0 0 1 2.422 5.854c0 4.562-3.712 8.273-8.274 8.273z" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Request BOQ Quotation on WhatsApp" })]
									})
								]
							})
						]
					})
				})]
			})]
		})
	});
}
//#endregion
export { ServiceRows as n, BudgetEstimator as t };
