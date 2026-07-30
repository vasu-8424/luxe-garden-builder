import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as IMG } from "./catalog-padVYDOm.mjs";
import { t as PageHeader } from "./PageHeader-Bl1a6HXT.mjs";
import { i as ProcessTimeline } from "./Sections-C8OBsIZV.mjs";
import { t as ConsultationForm } from "./ConsultationForm-DNoBgm02.mjs";
import { t as ContactBlock } from "./ContactBlock-xoi6Erz7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-consultation-BptKqpSE.js
var import_jsx_runtime = require_jsx_runtime();
function BookPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Consultation",
			title: "Start with a site visit.",
			intro: "Complimentary across Bengaluru. We measure, photograph, listen — and come back with a plan.",
			image: IMG.sIndoor,
			crumbs: [{
				label: "Home",
				to: "/"
			}, { label: "Book Consultation" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultationForm, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessTimeline, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBlock, {})
	] });
}
//#endregion
export { BookPage as component };
