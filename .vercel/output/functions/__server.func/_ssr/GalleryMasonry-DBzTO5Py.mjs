import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as GALLERY_CATEGORIES, t as GALLERY, u as Reveal } from "./catalog-CHeQAKtr.mjs";
import { t as ImageEnquiryModal } from "./ImageEnquiryModal-CHqQvpYk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GalleryMasonry-DBzTO5Py.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ratioClass = {
	tall: "aspect-[3/4]",
	square: "aspect-square",
	wide: "aspect-[4/3]"
};
function GalleryMasonry({ filters = true }) {
	const [active, setActive] = (0, import_react.useState)("All");
	const [selectedItem, setSelectedItem] = (0, import_react.useState)(null);
	const items = active === "All" ? GALLERY : GALLERY.filter((g) => g.category === active);
	const handleOpenInquiry = (g) => {
		setSelectedItem({
			title: g.title,
			category: g.category,
			image: g.image,
			description: g.description || `Architectural garden installation crafted by RR Heaven Gardenblr for ${g.category} spaces in Bengaluru.`,
			fit: g.fit,
			specs: g.specs || [
				{
					label: "Category",
					value: g.category
				},
				{
					label: "Execution",
					value: "RR Heaven Gardenblr Master Team"
				},
				{
					label: "Location",
					value: "Bengaluru, Karnataka"
				}
			]
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-background py-24 md:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mb-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "Featured Gardens"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-6 max-w-2xl text-forest",
						children: "A portfolio measured in mornings, not photographs."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-lux max-w-sm text-sm md:text-right",
						children: "Click any gallery image to open full details and enquire directly on WhatsApp."
					})]
				}),
				filters && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mb-12 flex flex-wrap gap-x-8 gap-y-3 border-b border-foreground/10 pb-4",
					children: GALLERY_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActive(c),
						className: `text-[0.7rem] tracking-[0.2em] uppercase font-mono transition-colors duration-300 py-1 ${active === c ? "text-gold border-b-2 border-gold font-bold" : "text-foreground/50 hover:text-forest"}`,
						children: c
					}, c))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4",
					children: items.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 3 * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => handleOpenInquiry(g),
							className: "media-zoom group relative block w-full overflow-hidden bg-forest-deep text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: ratioClass[g.ratio],
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: g.image,
										alt: `${g.title} — ${g.category} garden project by RR Heaven Gardenblr`,
										loading: "lazy",
										className: `h-full w-full transition-transform duration-700 group-hover:scale-105 ${g.fit === "contain" ? "object-contain bg-white p-3" : "object-cover"}`
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scrim-bottom absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 flex justify-between items-end",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow text-gold font-mono",
										children: g.category
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-display text-xl text-on-dark",
										children: g.title
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "bg-gold/90 text-black text-[0.65rem] uppercase tracking-widest px-3 py-1.5 font-mono font-bold",
										children: "Enquire"
									})]
								})
							]
						})
					}, `${g.title}-${i}`))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageEnquiryModal, {
			item: selectedItem,
			onClose: () => setSelectedItem(null)
		})]
	});
}
//#endregion
export { GalleryMasonry as t };
