import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as PRODUCTS, o as LuxLink, u as Reveal } from "./catalog-CBDV82nW.mjs";
import { t as ImageEnquiryModal } from "./ImageEnquiryModal-7cE7rkIr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PlantFinder-DGkUBkqk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Card({ p, index, onSelect }) {
	const spanClass = p.span === "tall" ? "md:row-span-2 aspect-[3/4] md:aspect-auto md:min-h-[42rem]" : p.span === "wide" ? "md:col-span-2 aspect-[4/3] md:aspect-[16/9]" : "aspect-[4/5]";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay: index % 3 * .08,
		className: spanClass,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onSelect(p),
			className: "media-zoom group relative h-full w-full overflow-hidden bg-forest-deep text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.image,
					alt: `${p.title} available at RR Heaven Gardenblr, Bengaluru`,
					loading: "lazy",
					className: "h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scrim-bottom absolute inset-0 opacity-90 transition-opacity duration-700 group-hover:opacity-100" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 p-7 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.65rem] tracking-[0.2em] uppercase text-gold/90 font-mono",
							children: p.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl text-on-dark md:text-[1.7rem] mt-1",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:grid-rows-[1fr]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "pt-3 max-w-sm text-sm leading-relaxed text-stone/75",
									children: p.copy
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-5 inline-flex items-center gap-3 text-[0.68rem] tracking-[0.2em] text-gold uppercase font-mono font-semibold border-b border-gold/40 pb-1 group-hover:border-gold transition-colors",
							children: ["Enquire & View Details", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								width: "18",
								height: "8",
								viewBox: "0 0 18 8",
								fill: "none",
								"aria-hidden": "true",
								className: "transition-transform duration-700 group-hover:translate-x-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M0 4h16M13 1l3 3-3 3",
									stroke: "currentColor",
									strokeWidth: "1"
								})
							})]
						})
					]
				})
			]
		})
	});
}
function ProductGrid({ limit, showHeading = true }) {
	const [selectedProduct, setSelectedProduct] = (0, import_react.useState)(null);
	const items = limit ? PRODUCTS.slice(0, limit) : PRODUCTS;
	const handleSelect = (p) => {
		setSelectedProduct({
			title: p.title,
			category: p.category,
			image: p.image,
			description: p.copy,
			specs: p.specs,
			points: p.careGuide
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-background py-24 md:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 md:px-10",
			children: [
				showHeading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mb-16 grid gap-8 md:mb-24 md:grid-cols-[1fr_auto] md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "The Collection"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-6 max-w-2xl text-forest",
						children: "Plants and planters chosen the way an architect chooses stone."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-lux max-w-sm md:text-right",
						children: "Click any image to view architectural specs and send an instant inquiry directly on WhatsApp."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid auto-rows-[minmax(0,1fr)] gap-4 md:grid-cols-3 md:gap-5",
					children: items.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						p,
						index: i,
						onSelect: handleSelect
					}, p.title))
				}),
				limit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mt-14 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxLink, {
						to: "/products",
						variant: "outline",
						children: "View full collection"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageEnquiryModal, {
			item: selectedProduct,
			onClose: () => setSelectedProduct(null)
		})]
	});
}
function PlantFinder() {
	const [filterLight, setFilterLight] = (0, import_react.useState)("All");
	const [selectedProduct, setSelectedProduct] = (0, import_react.useState)(null);
	const filteredProducts = PRODUCTS.filter((p) => {
		if (filterLight === "All") return true;
		return p.specs.some((s) => s.label === "Light Requirement" && s.value.toLowerCase().includes(filterLight.toLowerCase()));
	});
	const handleOpenInquiry = (p) => {
		setSelectedProduct({
			title: p.title,
			category: p.category,
			image: p.image,
			description: p.copy,
			specs: p.specs,
			points: p.careGuide
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-background py-24 md:py-36 border-t border-foreground/10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold font-mono",
					children: "Botanical Finder"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-6 text-forest",
					children: "Find Plants Matched to Your Lighting & Architecture"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						{
							id: "All",
							label: "All Species"
						},
						{
							id: "Filtered",
							label: "Filtered / Low Light"
						},
						{
							id: "Medium",
							label: "Medium Light"
						},
						{
							id: "Sun",
							label: "Full Sun Outdoor"
						}
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilterLight(f.id),
						className: `px-4 py-2 text-xs font-mono uppercase tracking-widest border transition-all ${filterLight === f.id ? "border-forest bg-forest text-on-dark font-bold" : "border-foreground/20 bg-transparent text-foreground/70 hover:border-forest"}`,
						children: f.label
					}, f.id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: filteredProducts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: () => handleOpenInquiry(p),
						className: "group relative flex flex-col justify-between border border-foreground/10 bg-white/40 p-5 hover:border-gold transition-all duration-300 cursor-pointer hover:shadow-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[4/3] w-full overflow-hidden bg-forest-deep mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: p.title,
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute top-3 left-3 bg-black/70 px-2.5 py-1 text-[0.65rem] uppercase tracking-widest text-gold font-mono",
									children: p.category
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl text-forest group-hover:text-gold transition-colors",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-foreground/75 font-sans line-clamp-2",
								children: p.copy
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 border-t border-foreground/10 pt-4 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.68rem] font-mono uppercase tracking-wider text-forest font-bold",
								children: "View Specs & Care"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-gold text-black text-[0.65rem] font-mono uppercase px-3 py-1 font-bold",
								children: "Enquire"
							})]
						})]
					})
				}, p.title))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageEnquiryModal, {
			item: selectedProduct,
			onClose: () => setSelectedProduct(null)
		})]
	});
}
//#endregion
export { ProductGrid as n, PlantFinder as t };
