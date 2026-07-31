import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { o as LuxLink, r as IMG } from "./catalog-BQPxniiu.mjs";
import { a as STATS } from "./site-E-V0XIIQ.mjs";
import { a as StatsBand, i as ProcessTimeline, n as Counter, o as WhyUs, r as CtaBanner, t as AboutSplit } from "./Sections-ljJjlV4_.mjs";
import { t as Testimonials } from "./Testimonials-BzyCKHRp.mjs";
import { t as ContactBlock } from "./ContactBlock-BTiJu7-l.mjs";
import { t as Faq } from "./Faq-Tgo51fL3.mjs";
import { t as GalleryMasonry } from "./GalleryMasonry-BM4hmook.mjs";
import { n as ProductGrid, t as PlantFinder } from "./PlantFinder-C0_AX-Y5.mjs";
import { t as BeforeAfter } from "./BeforeAfter-C9K1wCy_.mjs";
import { n as ServiceRows, t as BudgetEstimator } from "./BudgetEstimator-C8A1HuiP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CJTchFuQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	const reduced = useReducedMotion();
	const bgRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (reduced) return;
		let ticking = false;
		const onScroll = () => {
			if (window.innerWidth < 768) return;
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
		className: "relative flex min-h-[100svh] w-full items-end overflow-hidden bg-forest-deep",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: bgRef,
				className: "absolute inset-0 h-full w-full md:-top-[8%] md:h-[116%] overflow-hidden will-change-transform",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: IMG.hero,
					alt: "Lush green garden with stone path and garden bench at RR Heaven Gardenblr, Bengaluru",
					width: 1920,
					height: 1088,
					fetchPriority: "high",
					className: "h-full w-full object-cover object-center",
					style: { filter: "brightness(0.78) saturate(1.35) contrast(1.08)" }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "linear-gradient(135deg, rgba(4,26,14,0.72) 0%, rgba(4,26,14,0.38) 55%, rgba(4,26,14,0.22) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(4,26,14,0.55) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-0 h-2/3",
				style: { background: "linear-gradient(to top, rgba(4,26,14,0.95) 0%, rgba(4,26,14,0.7) 35%, transparent 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 top-0 h-36",
				style: { background: "linear-gradient(to bottom, rgba(4,26,14,0.60) 0%, transparent 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid w-full max-w-[1400px] gap-10 px-4 pt-28 pb-12 sm:gap-14 sm:px-6 sm:pt-36 sm:pb-16 md:px-10 md:pb-24 lg:grid-cols-[1.35fr_0.65fr] lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						className: "eyebrow text-gold text-xs sm:text-sm font-mono",
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
						className: "display-xl mt-6 sm:mt-8 text-on-dark text-3xl sm:text-5xl md:text-6xl leading-tight",
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
						className: "mt-6 sm:mt-9 max-w-xl text-sm sm:text-base leading-relaxed text-stone/80 font-sans",
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
						className: "mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto",
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
							className: "w-full sm:w-auto text-center justify-center",
							children: "Explore Collection"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxLink, {
							to: "/book-consultation",
							variant: "ghost",
							className: "w-full sm:w-auto text-center justify-center",
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
