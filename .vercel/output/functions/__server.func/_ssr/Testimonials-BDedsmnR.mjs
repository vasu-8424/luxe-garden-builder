import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { u as Reveal } from "./catalog-B2S1b4Nv.mjs";
import { o as TESTIMONIALS } from "./site-x3fcXbb9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Testimonials-BDedsmnR.js
var import_jsx_runtime = require_jsx_runtime();
function Stars() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "flex gap-1",
		"aria-label": "Rated 5 out of 5",
		children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			width: "12",
			height: "12",
			viewBox: "0 0 24 24",
			fill: "var(--gold)",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" })
		}, i))
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden bg-olive py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-16 max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold",
					children: "Google Reviews"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-6 text-on-dark",
					children: "Trusted by homeowners, architects and hoteliers."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 lg:grid lg:grid-cols-4 lg:overflow-visible",
				children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					className: "w-[85vw] shrink-0 snap-start sm:w-[24rem] lg:w-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "glass-panel flex h-full flex-col justify-between p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-6 font-display text-[1.15rem] leading-relaxed text-on-dark",
							children: [
								"“",
								t.quote,
								"”"
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-9 flex items-center gap-4 border-t border-on-dark/12 pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "numeral flex h-11 w-11 items-center justify-center border border-gold/50 text-xs text-gold",
								children: t.initials
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm text-on-dark",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-stone/60",
								children: t.role
							})] })]
						})]
					})
				}, t.name))
			})]
		})
	});
}
//#endregion
export { Testimonials as t };
