import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as IMG, u as Reveal } from "./catalog-CBDV82nW.mjs";
import { t as ImageEnquiryModal } from "./ImageEnquiryModal-7cE7rkIr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BeforeAfter-DdJG4e8E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BeforeAfter() {
	const [pos, setPos] = (0, import_react.useState)(50);
	const ref = (0, import_react.useRef)(null);
	const dragging = (0, import_react.useRef)(false);
	const [selectedItem, setSelectedItem] = (0, import_react.useState)(null);
	const setFromClientX = (clientX) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		setPos(Math.min(100, Math.max(0, (clientX - r.left) / r.width * 100)));
	};
	const handleEnquireTransformation = () => {
		setSelectedItem({
			title: "Backyard Garden Transformation",
			category: "Full Landscape Makeover",
			image: IMG.after,
			description: "Complete garden overhaul turning bare or patchy grounds into lush, layered, irrigated, and lit residential outdoor spaces.",
			specs: [
				{
					label: "Execution Time",
					value: "10-14 Days"
				},
				{
					label: "Included",
					value: "Softscape, Lawn Turf, Hardscape, Drip System"
				},
				{
					label: "Warranty",
					value: "Complimentary 3-Month Maintenance SLA"
				},
				{
					label: "Location",
					value: "All Bengaluru Regions"
				}
			]
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-forest-deep py-24 text-on-dark md:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-14 grid gap-8 md:grid-cols-[1fr_auto] md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold",
					children: "Landscaping Showcase"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-6 max-w-2xl text-on-dark",
					children: "The same ground. Eleven weeks apart."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-sm space-y-4 md:text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-stone/65",
						children: "Drag the handle to see a bare Bengaluru backyard rebuilt into a layered, lit and irrigated garden."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: handleEnquireTransformation,
						className: "inline-flex items-center gap-2 border border-gold px-5 py-2.5 text-xs tracking-widest text-gold uppercase font-mono hover:bg-gold hover:text-black transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enquire Similar Transformation" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							width: "14",
							height: "14",
							viewBox: "0 0 24 24",
							fill: "currentColor",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.33 4.988L2 22l5.132-1.346a9.92 9.92 0 0 0 4.88 1.28h.004c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.038-5.174-2.925-7.06A9.917 9.917 0 0 0 12.012 2zm0 18.272h-.003a8.257 8.257 0 0 1-4.212-1.157l-.302-.18-3.125.819.834-3.045-.198-.315a8.27 8.27 0 0 1-1.267-4.408c0-4.561 3.712-8.273 8.275-8.273 2.21 0 4.287.862 5.85 2.426a8.23 8.23 0 0 1 2.422 5.854c0 4.562-3.712 8.273-8.274 8.273z" })
						})]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref,
				className: "relative aspect-[16/10] w-full cursor-ew-resize overflow-hidden select-none",
				onMouseDown: (e) => {
					dragging.current = true;
					setFromClientX(e.clientX);
				},
				onMouseMove: (e) => dragging.current && setFromClientX(e.clientX),
				onMouseUp: () => dragging.current = false,
				onMouseLeave: () => dragging.current = false,
				onTouchStart: (e) => setFromClientX(e.touches[0].clientX),
				onTouchMove: (e) => setFromClientX(e.touches[0].clientX),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: IMG.after,
						alt: "Completed luxury backyard garden with lawn, stone path and layered planting",
						loading: "lazy",
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 overflow-hidden",
						style: { width: `${pos}%` },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: IMG.before,
							alt: "Bare backyard with patchy grass before landscaping",
							loading: "lazy",
							className: "h-full w-full object-cover",
							style: {
								width: ref.current?.offsetWidth ?? "100%",
								maxWidth: "none"
							}
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute top-6 left-6 eyebrow bg-forest-deep/70 px-3 py-2 text-stone/80",
						children: "Before"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute top-6 right-6 eyebrow bg-forest-deep/70 px-3 py-2 text-gold",
						children: "After"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-y-0 w-px bg-gold",
						style: { left: `${pos}%` },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-forest-deep/80 backdrop-blur",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								width: "20",
								height: "10",
								viewBox: "0 0 20 10",
								fill: "none",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M7 1L3 5l4 4M13 1l4 4-4 4",
									stroke: "var(--gold)",
									strokeWidth: "1.2"
								})
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: 0,
						max: 100,
						value: pos,
						onChange: (e) => setPos(Number(e.target.value)),
						"aria-label": "Compare before and after landscaping",
						className: "absolute inset-x-0 bottom-4 mx-auto w-2/3 opacity-0"
					})
				]
			}) })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageEnquiryModal, {
			item: selectedItem,
			onClose: () => setSelectedItem(null)
		})]
	});
}
//#endregion
export { BeforeAfter as t };
