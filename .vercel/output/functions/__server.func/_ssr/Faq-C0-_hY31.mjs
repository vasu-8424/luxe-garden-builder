import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { u as Reveal } from "./catalog-padVYDOm.mjs";
import { n as FAQS } from "./site-x3fcXbb9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Faq-C0-_hY31.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Faq() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] gap-14 px-5 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold",
					children: "Questions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-6 text-forest",
					children: "Before you begin."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body-lux mt-7 max-w-sm",
					children: "Still unsure? Call us — we answer between 7:30 AM and 10:00 PM, every day of the week."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-foreground/10",
					children: FAQS.map((f, i) => {
						const isOpen = open === i;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-foreground/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setOpen(isOpen ? null : i),
								"aria-expanded": isOpen,
								className: "flex w-full items-start justify-between gap-8 py-7 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `font-display text-xl transition-colors duration-500 md:text-2xl ${isOpen ? "text-gold" : "text-forest"}`,
									children: f.q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `mt-2 shrink-0 transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										width: "14",
										height: "14",
										viewBox: "0 0 14 14",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M7 0v14M0 7h14",
											stroke: "currentColor",
											strokeWidth: "1"
										})
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "body-lux max-w-2xl pr-10 pb-8",
										children: f.a
									})
								})
							})]
						}, f.q);
					})
				})
			})]
		})
	});
}
//#endregion
export { Faq as t };
