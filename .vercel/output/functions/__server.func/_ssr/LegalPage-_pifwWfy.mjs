import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as Reveal } from "./catalog-BQPxniiu.mjs";
import { r as CtaBanner } from "./Sections-CuS_g39d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LegalPage-_pifwWfy.js
var import_jsx_runtime = require_jsx_runtime();
function LegalPage({ eyebrow, title, crumbLabel, sections }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream-deep pt-40 pb-20 md:pt-52 md:pb-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-5 md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Breadcrumb",
					className: "mb-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "flex items-center gap-2 text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-gold",
								children: "Home"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-foreground/25",
								children: "/"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-gold",
								children: crumbLabel
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold",
					children: eyebrow
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-lg mt-6 max-w-3xl text-forest",
					children: title
				})] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-5 md:px-10",
				children: [sections.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-foreground/10 py-9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-forest",
							children: s.h
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body-lux mt-4",
							children: s.p
						})]
					})
				}, s.h)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-t border-foreground/10" })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})
	] });
}
//#endregion
export { LegalPage as t };
