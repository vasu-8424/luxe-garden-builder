import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as Reveal } from "./catalog-CBDV82nW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHeader-DqV9NyUG.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ eyebrow, title, intro, image, crumbs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-[62vh] items-end overflow-hidden bg-forest-deep pt-32 pb-16 md:min-h-[72vh] md:pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				"aria-hidden": "true",
				className: "absolute inset-0 h-full w-full object-cover opacity-70"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scrim-full absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-[1400px] px-5 md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Breadcrumb",
					className: "mb-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "flex flex-wrap items-center gap-2 text-[0.7rem] tracking-[0.2em] text-stone/60 uppercase",
						children: crumbs.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [c.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: c.to,
								className: "transition-colors hover:text-gold",
								children: c.label
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: c.label
							}), i < crumbs.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-stone/30",
								children: "/"
							})]
						}, c.label))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-xl mt-6 max-w-4xl text-on-dark",
						children: title
					}),
					intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-xl text-[1.05rem] leading-relaxed text-stone/75",
						children: intro
					})
				] })]
			})
		]
	});
}
//#endregion
export { PageHeader as t };
