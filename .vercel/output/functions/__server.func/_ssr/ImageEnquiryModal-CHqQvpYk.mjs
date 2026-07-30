import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as BRAND } from "./site-x3fcXbb9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ImageEnquiryModal-CHqQvpYk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ImageEnquiryModal({ item, onClose }) {
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		phone: "",
		location: "",
		spaceType: "Villa Garden",
		notes: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [zoomed, setZoomed] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!item) return;
		const handleKeyDown = (e) => {
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
	const handleSubmit = (e) => {
		e.preventDefault();
		const newErrors = {};
		if (!formData.name.trim()) newErrors.name = "Please enter your name";
		if (!formData.phone.trim() || !/^[0-9+\-\s]{8,15}$/.test(formData.phone.trim())) newErrors.phone = "Valid 10-digit mobile number required";
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
		].filter(Boolean).join("\n");
		const whatsappUrl = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;
		window.open(whatsappUrl, "_blank", "noopener,noreferrer");
		onClose();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "fixed inset-0 bg-forest-deep/90 backdrop-blur-md",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			className: "relative z-10 grid w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-none border border-gold/30 bg-forest-deep text-on-dark shadow-2xl lg:grid-cols-12",
			initial: {
				opacity: 0,
				scale: .95,
				y: 15
			},
			animate: {
				opacity: 1,
				scale: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				scale: .96,
				y: 10
			},
			transition: {
				duration: .3,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					"aria-label": "Close modal",
					className: "absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center border border-on-dark/20 bg-forest-deep/80 text-on-dark transition-colors hover:border-gold hover:text-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						width: "14",
						height: "14",
						viewBox: "0 0 16 16",
						fill: "none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M1 1l14 14M15 1L1 15",
							stroke: "currentColor",
							strokeWidth: "1.5"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between border-b border-on-dark/10 p-6 lg:col-span-6 lg:border-b-0 lg:border-r lg:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mb-6 overflow-hidden border border-on-dark/15 bg-black/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.image,
									alt: item.title,
									className: `w-full transition-transform duration-500 cursor-zoom-in ${item.fit === "contain" ? "object-contain bg-white p-4" : "object-cover"} ${zoomed ? "scale-125" : "scale-100 h-64 sm:h-80 md:h-96"}`,
									onClick: () => setZoomed(!zoomed)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute bottom-3 left-3 bg-black/70 px-3 py-1 text-[0.65rem] tracking-[0.2em] uppercase text-gold",
									children: item.category || "Luxury Collection"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute bottom-3 right-3 bg-black/70 px-2 py-1 text-[0.65rem] text-stone/80",
									children: zoomed ? "Click to shrink" : "Click to zoom"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-on-dark md:text-3xl",
							children: item.title
						}),
						item.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-stone/80 font-sans",
							children: item.description
						}),
						item.specs && item.specs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid grid-cols-2 gap-3 border-t border-on-dark/10 pt-4",
							children: item.specs.map((spec, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-white/5 p-3 border border-white/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.65rem] uppercase tracking-wider text-gold",
									children: spec.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-on-dark font-mono",
									children: spec.value
								})]
							}, i))
						}),
						item.points && item.points.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-2 border-t border-on-dark/10 pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-mono uppercase tracking-widest text-gold",
								children: "Included Services & SLA"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-1.5 text-xs text-stone/80",
								children: item.points.map((pt, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-gold" }), pt]
								}, idx))
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 border-t border-on-dark/10 pt-4 text-[0.72rem] text-stone/60 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							width: "14",
							height: "14",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "12",
								cy: "10",
								r: "3"
							})]
						}), "Direct Delivery & Installation across Rajarajeshwari Nagar & All Bengaluru"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between p-6 lg:col-span-6 lg:p-8 bg-forest-deep/60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.68rem] tracking-[0.22em] text-gold uppercase font-mono",
								children: "Instant Enquiry Form"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-xl text-on-dark",
								children: "Request Pricing & Site Visit"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-stone/70",
								children: "Submitting will open WhatsApp with your item specifications pre-filled."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-[0.7rem] uppercase tracking-wider text-stone/70 mb-1",
									children: "Your Name *"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									required: true,
									placeholder: "e.g. Ananya Sharma",
									value: formData.name,
									onChange: (e) => setFormData({
										...formData,
										name: e.target.value
									}),
									className: "w-full border border-on-dark/20 bg-white/5 px-4 py-2.5 text-sm text-on-dark placeholder:text-stone/40 focus:border-gold focus:outline-none"
								}),
								errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-destructive",
									children: errors.name
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-[0.7rem] uppercase tracking-wider text-stone/70 mb-1",
									children: "WhatsApp Phone Number *"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "tel",
									required: true,
									placeholder: "e.g. 9876543210",
									value: formData.phone,
									onChange: (e) => setFormData({
										...formData,
										phone: e.target.value
									}),
									className: "w-full border border-on-dark/20 bg-white/5 px-4 py-2.5 text-sm text-on-dark placeholder:text-stone/40 focus:border-gold focus:outline-none"
								}),
								errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-destructive",
									children: errors.phone
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-[0.7rem] uppercase tracking-wider text-stone/70 mb-1",
									children: "Location / Area"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "e.g. RR Nagar, Indiranagar",
									value: formData.location,
									onChange: (e) => setFormData({
										...formData,
										location: e.target.value
									}),
									className: "w-full border border-on-dark/20 bg-white/5 px-4 py-2.5 text-sm text-on-dark placeholder:text-stone/40 focus:border-gold focus:outline-none"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-[0.7rem] uppercase tracking-wider text-stone/70 mb-1",
									children: "Property Type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: formData.spaceType,
									onChange: (e) => setFormData({
										...formData,
										spaceType: e.target.value
									}),
									className: "w-full border border-on-dark/20 bg-forest-deep px-3 py-2.5 text-sm text-on-dark focus:border-gold focus:outline-none",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Villa Garden",
											children: "Villa Garden"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Apartment Balcony",
											children: "Apartment Balcony"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Rooftop Terrace",
											children: "Rooftop Terrace"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Indoor Living Room",
											children: "Indoor Living Room"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Commercial / Office",
											children: "Commercial / Office"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Resort / Farmhouse",
											children: "Resort / Farmhouse"
										})
									]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-[0.7rem] uppercase tracking-wider text-stone/70 mb-1",
								children: "Specific Details / Customization Notes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 3,
								placeholder: "Mention quantity, dimensions, pot preference or timeline...",
								value: formData.notes,
								onChange: (e) => setFormData({
									...formData,
									notes: e.target.value
								}),
								className: "w-full border border-on-dark/20 bg-white/5 px-4 py-2.5 text-sm text-on-dark placeholder:text-stone/40 focus:border-gold focus:outline-none resize-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold py-3.5 px-6 transition-colors shadow-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "20",
									height: "20",
									viewBox: "0 0 24 24",
									fill: "currentColor",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.33 4.988L2 22l5.132-1.346a9.92 9.92 0 0 0 4.88 1.28h.004c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.038-5.174-2.925-7.06A9.917 9.917 0 0 0 12.012 2zm0 18.272h-.003a8.257 8.257 0 0 1-4.212-1.157l-.302-.18-3.125.819.834-3.045-.198-.315a8.27 8.27 0 0 1-1.267-4.408c0-4.561 3.712-8.273 8.275-8.273 2.21 0 4.287.862 5.85 2.426a8.23 8.23 0 0 1 2.422 5.854c0 4.562-3.712 8.273-8.274 8.273zm4.537-6.2c-.248-.124-1.468-.724-1.696-.807-.228-.083-.394-.124-.56.124-.165.248-.642.807-.787.973-.145.166-.29.186-.538.062-.248-.124-1.047-.386-1.995-1.231-.738-.658-1.237-1.47-1.382-1.718-.145-.248-.015-.382.109-.505.111-.11.248-.29.373-.435.124-.145.165-.248.248-.415.083-.166.042-.31-.02-.435-.063-.124-.56-1.35-.767-1.848-.201-.485-.406-.419-.56-.427l-.476-.008c-.166 0-.436.062-.664.31-.228.248-.871.85-.871 2.073 0 1.223.892 2.404 1.016 2.57.124.166 1.756 2.68 4.254 3.758.594.256 1.058.41 1.42.525.597.19 1.141.163 1.57.099.479-.071 1.468-.601 1.676-1.18.207-.58.207-1.077.145-1.18-.062-.104-.228-.166-.476-.29z" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enquire Now on WhatsApp" })]
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center justify-between text-xs text-stone/50 border-t border-on-dark/10 pt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Fast 10-Min Response Time" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🔒 100% Privacy Assured" })]
					})]
				})
			]
		})]
	}) });
}
//#endregion
export { ImageEnquiryModal as t };
