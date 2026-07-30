import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as LuxButton, u as Reveal } from "./catalog-CHeQAKtr.mjs";
import { t as BRAND } from "./site-x3fcXbb9.mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ConsultationForm-Ss6cCYYg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = objectType({
	name: stringType().trim().min(2, { message: "Please enter your name" }).max(100, { message: "Name must be under 100 characters" }),
	phone: stringType().trim().regex(/^[0-9+\-\s]{8,15}$/, { message: "Enter a valid phone number" }),
	email: stringType().trim().email({ message: "Enter a valid email address" }).max(255).or(literalType("")),
	service: stringType().trim().min(1, { message: "Select a service" }),
	message: stringType().trim().max(1e3, { message: "Message must be under 1000 characters" })
});
var SERVICE_OPTIONS = [
	"Indoor Garden Setup",
	"Outdoor Garden Setup",
	"Garden Design",
	"Landscaping",
	"Garden Maintenance",
	"Plant Maintenance",
	"Re-potting",
	"Organic Solutions",
	"Plants & Pots Purchase"
];
var field = "w-full border-b border-foreground/15 bg-transparent py-4 text-[0.95rem] text-foreground placeholder:text-foreground/35 transition-colors focus:border-gold focus:outline-none";
function ConsultationForm() {
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const data = {
			name: String(fd.get("name") ?? ""),
			phone: String(fd.get("phone") ?? ""),
			email: String(fd.get("email") ?? ""),
			service: String(fd.get("service") ?? ""),
			message: String(fd.get("message") ?? "")
		};
		const parsed = schema.safeParse(data);
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) {
				const key = String(issue.path[0]);
				if (!next[key]) next[key] = issue.message;
			}
			setErrors(next);
			return;
		}
		setErrors({});
		const text = [
			`New consultation request — ${BRAND.name}`,
			`Name: ${parsed.data.name}`,
			`Phone: ${parsed.data.phone}`,
			parsed.data.email ? `Email: ${parsed.data.email}` : "",
			`Service: ${parsed.data.service}`,
			parsed.data.message ? `Details: ${parsed.data.message}` : ""
		].filter(Boolean).join("\n");
		window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
		setSent(true);
		e.currentTarget.reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] gap-14 px-5 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold",
					children: "Book a Consultation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-6 text-forest",
					children: "Tell us about your space."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body-lux mt-8 max-w-sm",
					children: "Share a few details and we will arrange a site visit at a time that suits you. Consultations across Bengaluru are complimentary."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 space-y-3 border-t border-foreground/10 pt-8",
					children: [BRAND.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:+91${p}`,
						className: "numeral link-underline block text-lg text-forest",
						children: ["+91 ", p]
					}, p)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${BRAND.email}`,
						className: "link-underline inline-block pt-2 text-sm text-muted-foreground",
						children: BRAND.email
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					noValidate: true,
					className: "grid gap-8 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "name",
								className: "eyebrow text-muted-foreground",
								children: "Full name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "name",
								name: "name",
								maxLength: 100,
								className: field,
								placeholder: "Your name"
							}),
							errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-destructive",
								children: errors.name
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "phone",
								className: "eyebrow text-muted-foreground",
								children: "Phone"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "phone",
								name: "phone",
								maxLength: 15,
								className: field,
								placeholder: "10-digit mobile"
							}),
							errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-destructive",
								children: errors.phone
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "email",
								className: "eyebrow text-muted-foreground",
								children: "Email (optional)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "email",
								name: "email",
								maxLength: 255,
								className: field,
								placeholder: "you@email.com"
							}),
							errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-destructive",
								children: errors.email
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "service",
								className: "eyebrow text-muted-foreground",
								children: "Service"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "service",
								name: "service",
								defaultValue: "",
								className: field,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									disabled: true,
									children: "Choose a service"
								}), SERVICE_OPTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: s,
									children: s
								}, s))]
							}),
							errors.service && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-destructive",
								children: errors.service
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "message",
									className: "eyebrow text-muted-foreground",
									children: "About your space"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "message",
									name: "message",
									rows: 4,
									maxLength: 1e3,
									className: `${field} resize-none`,
									placeholder: "Area, location, timeline, references…"
								}),
								errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-destructive",
									children: errors.message
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2 flex flex-wrap items-center gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
								type: "submit",
								variant: "solid",
								children: "Send request"
							}), sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-olive",
								children: "Thank you — your request is on its way. We respond within 24 hours (open 7 working days a week)."
							})]
						})
					]
				})
			})]
		})
	});
}
//#endregion
export { ConsultationForm as t };
