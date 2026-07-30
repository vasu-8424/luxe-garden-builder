import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as IMG } from "./catalog-B2S1b4Nv.mjs";
import { t as PageHeader } from "./PageHeader-CUkq3WkL.mjs";
import { i as ProcessTimeline, r as CtaBanner } from "./Sections-BSuwDDLN.mjs";
import { n as ServiceRows, t as BudgetEstimator } from "./BudgetEstimator-CgiptpAM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DC6CZBCT.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Services & Execution SLA",
			title: "Designed, Built and Kept Alive.",
			intro: "Eight specialized landscape disciplines delivered by our in-house team of horticulturists and site engineers.",
			image: IMG.sLandscape,
			crumbs: [{
				label: "Home",
				to: "/"
			}, { label: "Services" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceRows, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BudgetEstimator, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessTimeline, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})
	] });
}
//#endregion
export { ServicesPage as component };
