import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as IMG } from "./catalog-CBDV82nW.mjs";
import { t as PageHeader } from "./PageHeader-DqV9NyUG.mjs";
import { i as ProcessTimeline, r as CtaBanner } from "./Sections-D57_UkK6.mjs";
import { n as ServiceRows, t as BudgetEstimator } from "./BudgetEstimator-CqxyCiFN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-sToNdK_B.js
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
