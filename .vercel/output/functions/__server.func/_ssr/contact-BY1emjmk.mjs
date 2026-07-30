import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as IMG } from "./catalog-padVYDOm.mjs";
import { t as PageHeader } from "./PageHeader-Bl1a6HXT.mjs";
import { t as ConsultationForm } from "./ConsultationForm-DNoBgm02.mjs";
import { t as ContactBlock } from "./ContactBlock-xoi6Erz7.mjs";
import { t as Faq } from "./Faq-Dca_jnQH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BY1emjmk.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Contact",
			title: "Find us on Kempegowda Road.",
			intro: "Open 7 working days a week, 7:30 AM – 10:00 PM.",
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
