import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as IMG } from "./catalog-B2S1b4Nv.mjs";
import { t as PageHeader } from "./PageHeader-CUkq3WkL.mjs";
import { r as CtaBanner } from "./Sections-BSuwDDLN.mjs";
import { t as GalleryMasonry } from "./GalleryMasonry-neQrRDHO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-4uVOzlnP.js
var import_jsx_runtime = require_jsx_runtime();
function GalleryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Gallery",
			title: "Gardens, photographed at their best hour.",
			image: IMG.g4,
			crumbs: [{
				label: "Home",
				to: "/"
			}, { label: "Gallery" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryMasonry, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})
	] });
}
//#endregion
export { GalleryPage as component };
