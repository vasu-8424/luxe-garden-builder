import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-B2S1b4Nv.js
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, delay = 0, y = 32, className }) {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: reduced ? false : {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .95,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function MaskReveal({ children, delay = 0, className }) {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `block overflow-hidden ${className ?? ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			className: "block",
			initial: reduced ? false : { y: "110%" },
			whileInView: { y: "0%" },
			viewport: {
				once: true,
				margin: "-60px"
			},
			transition: {
				duration: 1.05,
				delay,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			children
		})
	});
}
var variantClass = {
	solid: "btn-solid",
	outline: "btn-outline-dark",
	ghost: "btn-ghost-light"
};
function Arrow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className: "btn-arrow",
		width: "16",
		height: "10",
		viewBox: "0 0 16 10",
		fill: "none",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M0 5h14M10 1l4 4-4 4",
			stroke: "currentColor",
			strokeWidth: "1.2",
			strokeLinecap: "square"
		})
	});
}
function LuxLink({ to, children, variant = "solid", className = "", ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: `btn-lux ${variantClass[variant]} ${className}`,
		...rest,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
	});
}
function LuxAnchor({ href, children, variant = "solid", className = "", ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		className: `btn-lux ${variantClass[variant]} ${className}`,
		...rest,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
	});
}
function LuxButton({ children, variant = "solid", className = "", ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		className: `btn-lux ${variantClass[variant]} ${className}`,
		...rest,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
	});
}
var hero_default = "/assets/hero-DSHAjvXz.jpg";
var about_default = "/assets/about-CGhZi1yq.jpg";
var p_indoor_default = "/assets/p-indoor-B9cJ2ngS.jpg";
var p_outdoor_default = "/assets/p-outdoor-CHwaSB7M.jpg";
var p_ceramic_default = "/assets/p-ceramic-BWgqnpCM.jpg";
var p_stands_default = "/assets/p-stands-CVb6x8hD.jpg";
var s_indoor_default = "/assets/s-indoor-BmXkpXNm.jpg";
var s_landscape_default = "/assets/s-landscape-BnxStf5A.jpg";
var s_terrace_default = "/assets/s-terrace-BG_J9A4O.jpg";
var s_maintenance_default = "/assets/s-maintenance-BXiBOrW3.jpg";
var cta_default = "/assets/cta-qAFrAftD.jpg";
var before_default = "/assets/before-CWyhKoZs.jpg";
var after_default = "/assets/after--TRyPWdx.jpg";
var g1_default = "/assets/g1-l_E0AjeD.jpg";
var g2_default = "/assets/g2-CdRD42T7.png";
var g3_default = "/assets/g3-B9jmMa2H.jpg";
var g4_default = "/assets/g4-sK5reF-q.jpg";
var g5_default = "/assets/g5-Bd2A5Mdx.jpg";
var g6_default = "/assets/g6-u4vwZHXl.jpg";
var IMG = {
	hero: hero_default,
	about: about_default,
	pIndoor: p_indoor_default,
	pOutdoor: p_outdoor_default,
	pCeramic: p_ceramic_default,
	pStands: p_stands_default,
	sIndoor: s_indoor_default,
	sLandscape: s_landscape_default,
	sTerrace: s_terrace_default,
	sMaintenance: s_maintenance_default,
	cta: cta_default,
	before: before_default,
	after: after_default,
	g1: g1_default,
	g2: g2_default,
	g3: g3_default,
	g4: g4_default,
	g5: g5_default,
	g6: g6_default
};
var PRODUCTS = [
	{
		title: "Indoor Statement Plants",
		category: "Indoor Botanical",
		copy: "Sculptural Monstera, Fiddle Leaf Figs and Snake Plants acclimatised for Indian luxury interiors and low-light suites.",
		image: p_indoor_default,
		span: "tall",
		specs: [
			{
				label: "Light Requirement",
				value: "Filtered / Medium Light"
			},
			{
				label: "Water Frequency",
				value: "Once per 5-7 Days"
			},
			{
				label: "Air Purifying",
				value: "Grade A+ Formaldehyde Filter"
			},
			{
				label: "Nursery Acclimatisation",
				value: "3 Months at RR Nagar Nursery"
			}
		],
		careGuide: [
			"Wipe leaves bi-weekly with organic neem extract solution",
			"Ensure proper drainage in glazed ceramic or granite planters",
			"Do not expose to direct harsh afternoon sun rays"
		]
	},
	{
		title: "Outdoor Architectural Palms & Shrubs",
		category: "Outdoor Landscape",
		copy: "Areca Palms, Traveler's Palms, Ficus and flowering hedging grown to resist Bengaluru monsoons and dry summers.",
		image: p_outdoor_default,
		specs: [
			{
				label: "Light Requirement",
				value: "Full Sun / Bright Outdoor"
			},
			{
				label: "Growth Habit",
				value: "Upright Architectural Form"
			},
			{
				label: "Drought Tolerance",
				value: "High (Once Established)"
			},
			{
				label: "Soil Type",
				value: "Enriched Red Earth & Cocopeat"
			}
		],
		careGuide: [
			"Water thoroughly early morning",
			"Apply enriched vermicompost quarterly",
			"Prune dead fronds twice a year"
		]
	},
	{
		title: "Hand-Glazed Artisan Ceramic Pots",
		category: "Planter Collection",
		copy: "Hand-turned luxury ceramic planters in matte cream, moss olive, terracotta and charcoal stone glazes.",
		image: p_ceramic_default,
		specs: [
			{
				label: "Material",
				value: "Double-Fired High Ceramic"
			},
			{
				label: "Finish",
				value: "Hand-Glazed Matte & Textured"
			},
			{
				label: "Drainage",
				value: "Pre-drilled with mesh filter"
			},
			{
				label: "Sizes Available",
				value: "8\" to 28\" Diameter"
			}
		]
	},
	{
		title: "UV-Stabilized Architectural Poly Planters",
		category: "Terrace & Balcony Pots",
		copy: "Lightweight, unbreakable UV-stable planters engineered for rooftop decks, balconies and modern high-rises.",
		image: g3_default,
		specs: [
			{
				label: "Material",
				value: "UV-Stabilized Fiber Polymer"
			},
			{
				label: "Weight",
				value: "70% Lighter than Stone"
			},
			{
				label: "Weather Proof",
				value: "-10°C to +55°C UV Stable"
			},
			{
				label: "Warranty",
				value: "5-Year Fade & Crack Guarantee"
			}
		]
	},
	{
		title: "Granite Fibre Monolith Planters",
		category: "Enterprise Planters",
		copy: "Architectural monolithic planters crafted from basalt fibre and stone powder, suited for grand villa entrances.",
		image: g2_default,
		span: "wide",
		fit: "contain",
		specs: [
			{
				label: "Structure",
				value: "Engineered Granite Fibre Monolith"
			},
			{
				label: "Aesthetic",
				value: "Minimalist Architectural Concrete Finish"
			},
			{
				label: "Load Capacity",
				value: "High Impact & Root Pressure Tolerant"
			},
			{
				label: "Ideal For",
				value: "Villa Entrances, Commercial Atriums"
			}
		]
	},
	{
		title: "Teak & Blackened Steel Plant Stands",
		category: "Interior Accessories",
		copy: "Precision-milled seasoned teakwood and powder-coated matte black iron stands that lift botanical greenery into sightlines.",
		image: p_stands_default,
		specs: [
			{
				label: "Material",
				value: "Grade-A Seasoned Teak & Alloy Steel"
			},
			{
				label: "Rust Protection",
				value: "Dual Powder Coat Finish"
			},
			{
				label: "Max Weight",
				value: "Up to 85 kg Planter Weight"
			},
			{
				label: "Handcrafted In",
				value: "Bengaluru Master Workshop"
			}
		]
	},
	{
		title: "Suspended Vertical & Hanging Pots",
		category: "Balcony Verticals",
		copy: "Heavy-duty brass and macrame suspended planters designed for courtyard atriums, balconies and terrace beams.",
		image: g1_default,
		span: "tall",
		specs: [
			{
				label: "Hanger Material",
				value: "Solid Brass / Weather Rope"
			},
			{
				label: "Planter Pot",
				value: "Terracotta & Lightweight Composite"
			},
			{
				label: "Drip Tray",
				value: "Integrated Concealed Tray"
			},
			{
				label: "Ideal Plants",
				value: "Philodendron, Pothos, Ferns"
			}
		]
	},
	{
		title: "Enriched Bio Vermicompost & Soil Manure",
		category: "Organic Soil Health",
		copy: "Aged vermicompost enriched with bio-char, neem cake, humic acid and micronutrients for vigorous root establishment.",
		image: s_maintenance_default,
		specs: [
			{
				label: "Composition",
				value: "100% Organic Earthworm Castings"
			},
			{
				label: "Additives",
				value: "Neem Cake + Seaweed Extract"
			},
			{
				label: "NPK Ratio",
				value: "Balanced Slow Release"
			},
			{
				label: "Pack Sizes",
				value: "5 kg, 25 kg, 50 kg & Bulk Tons"
			}
		]
	},
	{
		title: "Washed & Graded Hydro-Cocopeat",
		category: "Substrate & Medium",
		copy: "Low-EC washed coconut coir pith blocks for optimal moisture retention, propagation and root aeration.",
		image: g6_default,
		specs: [
			{
				label: "EC Value",
				value: "< 0.5 mS/cm (Fully Washed)"
			},
			{
				label: "pH Range",
				value: "5.8 – 6.5 (Ideal Botanical)"
			},
			{
				label: "Expansion",
				value: "1 kg expands to 15 Litres"
			},
			{
				label: "Dust Filtered",
				value: "Triple Sieved Clean Fiber"
			}
		]
	},
	{
		title: "Biological Plant Protection & Neem Oils",
		category: "Organic Pest Care",
		copy: "Cold-pressed high-azadirachtin neem extract and botanical spray formulas to eradicate pests without toxic chemicals.",
		image: g5_default,
		specs: [
			{
				label: "Active Ingredient",
				value: "Cold Pressed Neem Extract"
			},
			{
				label: "Safety",
				value: "100% Pet & Child Safe"
			},
			{
				label: "Targets",
				value: "Mealybugs, Aphids, Spider Mites"
			},
			{
				label: "Application",
				value: "Foliar Spray Every 14 Days"
			}
		]
	}
];
var SERVICES = [
	{
		title: "Indoor Garden & Living Wall Setup",
		copy: "Hydroponic & substrate living walls, atrium statement trees and foliage curated to match your interior lighting and microclimate.",
		image: s_indoor_default,
		points: [
			"Light intensity mapping & lux audit",
			"Automated drip irrigation & sensor setup",
			"Complimentary 3-month plant mortality warranty"
		],
		specs: [
			{
				label: "Site Inspection",
				value: "Complimentary across Bengaluru"
			},
			{
				label: "Turnaround",
				value: "3 to 7 Days Execution"
			},
			{
				label: "Irrigation",
				value: "Automated Drip / Micro Sprinkler"
			},
			{
				label: "Warranty",
				value: "100% Plant Replacement Guarantee"
			}
		]
	},
	{
		title: "Outdoor Villa & Lawn Landscape Setup",
		copy: "Lush lawn installation, palm avenues, stone walkways and flower beds engineered for durability against rain and sun.",
		image: p_outdoor_default,
		points: [
			"Soil testing & deep organic conditioning",
			"Architectural species layering & focal points",
			"Sub-surface drainage & storm water management"
		],
		specs: [
			{
				label: "Coverage",
				value: "Villas, Penthouses, Estates"
			},
			{
				label: "Soil Prep",
				value: "Red Earth + Vermicompost Mix"
			},
			{
				label: "Plant Quality",
				value: "Acclimatised Nursery Stock"
			},
			{
				label: "Execution Team",
				value: "In-house Master Horticulturists"
			}
		]
	},
	{
		title: "Architectural Garden Masterplanning",
		copy: "2D layout blueprints, 3D render visualizations, hardscape specifications, and plant palette curation before construction starts.",
		image: s_landscape_default,
		points: [
			"Architectural CAD drawings & 3D renders",
			"Lighting sightline & accent spotlight plan",
			"Complete itemised bill of quantities (BOQ)"
		],
		specs: [
			{
				label: "Deliverable",
				value: "Full CAD Masterplan + BOQ"
			},
			{
				label: "Consultant",
				value: "Senior Landscape Architect"
			},
			{
				label: "Turnaround",
				value: "5 Working Days"
			},
			{
				label: "Revisions",
				value: "Unlimited Design Iterations"
			}
		]
	},
	{
		title: "Full-Scope Landscaping Execution",
		copy: "Complete hardscape and softscape execution including granite paving, stone retaining walls, water fountains, and mature trees.",
		image: after_default,
		points: [
			"Granite hardscaping & stone coping",
			"Water features & zen koi ponds",
			"Mature specimen palm installation"
		],
		specs: [
			{
				label: "Scope",
				value: "Turnkey Design to Handover"
			},
			{
				label: "Project Size",
				value: "1,000 to 50,000+ sq ft"
			},
			{
				label: "Project Manager",
				value: "Dedicated On-site Engineer"
			},
			{
				label: "Contract Period",
				value: "Milestone-Based Execution"
			}
		]
	},
	{
		title: "Contracted Garden Maintenance SLA",
		copy: "Scheduled care contracts with certified horticulturists handling pruning, organic fertilisation, pest control, and seasonal replanting.",
		image: s_maintenance_default,
		points: [
			"Bi-weekly or monthly site visits",
			"Organic nutrition & bio pest management",
			"Free replacement of underperforming plants"
		],
		specs: [
			{
				label: "Contract Tiers",
				value: "Monthly / Quarterly / Annual"
			},
			{
				label: "Visits",
				value: "2 to 4 Visits per Month"
			},
			{
				label: "Reporting",
				value: "Digital Health Check Summary"
			},
			{
				label: "Replacements",
				value: "Included at zero added cost"
			}
		]
	},
	{
		title: "Corporate & Hospitality Plant Care",
		copy: "Dedicated maintenance schedules for corporate headquarters, boutique hotels, restaurants, and retail spaces in Bengaluru.",
		image: g5_default,
		points: [
			"Off-hours maintenance execution",
			"Plant rotation & shine maintenance",
			"Discreet emergency response team"
		],
		specs: [
			{
				label: "Suitable For",
				value: "Tech Parks, Hotels, Luxury Stores"
			},
			{
				label: "SLA Response",
				value: "Within 24 Hours for Replacements"
			},
			{
				label: "Compliance",
				value: "Safety & ISO Compliant Services"
			},
			{
				label: "Invoicing",
				value: "GST Compliant Monthly Billing"
			}
		]
	},
	{
		title: "On-Site Re-potting & Media Refresh",
		copy: "Root pruning, pot size upgrades, organic substrate replacement done at your premises with protective sheeting and zero mess.",
		image: s_terrace_default,
		points: [
			"Zero-spill protective floor cover",
			"Root health check & root-bound treatment",
			"Organic cocopeat & worm compost refresh"
		],
		specs: [
			{
				label: "Location",
				value: "Client Site Service"
			},
			{
				label: "Speed",
				value: "Up to 50 Pots Re-potted / Day"
			},
			{
				label: "Cleanup",
				value: "Complete Post-Service Cleaning"
			},
			{
				label: "Pot Upgrades",
				value: "Ceramic & Fiber Pots Available"
			}
		]
	},
	{
		title: "Soil Testing & Bio Organic Solutions",
		copy: "Soil pH analysis, nutrient deficiency diagnostic, vermicomposting program, and non-toxic bio pest eradication.",
		image: g6_default,
		points: [
			"Soil pH & electrical conductivity testing",
			"Tailored micronutrient blending",
			"100% pet and child safe bio formulas"
		],
		specs: [
			{
				label: "Diagnostic",
				value: "Lab-Grade Onsite Testing"
			},
			{
				label: "Organic Standard",
				value: "Zero Chemical Residue"
			},
			{
				label: "Soil Restoration",
				value: "2-Week Recovery Cycle"
			},
			{
				label: "Custom Mix",
				value: "Formulated for Site Soil"
			}
		]
	}
];
var GALLERY = [
	{
		image: hero_default,
		title: "RR Nagar Nursery Display Walkway",
		category: "Outdoor",
		ratio: "wide",
		description: "Our flagship nursery showcase featuring 500+ mature plant varieties, hand-glazed planters, and custom landscape installations.",
		specs: [{
			label: "Location",
			value: "Rajarajeshwari Nagar, Bengaluru"
		}, {
			label: "Varieties",
			value: "Over 500+ Acclimatised Species"
		}]
	},
	{
		image: g1_default,
		title: "Balcony Grass & Vertical Sanctuary",
		category: "Terrace",
		ratio: "tall",
		description: "A compact 200 sq ft apartment balcony converted into a serene private greenery with artificial turf, vertical planters, and warm mood lighting.",
		specs: [{
			label: "Project Size",
			value: "220 sq ft Balcony"
		}, {
			label: "Execution Time",
			value: "2 Days"
		}]
	},
	{
		image: g2_default,
		title: "Villa Grand Entrance Landscape",
		category: "Luxury Villas",
		ratio: "square",
		fit: "contain",
		description: "Architectural granite monolith planters combined with royal palms and spotlighting for a 5-bedroom luxury villa in Kanakapura Road.",
		specs: [{
			label: "Property",
			value: "Independent Villa Entrance"
		}, {
			label: "Planters Used",
			value: "Granite Monolith Composite"
		}]
	},
	{
		image: g3_default,
		title: "Corporate Lobby Atrium Installation",
		category: "Commercial",
		ratio: "tall",
		description: "A double-height corporate lobby adorned with light-loving indoor ficus trees and self-watering modular poly planters.",
		specs: [{
			label: "Client",
			value: "Meridian Tech Park"
		}, {
			label: "Plant Count",
			value: "85 Premium Specimen Pots"
		}]
	},
	{
		image: s_terrace_default,
		title: "Rooftop Terrace Lounge Deck",
		category: "Terrace",
		ratio: "wide",
		description: "Rooftop deck greenery with weather-proof seating, drought-resistant palms, drip irrigation, and perimeter hedging.",
		specs: [{
			label: "Area",
			value: "1,800 sq ft Terrace"
		}, {
			label: "Irrigation",
			value: "Automated WiFi Drip Timer"
		}]
	},
	{
		image: s_indoor_default,
		title: "Luxury Residence Living Wall",
		category: "Indoor",
		ratio: "wide",
		description: "An indoor bio-wall incorporating 350+ tropical air-purifying foliage plants with concealed water catchments.",
		specs: [{
			label: "Dimensions",
			value: "14 ft Width x 9 ft Height"
		}, {
			label: "Lighting",
			value: "Integrated Full-Spectrum Grow Lights"
		}]
	},
	{
		image: g4_default,
		title: "Resort Poolside Tropical Garden",
		category: "Commercial",
		ratio: "wide",
		description: "Tropical poolside landscaping featuring frangipani trees, weeping foliage, textured stone cladding, and lawn borders.",
		specs: [{
			label: "Location",
			value: "Nandi Hills Retreat"
		}, {
			label: "Land Area",
			value: "1.2 Acres"
		}]
	},
	{
		image: g5_default,
		title: "Botanical Plant Study & Care",
		category: "Indoor",
		ratio: "tall",
		description: "A curated indoor tropical plant collection in custom ceramic glazed pots styled for a minimalist design studio.",
		specs: [{
			label: "Style",
			value: "Modern Japanese Minimalist"
		}, {
			label: "Pots",
			value: "Artisan Ceramic Stone Finish"
		}]
	},
	{
		image: after_default,
		title: "Residence Backyard Transformation",
		category: "Residential",
		ratio: "wide",
		description: "Before and after overhaul turning an overgrown backyard into a pristine lawn, stone dining patio, and fruit trees.",
		specs: [{
			label: "Turnaround",
			value: "10 Days Full Execution"
		}, {
			label: "Hardscape",
			value: "Flamed Granite Paving"
		}]
	},
	{
		image: g6_default,
		title: "Courtyard Zen Bamboo Garden",
		category: "Residential",
		ratio: "square",
		description: "Internal courtyard featuring golden bamboo, polished river pebbles, stone lantern, and low-maintenance ground covers.",
		specs: [{
			label: "Vibe",
			value: "Tranquil Zen Meditation Space"
		}, {
			label: "Maintenance",
			value: "Low Effort SLA"
		}]
	},
	{
		image: s_landscape_default,
		title: "Formal Courtyard & Estate Driveway",
		category: "Luxury Villas",
		ratio: "wide",
		description: "Formal symmetrical estate landscape with sculpted topiary, central water fountain, and royal palm avenue.",
		specs: [{
			label: "Estate Area",
			value: "6,200 sq ft Masterplan"
		}, {
			label: "Fountain",
			value: "Custom Carved Natural Stone"
		}]
	},
	{
		image: p_outdoor_default,
		title: "Driveway Palm Avenue",
		category: "Outdoor",
		ratio: "tall",
		description: "Line of 12-foot mature Areca and Foxtail Palms flanking the private entrance driveway of a luxury estate.",
		specs: [{
			label: "Tree Height",
			value: "10 - 14 Feet Mature Stock"
		}, {
			label: "Drainage",
			value: "Sub-surface Gravel Bed"
		}]
	}
];
var GALLERY_CATEGORIES = [
	"All",
	"Residential",
	"Commercial",
	"Terrace",
	"Indoor",
	"Outdoor",
	"Luxury Villas"
];
var PROJECTS = [
	{
		title: "Aranya Villa Estate",
		location: "Kanakapura Road, Bengaluru",
		scope: "Landscape Masterplan · 6,200 sq ft",
		image: s_landscape_default,
		year: "2024",
		description: "A complete estate transformation including central stone fountain, lawn, driveway palm avenue, and automated drip irrigation.",
		specs: [
			{
				label: "Scope",
				value: "Masterplan, Hardscape & Planting"
			},
			{
				label: "Area",
				value: "6,200 sq ft"
			},
			{
				label: "Timeline",
				value: "3 Weeks Execution"
			},
			{
				label: "Budget Tier",
				value: "Signature Luxury"
			}
		]
	},
	{
		title: "Skyline Terrace Residences",
		location: "Rajarajeshwari Nagar, Bengaluru",
		scope: "Rooftop Garden · 2,400 sq ft",
		image: s_terrace_default,
		year: "2024",
		description: "Penthouse rooftop lounge with UV-stabilized lightweight planters, living pergola, drip timer, and ambient accent lighting.",
		specs: [
			{
				label: "Scope",
				value: "Rooftop Deck & Perimeter Hedging"
			},
			{
				label: "Area",
				value: "2,400 sq ft"
			},
			{
				label: "Timeline",
				value: "7 Days"
			},
			{
				label: "Budget Tier",
				value: "Premium Executive"
			}
		]
	},
	{
		title: "Meridian Tech Park Headquarters",
		location: "Mysore Road, Bengaluru",
		scope: "Lobby & Atrium Biophilic Installation",
		image: g3_default,
		year: "2023",
		description: "Biophilic indoor office installation featuring 100+ acclimatised indoor plants in self-watering granite fiber planters.",
		specs: [
			{
				label: "Scope",
				value: "Corporate Lobby & Executive Suites"
			},
			{
				label: "Plant Count",
				value: "120+ Large Pots"
			},
			{
				label: "SLA Contract",
				value: "Weekly Maintenance SLA"
			},
			{
				label: "Budget Tier",
				value: "Enterprise Commercial"
			}
		]
	},
	{
		title: "The Grove Eco Resort",
		location: "Nandi Hills, Karnataka",
		scope: "Poolside & Pathway Landscape · 1.2 Acres",
		image: g4_default,
		year: "2023",
		description: "Resort garden development with tropical trees, stone pathways, lawn grounds, and low-voltage garden illumination.",
		specs: [
			{
				label: "Scope",
				value: "Resort Grounds & Poolside"
			},
			{
				label: "Area",
				value: "1.2 Acres"
			},
			{
				label: "Timeline",
				value: "1 Month Execution"
			},
			{
				label: "Budget Tier",
				value: "Resort Signature"
			}
		]
	},
	{
		title: "Casa Verde Private Residence",
		location: "Kengeri, Bengaluru",
		scope: "Backyard Outdoor Garden Overhaul",
		image: after_default,
		year: "2022",
		description: "Residential garden makeover with natural lawn turf, granite edging, outdoor seating nook, and aromatic flowering plants.",
		specs: [
			{
				label: "Scope",
				value: "Backyard Softscape & Lawn"
			},
			{
				label: "Area",
				value: "1,500 sq ft"
			},
			{
				label: "Timeline",
				value: "5 Days"
			},
			{
				label: "Budget Tier",
				value: "Residential Deluxe"
			}
		]
	},
	{
		title: "Nivas Courtyard Villa",
		location: "Banashankari, Bengaluru",
		scope: "Internal Courtyard Zen Garden",
		image: g6_default,
		year: "2022",
		description: "Serene internal courtyard featuring golden bamboo, natural water stone feature, river pebbles, and indirect lighting.",
		specs: [
			{
				label: "Scope",
				value: "Internal Courtyard Setup"
			},
			{
				label: "Area",
				value: "450 sq ft"
			},
			{
				label: "Timeline",
				value: "3 Days"
			},
			{
				label: "Budget Tier",
				value: "Bespoke Courtyard"
			}
		]
	}
];
//#endregion
export { LuxButton as a, PRODUCTS as c, SERVICES as d, LuxAnchor as i, PROJECTS as l, GALLERY_CATEGORIES as n, LuxLink as o, IMG as r, MaskReveal as s, GALLERY as t, Reveal as u };
