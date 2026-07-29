import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as IMG } from "./catalog-CBDV82nW.mjs";
import { t as PageHeader } from "./PageHeader-DqV9NyUG.mjs";
import { t as ConsultationForm } from "./ConsultationForm-DoL7mNea.mjs";
import { t as ContactBlock } from "./ContactBlock-BiGQEvoH.mjs";
import { t as Faq } from "./Faq-CjAvP1ky.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-3HHTxdnU.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Contact",
			title: "Find us on Kempegowda Road.",
			intro: "Open every day of the week, from first light to late evening.",
			image: IMG.g6,
			crumbs: [{
				label: "Home",
				to: "/"
			}, { label: "Contact" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBlock, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultationForm, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {})
	] });
}
//#endregion
export { ContactPage as component };
