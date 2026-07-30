import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { u as Reveal } from "./catalog-BQPxniiu.mjs";
import { o as TESTIMONIALS } from "./site-mWnNIISO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Testimonials-BlAHuQfj.js
var import_jsx_runtime = require_jsx_runtime();
function Stars() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "flex gap-1",
		"aria-label": "Rated 5 out of 5",
		children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			width: "14",
			height: "14",
			viewBox: "0 0 24 24",
			fill: "var(--gold)",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" })
		}, i))
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden bg-forest-deep py-24 text-on-dark md:py-36 border-t border-gold/15",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-16 max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold font-mono font-bold tracking-widest uppercase",
					children: "Google Reviews"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-6 text-on-dark font-display font-semibold text-3xl md:text-5xl leading-tight",
					children: "Trusted by homeowners, architects and hoteliers."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-10 xl:gap-12",
				children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					className: "w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "glass-panel flex h-full flex-col justify-between border border-gold/25 bg-black/30 p-8 md:p-10 transition-all duration-300 hover:border-gold/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-6 font-display text-lg md:text-xl leading-relaxed text-on-dark",
							children: [
								"“",
								t.quote,
								"”"
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-9 flex items-center gap-4 border-t border-on-dark/15 pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "numeral flex h-11 w-11 items-center justify-center border border-gold/60 text-xs text-gold font-mono font-bold",
								children: t.initials
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-base font-semibold text-on-dark",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-stone/70 font-mono mt-0.5",
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
