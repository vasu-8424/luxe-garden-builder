import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { o as LuxLink, r as IMG } from "./catalog-CsDKbGIT.mjs";
import { a as STATS } from "./site-x3fcXbb9.mjs";
import { a as StatsBand, i as ProcessTimeline, n as Counter, o as WhyUs, r as CtaBanner, t as AboutSplit } from "./Sections-DT64P8ZM.mjs";
import { t as Testimonials } from "./Testimonials-inVlIY27.mjs";
import { t as ContactBlock } from "./ContactBlock-CQTCgLXf.mjs";
import { t as Faq } from "./Faq-AiIkQTiI.mjs";
import { t as GalleryMasonry } from "./GalleryMasonry-CObRLKHH.mjs";
import { n as ProductGrid, t as PlantFinder } from "./PlantFinder-Chg0WleK.mjs";
import { t as BeforeAfter } from "./BeforeAfter-CpmWJxgK.mjs";
import { n as ServiceRows, t as BudgetEstimator } from "./BudgetEstimator-Dtt5fFiu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CfPXWmXe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	const reduced = useReducedMotion();
	const bgRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (reduced) return;
		let ticking = false;
		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					if (bgRef.current) {
						const offset = Math.min(window.scrollY, 900) * .22;
						bgRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
					}
					ticking = false;
				});
				ticking = true;
			}
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [reduced]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-[100svh] items-end overflow-hidden bg-forest-deep",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: bgRef,
				className: "absolute inset-0 -top-[8%] h-[116%] will-change-transform",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: IMG.hero,
					alt: "Golden-hour walkway lined with mature potted plants at the RR Heaven Gardenblr nursery in Bengaluru",
					width: 1920,
					height: 1088,
					fetchPriority: "high",
					className: "h-full w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scrim-full absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scrim-bottom absolute inset-x-0 bottom-0 h-1/2" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid w-full max-w-[1400px] gap-14 px-5 pt-36 pb-16 md:px-10 md:pb-24 lg:grid-cols-[1.35fr_0.65fr] lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						className: "eyebrow text-gold",
						initial: reduced ? false : {
							opacity: 0,
							y: 14
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .9,
							delay: .15
						},
						children: "Premium Plants • Elegant Landscapes • Timeless Gardens"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-xl mt-8 text-on-dark",
						children: ["Create Living Spaces", "That Breathe Luxury."].map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								className: "block",
								initial: reduced ? false : { y: "108%" },
								animate: { y: "0%" },
								transition: {
									duration: 1.15,
									delay: .25 + i * .12,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								children: i === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["That Breathe ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "text-gold not-italic",
									children: "Luxury."
								})] }) : line
							})
						}, line))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						className: "mt-9 max-w-xl text-[1.02rem] leading-relaxed text-stone/80",
						initial: reduced ? false : {
							opacity: 0,
							y: 18
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: .6
						},
						children: "Premium indoor plants, outdoor plants, designer pots, landscaping and complete garden solutions crafted for homes, villas, offices, resorts and commercial spaces across Bengaluru."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "mt-11 flex flex-wrap gap-3",
						initial: reduced ? false : {
							opacity: 0,
							y: 18
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: .75
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxLink, {
							to: "/products",
							variant: "ghost",
							children: "Explore Collection"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxLink, {
							to: "/book-consultation",
							variant: "ghost",
							children: "Book Garden Consultation"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
					className: "glass-panel p-8 md:p-9",
					initial: reduced ? false : {
						opacity: 0,
						y: 34
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: 1.1,
						delay: .85,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "By the numbers"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-8 space-y-7",
						children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-on-dark/12 pb-6 last:border-0 last:pb-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-[2rem] leading-none text-on-dark",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									value: s.value,
									suffix: s.suffix
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "mt-3 text-[0.72rem] tracking-[0.18em] text-stone/65 uppercase",
								children: s.label
							})]
						}, s.label))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-14 w-px bg-gradient-to-b from-transparent via-gold/70 to-transparent" })
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSplit, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BudgetEstimator, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { limit: 6 }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlantFinder, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceRows, { limit: 4 }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryMasonry, { filters: false }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfter, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsBand, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessTimeline, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBlock, {})
	] });
}
//#endregion
export { Index as component };
