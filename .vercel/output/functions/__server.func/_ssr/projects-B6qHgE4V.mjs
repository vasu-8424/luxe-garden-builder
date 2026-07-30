import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { l as PROJECTS, r as IMG, u as Reveal } from "./catalog-B2S1b4Nv.mjs";
import { t as PageHeader } from "./PageHeader-CUkq3WkL.mjs";
import { a as StatsBand, r as CtaBanner } from "./Sections-BSuwDDLN.mjs";
import { t as ImageEnquiryModal } from "./ImageEnquiryModal-CHqQvpYk.mjs";
import { t as BeforeAfter } from "./BeforeAfter-CVExMnAt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-B6qHgE4V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProjectsPage() {
	const [selectedProject, setSelectedProject] = (0, import_react.useState)(null);
	const handleOpenProjectInquiry = (p) => {
		setSelectedProject({
			title: p.title,
			category: p.location,
			image: p.image,
			description: p.description,
			specs: p.specs
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Projects Portfolio",
			title: "Architectural Landscapes.",
			intro: "Over 100 masterplans executed for private villas, corporate parks, rooftop lounges, and boutique resorts.",
			image: IMG.sTerrace,
			crumbs: [{
				label: "Home",
				to: "/"
			}, { label: "Projects" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-24 md:py-36",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1400px] px-5 md:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-x-6 gap-y-16 md:grid-cols-2",
					children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 2 * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							onClick: () => handleOpenProjectInquiry(p),
							className: `group cursor-pointer ${i % 2 === 1 ? "md:mt-20" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "media-zoom relative aspect-[4/3] overflow-hidden bg-forest-deep shadow-lift",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: `${p.title} landscape project in ${p.location}`,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "bg-gold text-black text-xs font-mono uppercase tracking-widest px-4 py-2 font-bold shadow-xl",
										children: "Enquire Similar Project"
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex items-start justify-between gap-8 border-t border-foreground/10 pt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "display-md text-forest group-hover:text-gold transition-colors",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground font-mono",
										children: p.location
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-foreground/75",
										children: p.scope
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "numeral text-xs text-gold font-bold",
									children: p.year
								})]
							})]
						})
					}, p.title))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfter, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsBand, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageEnquiryModal, {
			item: selectedProject,
			onClose: () => setSelectedProject(null)
		})
	] });
}
//#endregion
export { ProjectsPage as component };
