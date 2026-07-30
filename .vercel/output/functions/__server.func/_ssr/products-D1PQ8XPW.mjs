import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as IMG } from "./catalog-CBDV82nW.mjs";
import { t as PageHeader } from "./PageHeader-DqV9NyUG.mjs";
import { r as CtaBanner } from "./Sections-DwS00dug.mjs";
import { t as Faq } from "./Faq-B7V9F7He.mjs";
import { n as ProductGrid, t as PlantFinder } from "./PlantFinder-Y1ucaSJx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-D1PQ8XPW.js
var import_jsx_runtime = require_jsx_runtime();
function ProductsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Products Collection",
			title: "Botanical & Architectural Inventory.",
			intro: "Ten luxury categories, acclimatised in our Rajarajeshwari Nagar nursery before delivery to your address. Click any image to enquire on WhatsApp.",
			image: IMG.pIndoor,
			crumbs: [{
				label: "Home",
				to: "/"
			}, { label: "Products" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { showHeading: false }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlantFinder, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})
	] });
}
//#endregion
export { ProductsPage as component };
