import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as LuxAnchor, o as LuxLink, r as IMG, s as MaskReveal, u as Reveal } from "./catalog-BQPxniiu.mjs";
import { a as STATS, i as PROCESS, s as WHY_US, t as BRAND } from "./site-E-V0XIIQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Sections-ljJjlV4_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Counter({ value, suffix = "", className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const [display, setDisplay] = (0, import_react.useState)(0);
	const [started, setStarted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el || started) return;
		const io = new IntersectionObserver((entries) => {
			if (!entries[0]?.isIntersecting) return;
			setStarted(true);
			io.disconnect();
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
				setDisplay(value);
				return;
			}
			const duration = 1900;
			const start = performance.now();
			const tick = (now) => {
				const p = Math.min((now - start) / duration, 1);
				const eased = 1 - Math.pow(1 - p, 4);
				setDisplay(Math.round(value * eased));
				if (p < 1) requestAnimationFrame(tick);
			};
			requestAnimationFrame(tick);
		}, { threshold: .4 });
		io.observe(el);
		return () => io.disconnect();
	}, [value, started]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: `numeral ${className}`,
		children: [display.toLocaleString("en-IN"), suffix]
	});
}
function AboutSplit() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] items-center gap-14 px-5 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "media-zoom aspect-[4/5] overflow-hidden bg-forest-deep shadow-lift",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: IMG.about,
						alt: "Interior of the RR Heaven Gardenblr nursery greenhouse in Bengaluru",
						loading: "lazy",
						className: "h-full w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-4 sm:absolute sm:-right-8 sm:bottom-10 sm:mt-0 sm:w-64",
					children: [
						{
							t: "Premium Gardening",
							s: "Nursery-grown stock"
						},
						{
							t: "Expert Landscaping",
							s: "In-house design team"
						},
						{
							t: "Trusted Quality",
							s: "15 years in Bengaluru"
						}
					].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15 + i * .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border border-foreground/8 bg-card p-5 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg text-forest",
								children: c.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs tracking-[0.12em] text-muted-foreground uppercase",
								children: c.s
							})]
						})
					}, c.t))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold",
					children: "Our Story"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display-lg mt-6 text-forest",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaskReveal, { children: "Fifteen years of" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaskReveal, {
						delay: .08,
						children: "growing beautifully."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .15,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-9" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body-lux mt-9",
							children: "RR Heaven Gardenblr began as a nursery on Kempegowda Road in Rajarajeshwari Nagar. Fifteen years later, it is a garden studio — a place where architects specify planters, interior designers source statement foliage, and families come back season after season."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body-lux mt-6",
							children: "We grow, select and acclimatise our own stock. We draw our own landscape plans. And we maintain what we build, because a garden is never finished on handover day — it only begins there."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid grid-cols-2 gap-8 border-t border-foreground/10 pt-10 sm:grid-cols-4",
							children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl text-forest font-bold font-mono",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									value: s.value,
									suffix: s.suffix
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase font-mono",
								children: s.label
							})] }, s.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxLink, {
								to: "/about",
								variant: "solid",
								children: "More about us"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxLink, {
								to: "/projects",
								variant: "outline",
								children: "See our projects"
							})]
						})
					]
				})
			] })]
		})
	});
}
function WhyUs() {
	const [mobileIndex, setMobileIndex] = (0, import_react.useState)(0);
	const mobileRef = (0, import_react.useRef)(null);
	const handleMobileScroll = () => {
		if (!mobileRef.current) return;
		const scrollLeft = mobileRef.current.scrollLeft;
		const width = mobileRef.current.offsetWidth;
		const index = Math.round(scrollLeft / (width * .8));
		setMobileIndex(Math.min(WHY_US.length - 1, Math.max(0, index)));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative bg-forest-deep py-16 text-on-dark md:py-32 border-y border-gold/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-gold/20 pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold font-mono",
						children: "Why RR Heaven"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-2 text-on-dark",
						children: "Eight reasons the work holds up."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-[0.7rem] uppercase tracking-widest text-gold bg-black/60 px-4 py-2 border border-gold/30",
						children: [WHY_US.length, " Core Standards"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "block md:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: mobileRef,
						onScroll: handleMobileScroll,
						className: "flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 scrollbar-none",
						style: { scrollSnapType: "x mandatory" },
						children: WHY_US.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "snap-center shrink-0 w-[82vw] max-w-[22rem] flex flex-col justify-between p-6 border border-gold/40 bg-[#071a13] text-on-dark shadow-2xl backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b border-white/10 pb-3 mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-3xl font-bold text-gold",
										children: w.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[0.6rem] tracking-widest uppercase font-mono px-2 py-0.5 bg-black/60 border border-gold/30 text-gold",
										children: w.tag
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl text-on-dark leading-tight",
									children: w.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs leading-relaxed text-stone/85 font-sans",
									children: w.text
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 pt-3 border-t border-white/10 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(`Hello RR Heaven Gardenblr, I would like to enquire about ${w.title} (${w.tag}).`)}`,
									target: "_blank",
									rel: "noreferrer noopener",
									className: "inline-flex items-center gap-2 bg-[#25D366] text-black font-semibold px-4 py-2 text-[0.68rem] font-mono uppercase tracking-wider",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enquire" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[0.65rem] font-mono text-gold",
									children: [
										"0",
										i + 1,
										" / 08"
									]
								})]
							})]
						}, w.title))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center items-center gap-1.5 mt-2",
						children: WHY_US.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 transition-all ${mobileIndex === idx ? "w-6 bg-gold" : "w-1.5 bg-white/20"}` }, idx))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block relative space-y-12 pb-24",
					children: WHY_US.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							top: `calc(120px + ${i * 16}px)`,
							zIndex: i + 1
						},
						className: "sticky mx-auto max-w-5xl border border-gold/40 bg-[#071a13] p-10 md:p-14 text-on-dark shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-gold hover:shadow-gold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-white/10 pb-4 mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-4xl md:text-5xl font-bold text-gold",
										children: w.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[0.65rem] tracking-[0.2em] uppercase font-mono px-3 py-1 bg-black/60 border border-gold/30 text-gold",
										children: w.tag
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[0.68rem] font-mono text-stone/50 mt-1",
										children: [
											"Standard 0",
											i + 1,
											" of 08"
										]
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[0.68rem] font-mono text-stone/60",
									children: "RR HEAVEN GARDENBLR ARCHITECTURAL SLA"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-3xl md:text-4xl text-on-dark leading-tight",
								children: w.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-base md:text-lg leading-relaxed text-stone/85 font-sans max-w-3xl",
								children: w.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 pt-4 border-t border-white/10 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(`Hello RR Heaven Gardenblr, I would like to enquire about ${w.title} (${w.tag}).`)}`,
									target: "_blank",
									rel: "noreferrer noopener",
									className: "inline-flex items-center gap-2.5 bg-[#25D366] text-black font-semibold px-6 py-3 text-xs font-mono uppercase tracking-wider transition-colors hover:bg-[#20bd5a]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										width: "16",
										height: "16",
										viewBox: "0 0 24 24",
										fill: "currentColor",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.33 4.988L2 22l5.132-1.346a9.92 9.92 0 0 0 4.88 1.28h.004c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.038-5.174-2.925-7.06A9.917 9.917 0 0 0 12.012 2zm0 18.272h-.003a8.257 8.257 0 0 1-4.212-1.157l-.302-.18-3.125.819.834-3.045-.198-.315a8.27 8.27 0 0 1-1.267-4.408c0-4.561 3.712-8.273 8.275-8.273 2.21 0 4.287.862 5.85 2.426a8.23 8.23 0 0 1 2.422 5.854c0 4.562-3.712 8.273-8.274 8.273z" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enquire Feature on WhatsApp" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[0.68rem] font-mono text-gold/80",
									children: [
										"Card ",
										i + 1,
										" of 8 Stacked"
									]
								})]
							})
						]
					}, w.title))
				})
			]
		})
	});
}
function StatsBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-forest py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-[1400px] gap-12 px-5 md:grid-cols-4 md:px-10",
			children: STATS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-l border-on-dark/15 pl-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[2.6rem] leading-none text-gold md:text-[3.2rem] font-mono font-bold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
							value: s.value,
							suffix: s.suffix
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[0.68rem] tracking-[0.2em] text-stone/65 uppercase font-mono",
						children: s.label
					})]
				})
			}, s.label))
		})
	});
}
function ProcessTimeline() {
	const [mobileProcessIndex, setMobileProcessIndex] = (0, import_react.useState)(0);
	const mobileProcessRef = (0, import_react.useRef)(null);
	const handleProcessScroll = () => {
		if (!mobileProcessRef.current) return;
		const scrollLeft = mobileProcessRef.current.scrollLeft;
		const width = mobileProcessRef.current.offsetWidth;
		const index = Math.round(scrollLeft / (width * .8));
		setMobileProcessIndex(Math.min(PROCESS.length - 1, Math.max(0, index)));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative bg-background py-16 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-foreground/10 pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold font-mono",
						children: "The Execution Process"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-2 text-forest",
						children: "Five steps, no surprises."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[0.7rem] uppercase tracking-widest text-forest bg-forest/10 px-4 py-2 border border-forest/20",
						children: "5 Execution Phases"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "block md:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: mobileProcessRef,
						onScroll: handleProcessScroll,
						className: "flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 scrollbar-none",
						style: { scrollSnapType: "x mandatory" },
						children: PROCESS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "snap-center shrink-0 w-[82vw] max-w-[22rem] flex flex-col justify-between p-6 border border-gold/40 bg-forest-deep text-on-dark shadow-2xl backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b border-white/10 pb-3 mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-3xl font-bold text-gold",
										children: p.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[0.6rem] tracking-widest uppercase font-mono px-2 py-0.5 bg-black/60 border border-gold/30 text-gold",
										children: p.tag
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl text-on-dark leading-tight",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.65rem] font-mono text-gold mt-1",
									children: p.subtitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs leading-relaxed text-stone/85 font-sans",
									children: p.text
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 pt-3 border-t border-white/10 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(`Hello RR Heaven Gardenblr, I would like to enquiry about Process Phase ${p.n}: ${p.title}.`)}`,
									target: "_blank",
									rel: "noreferrer noopener",
									className: "inline-flex items-center gap-2 bg-[#25D366] text-black font-semibold px-4 py-2 text-[0.68rem] font-mono uppercase tracking-wider",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Book Phase" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[0.65rem] font-mono text-gold",
									children: [
										"Step 0",
										i + 1,
										" / 05"
									]
								})]
							})]
						}, p.n))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center items-center gap-1.5 mt-2",
						children: PROCESS.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 transition-all ${mobileProcessIndex === idx ? "w-6 bg-forest" : "w-1.5 bg-foreground/20"}` }, idx))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block relative space-y-12 pb-24",
					children: PROCESS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							top: `calc(130px + ${i * 18}px)`,
							zIndex: i + 1
						},
						className: "sticky mx-auto max-w-5xl border border-gold/40 bg-forest-deep p-10 md:p-14 text-on-dark shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-gold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-white/10 pb-4 mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-4xl md:text-5xl font-bold text-gold",
										children: p.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[0.65rem] tracking-[0.2em] uppercase font-mono px-3 py-1 bg-black/60 border border-gold/30 text-gold",
										children: p.tag
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[0.68rem] font-mono text-gold mt-1",
										children: p.subtitle
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[0.68rem] font-mono text-stone/60",
									children: [
										"Execution Phase ",
										i + 1,
										" of 5"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-3xl md:text-4xl text-on-dark leading-tight",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-base md:text-lg leading-relaxed text-stone/85 font-sans max-w-3xl",
								children: p.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 pt-4 border-t border-white/10 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(`Hello RR Heaven Gardenblr, I would like to book an inquiry for Process Phase ${p.n}: ${p.title}.`)}`,
									target: "_blank",
									rel: "noreferrer noopener",
									className: "inline-flex items-center gap-2.5 bg-[#25D366] text-black font-semibold px-6 py-3 text-xs font-mono uppercase tracking-wider transition-colors hover:bg-[#20bd5a]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										width: "16",
										height: "16",
										viewBox: "0 0 24 24",
										fill: "currentColor",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.33 4.988L2 22l5.132-1.346a9.92 9.92 0 0 0 4.88 1.28h.004c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.038-5.174-2.925-7.06A9.917 9.917 0 0 0 12.012 2zm0 18.272h-.003a8.257 8.257 0 0 1-4.212-1.157l-.302-.18-3.125.819.834-3.045-.198-.315a8.27 8.27 0 0 1-1.267-4.408c0-4.561 3.712-8.273 8.275-8.273 2.21 0 4.287.862 5.85 2.426a8.23 8.23 0 0 1 2.422 5.854c0 4.562-3.712 8.273-8.274 8.273z" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Book Phase Consultation on WhatsApp" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[0.68rem] font-mono text-gold/80",
									children: [
										"Phase ",
										i + 1,
										" of 5 Pinned"
									]
								})]
							})
						]
					}, p.n))
				})
			]
		})
	});
}
function CtaBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-forest-deep",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: IMG.cta,
				alt: "Illuminated resort garden at twilight",
				loading: "lazy",
				className: "absolute inset-0 h-full w-full object-cover opacity-75"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scrim-full absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-[1400px] px-5 py-32 text-center md:px-10 md:py-44",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold font-mono",
						children: "Begin"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-xl mx-auto mt-8 max-w-4xl text-on-dark",
						children: "Let's Build Your Dream Garden."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-8 max-w-xl text-[1.02rem] leading-relaxed text-stone/75 font-sans",
						children: "A site visit, an honest estimate, and a plan you can live with for years. Open 7 working days, 7:30 AM – 10:00 PM."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxAnchor, {
							href: `tel:+91${BRAND.phones[0]}`,
							variant: "ghost",
							children: "Call Now"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxLink, {
							to: "/book-consultation",
							variant: "ghost",
							children: "Book Consultation"
						})]
					})
				] })
			})
		]
	});
}
//#endregion
export { StatsBand as a, ProcessTimeline as i, Counter as n, WhyUs as o, CtaBanner as r, AboutSplit as t };
