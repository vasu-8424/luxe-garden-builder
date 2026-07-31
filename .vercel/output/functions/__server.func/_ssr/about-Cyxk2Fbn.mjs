import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as IMG } from "./catalog-BQPxniiu.mjs";
import { t as PageHeader } from "./PageHeader-Do1lM823.mjs";
import { a as StatsBand, i as ProcessTimeline, o as WhyUs, r as CtaBanner, t as AboutSplit } from "./Sections-ljJjlV4_.mjs";
import { t as Testimonials } from "./Testimonials-BzyCKHRp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Cyxk2Fbn.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "About the Studio",
			title: "A nursery that grew into a garden studio.",
			intro: "From a single greenhouse on Kempegowda Road to landscapes across Bengaluru — built on cultivation, craft and long relationships.",
			image: IMG.about,
			crumbs: [{
				label: "Home",
				to: "/"
			}, { label: "About" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSplit, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsBand, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessTimeline, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})
	] });
}
//#endregion
export { AboutPage as component };
