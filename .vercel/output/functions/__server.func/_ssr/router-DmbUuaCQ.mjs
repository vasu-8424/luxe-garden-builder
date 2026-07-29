import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { r as NAV_LINKS, t as BRAND } from "./site-Dze4VZx_.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DmbUuaCQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BNTA7YB2.css";
function Wordmark({ light }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "group flex items-baseline gap-2",
		"aria-label": BRAND.name,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `font-display text-[1.35rem] leading-none tracking-tight transition-colors duration-500 ${light ? "text-on-dark" : "text-forest"}`,
			children: "RR Heaven"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `eyebrow pt-[2px] transition-colors duration-500 ${light ? "text-gold" : "text-gold"}`,
			children: "Gardenblr"
		})]
	});
}
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const overHero = pathname === "/";
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	const light = overHero && !scrolled;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-700 ${scrolled || !overHero ? "glass-nav py-3" : "py-6"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { light }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-9 lg:flex",
					children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: `link-underline text-[0.78rem] tracking-[0.14em] uppercase transition-colors duration-500 ${light ? "text-on-dark/85 hover:text-on-dark" : "text-foreground/70 hover:text-forest"}`,
						activeProps: { className: "text-gold" },
						activeOptions: { exact: l.to === "/" },
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/book-consultation",
						className: `btn-lux hidden md:inline-flex ${light ? "btn-ghost-light" : "btn-solid"} !px-6 !py-3 !text-[0.68rem]`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Book Consultation" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen(true),
						"aria-label": "Open menu",
						className: `flex h-11 w-11 items-center justify-center border transition-colors lg:hidden ${light ? "border-on-dark/30 text-on-dark" : "border-foreground/15 text-foreground"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex flex-col gap-[5px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-px w-5 bg-current" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-px w-5 bg-current" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-px w-3 bg-current" })
							]
						})
					})]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed inset-0 z-[70] bg-forest-deep lg:hidden",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .4 },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-5 py-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-xl text-on-dark",
					children: "RR Heaven"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen(false),
					"aria-label": "Close menu",
					className: "flex h-11 w-11 items-center justify-center border border-on-dark/25 text-on-dark",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						width: "16",
						height: "16",
						viewBox: "0 0 16 16",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M1 1l14 14M15 1L1 15",
							stroke: "currentColor",
							strokeWidth: "1.2"
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mt-8 flex flex-col px-5",
				children: NAV_LINKS.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 18
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: .06 * i + .1,
						duration: .6
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "block border-b border-on-dark/10 py-5 font-display text-3xl text-on-dark",
						children: l.label
					})
				}, l.to))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 pt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/book-consultation",
					className: "btn-lux btn-ghost-light w-full justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Book Consultation" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mt-8 text-stone/60",
					children: BRAND.hours
				})]
			})
		]
	}) })] });
}
var columns = [
	{
		title: "Explore",
		links: [
			{
				label: "Home",
				to: "/"
			},
			{
				label: "About",
				to: "/about"
			},
			{
				label: "Projects",
				to: "/projects"
			},
			{
				label: "Gallery",
				to: "/gallery"
			},
			{
				label: "Contact",
				to: "/contact"
			}
		]
	},
	{
		title: "Services",
		links: [
			{
				label: "Indoor Garden Setup",
				to: "/services"
			},
			{
				label: "Outdoor Garden Setup",
				to: "/services"
			},
			{
				label: "Landscaping",
				to: "/services"
			},
			{
				label: "Garden Maintenance",
				to: "/services"
			},
			{
				label: "Organic Solutions",
				to: "/services"
			}
		]
	},
	{
		title: "Products",
		links: [
			{
				label: "Indoor Plants",
				to: "/products"
			},
			{
				label: "Outdoor Plants",
				to: "/products"
			},
			{
				label: "Ceramic Pots",
				to: "/products"
			},
			{
				label: "Plant Stands",
				to: "/products"
			},
			{
				label: "Organic Manure",
				to: "/products"
			}
		]
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-forest-deep text-on-dark border-t border-gold/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-16 lg:grid-cols-[1.4fr_2fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-3xl leading-tight",
							children: ["RR Heaven ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "Gardenblr"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 max-w-sm text-sm leading-relaxed text-stone/70 font-sans",
							children: [BRAND.tagline, " Premium plants, designer planters and complete landscape craftsmanship for Bengaluru's finest homes and spaces."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-10 max-w-sm",
							onSubmit: (e) => {
								e.preventDefault();
								e.currentTarget.reset();
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "eyebrow text-gold font-mono",
								htmlFor: "newsletter",
								children: "Newsletter"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex border-b border-on-dark/25 focus-within:border-gold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "newsletter",
									type: "email",
									required: true,
									maxLength: 255,
									placeholder: "Your email address",
									className: "w-full bg-transparent py-3 text-sm text-on-dark placeholder:text-stone/45 focus:outline-none"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "eyebrow text-gold transition-opacity hover:opacity-70 font-mono",
									children: "Join"
								})]
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-12 sm:grid-cols-3",
						children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold font-mono",
							children: col.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3",
							children: col.links.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								className: "text-sm text-stone/70 transition-colors hover:text-on-dark",
								children: l.label
							}) }, `${l.label}-${i}`))
						})] }, col.title))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 grid gap-10 border-t border-on-dark/12 pt-12 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold font-mono",
							children: "Visit"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
							className: "mt-5 text-sm leading-relaxed text-stone/70 not-italic",
							children: [BRAND.address.lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: l
							}, l)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block text-stone/50",
								children: BRAND.address.landmark
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold font-mono",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-2 text-sm text-stone/70",
							children: [BRAND.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:+91${p}`,
								className: "block hover:text-on-dark font-mono",
								children: ["+91 ", p]
							}, p)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${BRAND.email}`,
								className: "block hover:text-on-dark font-mono",
								children: BRAND.email
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-gold font-mono",
								children: "Social Media & Hours"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm text-stone/70",
								children: BRAND.hours
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: BRAND.social.instagram,
										target: "_blank",
										rel: "noreferrer noopener",
										"aria-label": "Follow us on Instagram",
										title: "RR Heaven Gardenblr on Instagram",
										className: "flex h-11 w-11 items-center justify-center border border-on-dark/20 text-stone/80 transition-all hover:border-gold hover:text-gold hover:bg-white/5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											width: "18",
											height: "18",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "1.8",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
													x: "2",
													y: "2",
													width: "20",
													height: "20",
													rx: "5",
													ry: "5"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
													x1: "17.5",
													y1: "6.5",
													x2: "17.51",
													y2: "6.5"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: BRAND.social.facebook,
										target: "_blank",
										rel: "noreferrer noopener",
										"aria-label": "Follow us on Facebook",
										title: "RR Heaven Gardenblr on Facebook",
										className: "flex h-11 w-11 items-center justify-center border border-on-dark/20 text-stone/80 transition-all hover:border-gold hover:text-gold hover:bg-white/5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "18",
											height: "18",
											viewBox: "0 0 24 24",
											fill: "currentColor",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.3-.04-1.3-.13-2.47-.13-2.45 0-4.13 1.5-4.13 4.24V9.9H7.4V13h2.7v8h3.4z" })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: BRAND.social.linkedin,
										target: "_blank",
										rel: "noreferrer noopener",
										"aria-label": "Connect with Naveen Kumar on LinkedIn",
										title: "Naveen Kumar on LinkedIn",
										className: "flex h-11 w-11 items-center justify-center border border-on-dark/20 text-stone/80 transition-all hover:border-gold hover:text-gold hover:bg-white/5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "18",
											height: "18",
											viewBox: "0 0 24 24",
											fill: "currentColor",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" })
										})
									})
								]
							})
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 flex flex-col gap-4 border-t border-on-dark/12 pt-8 text-xs text-stone/45 md:flex-row md:items-center md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						BRAND.name,
						". All rights reserved."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy-policy",
							className: "hover:text-stone/80",
							children: "Privacy Policy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "hover:text-stone/80",
							children: "Terms & Conditions"
						})]
					})]
				})
			]
		})
	});
}
function ScrollProgress() {
	const [p, setP] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let ticking = false;
		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					const h = document.documentElement.scrollHeight - window.innerHeight;
					setP(h > 0 ? window.scrollY / h : 0);
					ticking = false;
				});
				ticking = true;
			}
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: "fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gold pointer-events-none",
		style: {
			transform: `scaleX(${p})`,
			transition: "transform 120ms linear"
		}
	});
}
function FloatingActions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed right-4 bottom-4 z-[55] hidden sm:flex flex-col gap-3 md:right-6 md:bottom-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hello RR Heaven Gardenblr, I would like to enquire about your luxury plants & landscape services.")}`,
			target: "_blank",
			rel: "noreferrer noopener",
			"aria-label": "Chat on WhatsApp",
			className: "flex h-13 w-13 items-center justify-center border border-forest/15 bg-[#25D366] text-black shadow-lift transition-all duration-300 hover:scale-105",
			style: {
				height: "3.5rem",
				width: "3.5rem"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2 22l5.35-1.4a9.8 9.8 0 004.69 1.2h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.48 2 12.04 2zm5.72 13.9c-.24.68-1.4 1.3-1.94 1.35-.5.05-.95.24-3.2-.67-2.7-1.06-4.4-3.8-4.53-3.98-.13-.18-1.08-1.44-1.08-2.75s.69-1.95.94-2.22a.98.98 0 01.71-.33c.18 0 .35 0 .5.01.16.01.38-.06.6.45.23.55.77 1.9.84 2.04.07.13.11.29.02.47-.09.18-.13.29-.26.45s-.28.35-.4.47c-.13.13-.27.28-.12.54.15.27.67 1.1 1.44 1.79.99.88 1.82 1.16 2.08 1.29.26.13.41.11.56-.07.15-.18.65-.76.82-1.02.17-.27.34-.22.57-.13.23.09 1.47.69 1.72.82.25.13.42.2.48.31.06.11.06.63-.18 1.31z" })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: `tel:+91${BRAND.phones[0]}`,
			"aria-label": "Call us",
			className: "flex items-center justify-center border border-forest/15 bg-forest text-on-dark shadow-lift transition-all duration-300 hover:scale-105 hover:bg-gold hover:text-black",
			style: {
				height: "3.5rem",
				width: "3.5rem"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				width: "22",
				height: "22",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2z" })
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-0 inset-x-0 z-[60] grid grid-cols-2 sm:hidden border-t border-gold/30 bg-forest-deep shadow-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: `tel:+91${BRAND.phones[0]}`,
			className: "flex items-center justify-center gap-2 py-3 bg-forest text-on-dark font-mono text-xs uppercase tracking-wider font-bold border-r border-white/10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				width: "16",
				height: "16",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2z" })
			}), "Call Us"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hello RR Heaven Gardenblr, I would like to enquiry about plants & garden consultation.")}`,
			target: "_blank",
			rel: "noreferrer noopener",
			className: "flex items-center justify-center gap-2 py-3 bg-[#25D366] text-black font-mono text-xs uppercase tracking-wider font-bold",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				width: "16",
				height: "16",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2 22l5.35-1.4a9.8 9.8 0 004.69 1.2h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.48 2 12.04 2zm5.72 13.9c-.24.68-1.4 1.3-1.94 1.35-.5.05-.95.24-3.2-.67-2.7-1.06-4.4-3.8-4.53-3.98-.13-.18-1.08-1.44-1.08-2.75s.69-1.95.94-2.22a.98.98 0 01.71-.33c.18 0 .35 0 .5.01.16.01.38-.06.6.45.23.55.77 1.9.84 2.04.07.13.11.29.02.47-.09.18-.13.29-.26.45s-.28.35-.4.47c-.13.13-.27.28-.12.54.15.27.67 1.1 1.44 1.79.99.88 1.82 1.16 2.08 1.29.26.13.41.11.56-.07.15-.18.65-.76.82-1.02.17-.27.34-.22.57-.13.23.09 1.47.69 1.72.82.25.13.42.2.48.31.06.11.06.63-.18 1.31z" })
			}), "WhatsApp"]
		})]
	})] });
}
function LuxCursor() {
	const cursorRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!window.matchMedia("(pointer: fine)").matches) return;
		const el = cursorRef.current;
		if (!el) return;
		let ticking = false;
		const move = (e) => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					const isHover = !!e.target?.closest("a, button, [data-cursor]");
					const size = isHover ? 44 : 16;
					el.style.width = `${size}px`;
					el.style.height = `${size}px`;
					el.style.transform = `translate3d(${e.clientX - size / 2}px, ${e.clientY - size / 2}px, 0)`;
					el.style.backgroundColor = isHover ? "transparent" : "var(--gold)";
					ticking = false;
				});
				ticking = true;
			}
		};
		window.addEventListener("mousemove", move, { passive: true });
		return () => window.removeEventListener("mousemove", move);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: cursorRef,
		"aria-hidden": "true",
		className: "pointer-events-none fixed top-0 left-0 z-[100] hidden rounded-full border border-gold mix-blend-difference md:block will-change-transform",
		style: {
			width: 16,
			height: 16,
			opacity: .75,
			transition: "width 300ms cubic-bezier(.22,1,.36,1), height 300ms cubic-bezier(.22,1,.36,1)"
		}
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-lg text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold",
					children: "Error 404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-lg mt-6 text-forest",
					children: "This path has not been planted yet."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body-lux mt-5",
					children: "The page you are looking for has been moved, renamed, or never existed. Let us guide you back to the garden."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "btn-lux btn-solid",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Return home" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "btn-lux btn-outline-dark",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Contact us" })
					})]
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-lg text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-md mt-6 text-forest",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body-lux mt-4",
					children: "You can try again, or head back to the home page."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-lux btn-solid",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Try again" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "btn-lux btn-outline-dark",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Go home" })
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "RR Heaven Gardenblr — Luxury Architectural Horticulture & Nursery Studio" },
			{
				name: "description",
				content: "Bengaluru's premier landscape architecture, acclimatised plant nursery and bio-wall studio in Rajarajeshwari Nagar. 15+ years, 5,000+ luxury spaces transformed."
			},
			{
				name: "author",
				content: BRAND.name
			},
			{
				property: "og:site_name",
				content: BRAND.name
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:title",
				content: "RR Heaven Gardenblr — Luxury Architectural Horticulture & Nursery Studio"
			},
			{
				property: "og:description",
				content: "Bengaluru's premier landscape architecture, acclimatised plant nursery and bio-wall studio in Rajarajeshwari Nagar. 15+ years, 5,000+ luxury spaces transformed."
			},
			{
				property: "og:image",
				content: "https://luxe-garden-builder.vercel.app/og-image.png"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "RR Heaven Gardenblr — Luxury Architectural Horticulture & Nursery Studio"
			},
			{
				name: "twitter:description",
				content: "Bengaluru's premier landscape architecture, acclimatised plant nursery and bio-wall studio in Rajarajeshwari Nagar. 15+ years, 5,000+ luxury spaces transformed."
			},
			{
				name: "twitter:image",
				content: "https://luxe-garden-builder.vercel.app/og-image.png"
			},
			{
				name: "theme-color",
				content: "#143A2C"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "LocalBusiness",
				name: BRAND.name,
				description: "Luxury garden nursery, premium plants and landscaping studio in Rajarajeshwari Nagar, Bengaluru.",
				telephone: BRAND.phones.map((p) => `+91${p}`),
				email: BRAND.email,
				address: {
					"@type": "PostalAddress",
					streetAddress: "Double Road, 5th Stage, BEML Layout, Kempegowda Road",
					addressLocality: "Rajarajeshwari Nagar, Bengaluru",
					addressRegion: "Karnataka",
					postalCode: "560098",
					addressCountry: "IN"
				},
				openingHours: "Mo-Su 07:30-22:00",
				priceRange: "₹₹₹",
				sameAs: [
					BRAND.social.facebook,
					BRAND.social.instagram,
					BRAND.social.linkedin
				]
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxCursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActions, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var $$splitComponentImporter$9 = () => import("./routes-BWeRQ-ri.mjs");
var title$9 = "RR Heaven Gardenblr — ₹100 Cr Luxury Architectural Horticulture & Nursery Platform";
var description$9 = "Bengaluru's premier landscape architecture, acclimatised plant nursery and bio-wall studio in Rajarajeshwari Nagar. 15+ years, 5,000+ luxury spaces transformed.";
var Route$10 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: title$9 },
			{
				name: "description",
				content: description$9
			},
			{
				property: "og:title",
				content: title$9
			},
			{
				property: "og:description",
				content: description$9
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:title",
				content: title$9
			},
			{
				name: "twitter:description",
				content: description$9
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./about-BD4h2blU.mjs");
var title$8 = "About RR Heaven Gardenblr — Garden Nursery in Bengaluru";
var description$8 = "Fifteen years of premium plant cultivation and landscape craftsmanship in Rajarajeshwari Nagar, Bengaluru. Meet the studio behind the gardens.";
var Route$9 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: title$8 },
			{
				name: "description",
				content: description$8
			},
			{
				property: "og:title",
				content: title$8
			},
			{
				property: "og:description",
				content: description$8
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/about"
			},
			{
				name: "twitter:title",
				content: title$8
			},
			{
				name: "twitter:description",
				content: description$8
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./book-consultation-scfRqc8j.mjs");
var title$7 = "Book a Garden Consultation in Bengaluru | RR Heaven Gardenblr";
var description$7 = "Book a complimentary garden or landscaping consultation across Bengaluru. Site visit, planting plan and transparent estimate.";
var Route$8 = createFileRoute("/book-consultation")({
	head: () => ({
		meta: [
			{ title: title$7 },
			{
				name: "description",
				content: description$7
			},
			{
				property: "og:title",
				content: title$7
			},
			{
				property: "og:description",
				content: description$7
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/book-consultation"
			},
			{
				name: "twitter:title",
				content: title$7
			},
			{
				name: "twitter:description",
				content: description$7
			}
		],
		links: [{
			rel: "canonical",
			href: "/book-consultation"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./contact-3HHTxdnU.mjs");
var title$6 = "Contact RR Heaven Gardenblr — Garden Nursery, Rajarajeshwari Nagar";
var description$6 = "Visit our nursery at BEML Layout, Rajarajeshwari Nagar, Bengaluru 560098. Open daily 7:30 AM – 10:00 PM. Call +91 9448276985.";
var Route$7 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: title$6 },
			{
				name: "description",
				content: description$6
			},
			{
				property: "og:title",
				content: title$6
			},
			{
				property: "og:description",
				content: description$6
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/contact"
			},
			{
				name: "twitter:title",
				content: title$6
			},
			{
				name: "twitter:description",
				content: description$6
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./gallery-DNBBuIrV.mjs");
var title$5 = "Garden Gallery — Residential & Commercial Landscapes | RR Heaven Gardenblr";
var description$5 = "Browse residential, commercial, terrace, indoor, outdoor and luxury villa gardens designed and built by RR Heaven Gardenblr in Bengaluru.";
var Route$6 = createFileRoute("/gallery")({
	head: () => ({
		meta: [
			{ title: title$5 },
			{
				name: "description",
				content: description$5
			},
			{
				property: "og:title",
				content: title$5
			},
			{
				property: "og:description",
				content: description$5
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/gallery"
			},
			{
				name: "twitter:title",
				content: title$5
			},
			{
				name: "twitter:description",
				content: description$5
			}
		],
		links: [{
			rel: "canonical",
			href: "/gallery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./privacy-policy-BZ7Iqdri.mjs");
var title$4 = "Privacy Policy | RR Heaven Gardenblr";
var description$4 = "How RR Heaven Gardenblr collects, uses and protects the personal information you share with us.";
var Route$5 = createFileRoute("/privacy-policy")({
	head: () => ({
		meta: [
			{ title: title$4 },
			{
				name: "description",
				content: description$4
			},
			{
				property: "og:title",
				content: title$4
			},
			{
				property: "og:description",
				content: description$4
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/privacy-policy"
			},
			{
				name: "twitter:title",
				content: title$4
			},
			{
				name: "twitter:description",
				content: description$4
			}
		],
		links: [{
			rel: "canonical",
			href: "/privacy-policy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./products-Cksse2Zl.mjs");
var title$3 = "Premium Plants & Designer Pots Collection | RR Heaven Gardenblr";
var description$3 = "Acclimatised indoor & outdoor plants, ceramic planters, granite fibre pots, organic manures and cocopeat — direct from our Bengaluru nursery.";
var Route$4 = createFileRoute("/products")({
	head: () => ({
		meta: [
			{ title: title$3 },
			{
				name: "description",
				content: description$3
			},
			{
				property: "og:title",
				content: title$3
			},
			{
				property: "og:description",
				content: description$3
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/products"
			},
			{
				name: "twitter:title",
				content: title$3
			},
			{
				name: "twitter:description",
				content: description$3
			}
		],
		links: [{
			rel: "canonical",
			href: "/products"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./projects-BN6cXEmB.mjs");
var title$2 = "Landscape Projects & Architectural Masterplans | RR Heaven Gardenblr";
var description$2 = "Villas, penthouses, commercial tech parks and resort grounds delivered by RR Heaven Gardenblr across Bengaluru and Karnataka.";
var Route$3 = createFileRoute("/projects")({
	head: () => ({
		meta: [
			{ title: title$2 },
			{
				name: "description",
				content: description$2
			},
			{
				property: "og:title",
				content: title$2
			},
			{
				property: "og:description",
				content: description$2
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/projects"
			},
			{
				name: "twitter:title",
				content: title$2
			},
			{
				name: "twitter:description",
				content: description$2
			}
		],
		links: [{
			rel: "canonical",
			href: "/projects"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services-sToNdK_B.mjs");
var title$1 = "Landscaping & Architectural Garden Services | RR Heaven Gardenblr";
var description$1 = "Indoor setup, living walls, villa landscaping, rooftop gardens, maintenance SLAs and organic plant protection across Bengaluru.";
var Route$2 = createFileRoute("/services")({
	head: () => ({
		meta: [
			{ title: title$1 },
			{
				name: "description",
				content: description$1
			},
			{
				property: "og:title",
				content: title$1
			},
			{
				property: "og:description",
				content: description$1
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/services"
			},
			{
				name: "twitter:title",
				content: title$1
			},
			{
				name: "twitter:description",
				content: description$1
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var BASE_URL = "";
var Route$1 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/products",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/services",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/projects",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/gallery",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/about",
				changefreq: "yearly",
				priority: "0.7"
			},
			{
				path: "/contact",
				changefreq: "yearly",
				priority: "0.8"
			},
			{
				path: "/book-consultation",
				changefreq: "yearly",
				priority: "0.9"
			},
			{
				path: "/privacy-policy",
				changefreq: "yearly",
				priority: "0.3"
			},
			{
				path: "/terms",
				changefreq: "yearly",
				priority: "0.3"
			}
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter = () => import("./terms-4n1pJMGz.mjs");
var title = "Terms & Conditions | RR Heaven Gardenblr";
var description = "Terms governing purchases, garden design, landscaping and maintenance services provided by RR Heaven Gardenblr, Bengaluru.";
var Route = createFileRoute("/terms")({
	head: () => ({
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/terms"
			},
			{
				name: "twitter:title",
				content: title
			},
			{
				name: "twitter:description",
				content: description
			}
		],
		links: [{
			rel: "canonical",
			href: "/terms"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$10.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$11
	}),
	AboutRoute: Route$9.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$11
	}),
	BookConsultationRoute: Route$8.update({
		id: "/book-consultation",
		path: "/book-consultation",
		getParentRoute: () => Route$11
	}),
	ContactRoute: Route$7.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$11
	}),
	GalleryRoute: Route$6.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$11
	}),
	PrivacyPolicyRoute: Route$5.update({
		id: "/privacy-policy",
		path: "/privacy-policy",
		getParentRoute: () => Route$11
	}),
	ProductsRoute: Route$4.update({
		id: "/products",
		path: "/products",
		getParentRoute: () => Route$11
	}),
	ProjectsRoute: Route$3.update({
		id: "/projects",
		path: "/projects",
		getParentRoute: () => Route$11
	}),
	ServicesRoute: Route$2.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$11
	}),
	SitemapDotxmlRoute: Route$1.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$11
	}),
	TermsRoute: Route.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$11
	})
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
