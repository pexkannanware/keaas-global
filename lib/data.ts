export const company = {
  name: "KEAAS",
  formal: "Knowledge & Expertise as a Service",
  tagline: "Expertise Delivered.",
  email: "hello@keaas.com",
  description:
    "Experts-as-a-Service company providing specialist talent and complete delivery teams to System Integrators worldwide.",
};

export const nav = [
  {
    label: "About",
    children: [
      { href: "/about", label: "About KEAAS" },
      { href: "/leadership", label: "Leadership" },
    ],
  },
  {
    label: "Services",
    children: [
      { href: "/services/individual-experts", label: "Individual Experts" },
      { href: "/services/tactical-pods", label: "Tactical Pods" },
      { href: "/services/swat-team", label: "SWAT Team" },
    ],
  },
  { href: "/why-keaas", label: "Why KEAAS" },
  { href: "/approach", label: "Approach" },
  { href: "/experts", label: "Domain expertise" },
  { href: "/insights", label: "Insights" },
] as const;

export const clients = [
  { name: "GMMCO", src: "/images/clients/gmmco-hd.png" },
  { name: "Choithrams", src: "/images/clients/choithrams-hd.png" },
  {
    name: "Dhaksha Drones",
    src: "/images/clients/dhaksha-hd.png",
    testimonial:
      "KEAAS's SAP MM & SD consultants provided excellent support across procurement, inventory, sales, and distribution processes with a clear understanding of our business needs.",
  },
  {
    name: "Leitwind",
    src: "/images/clients/leitwind-hd.png",
    testimonial:
      "We are highly satisfied with the support delivered by the SAP Plant Maintenance consultant from KEAAS in optimizing our production and maintenance processes.",
  },
  { name: "JK Fenner", src: "/images/clients/jk-fenner-hd.png" },
  { name: "Alghanim Industries", src: "/images/clients/alghanim-hd.png" },
] as const;

export const services = [
  {
    slug: "individual-experts",
    title: "Individual Experts",
    hook: "Access the right expertise",
    summary:
      "Highly experienced domain experts and industry veterans who join a live System Integrator programme as a precise, accountable extension of the team.",
    detail:
      "When a workstream needs one scarce SAP skill — not a bench of generalists — KEAAS places a domain expert who has already delivered the same process in an enterprise landscape. Individual Experts integrate into your operating cadence, report through your lead, and stay for the window the programme actually needs.",
    points: [
      "Highly experienced Domain Experts",
      "Industry Veterans",
    ],
  },
  {
    slug: "tactical-pods",
    title: "Tactical Pods",
    hook: "Scale without adding fixed overhead",
    summary:
      "Small, cross-functional teams assigned to specific clients — a ready unit of complementary SAP skills, not a collection of résumés.",
    detail:
      "Tactical Pods are assembled around a named client and a defined outcome. A compact mix of functional and technical specialists works as one unit inside the SI delivery system, with a shared RAID log, a named counterpart, and a cadence you already run.",
    points: [
      "Small, cross-functional teams assigned to specific clients",
    ],
  },
  {
    slug: "swat-team",
    title: "SWAT Team",
    hook: "Close capability gaps fast",
    summary:
      "A specialised task force of senior consultants and solution architects, custom-fit to tackle the most critical challenges.",
    detail:
      "When a programme is on the critical path — design locked, cutover slipping, or a landscape decision that cannot wait — KEAAS deploys a SWAT Team of senior consultants and solution architects. The fit is custom: the exact seniority, modules and architecture depth the situation demands, held to the same operating discipline as your own principals.",
    points: [
      "Specialized task force of senior consultants & solution architects",
      "Custom fit to tackle the most critical challenges",
    ],
  },
] as const;

export const whyOutcomes = [
  {
    lead: "Reduce",
    rest: "SAP operating costs by up to",
    emphasis: "",
    mid: "",
    stat: "40%",
    trail: "while improving service quality.",
  },
  {
    lead: "",
    rest: "Free up internal teams and",
    emphasis: "improve productivity",
    mid: "by",
    stat: "20–30%",
    trail: "through optimized SAP operations.",
  },
  {
    lead: "Accelerate SAP ROI",
    rest: "timelines by",
    emphasis: "",
    mid: "",
    stat: "30–50%",
    trail: "with continuous optimization.",
  },
] as const;

export const aboutIntro =
  "An entity of the Kannanware Group — transformation specialists with deep domain experience across industries in Finance, Treasury, Material Management, Plant Maintenance, Sales & Distribution and SAP Analytics Cloud — Private and Public Cloud.";

type LeadershipMember = {
  name: string;
  role: string;
  image: string | null;
};

export const leadershipTeam: LeadershipMember[] = [
  {
    name: "Sudha",
    role: "Managing Director",
    image: "/images/leadership/sudha.png",
  },
  {
    name: "Sivaranjani Sivakumar",
    role: "Chief Financial Officer & MD",
    image: "/images/leadership/sivaranjani-sivakumar.jpg",
  },
  {
    name: "Mahesh Balaji",
    role: "Chief People & Compliance Officer",
    image: "/images/leadership/mahesh-balaji.jpg",
  },
  {
    name: "Preethi",
    role: "Business Operations Lead",
    image: "/images/leadership/preethi.jpg",
  },
];

export const aboutStats = [
  {
    value: "28+",
    title: "Delighted Customers Across Regions",
    tagline: "Local Presence, Global Expertise",
  },
  {
    value: "75%",
    title: "SAP Certified Consultants",
    tagline: "Innovation at Core",
  },
  {
    value: "45+",
    title: "Multi Regional Industry Experts",
    tagline: "One Commitment to Excellence",
  },
  {
    value: "100%",
    title: "SLA Adherence",
    subtitle: "Visibility of Fulfilment Status",
    tagline: "Credibility in our DNA",
  },
  {
    value: "0%",
    title: "Right First Time — Every Time",
    items: [
      "Delay in Profile Submission",
      "Escalation Focus",
      "Tolerance on Delivery Gaps",
      "Delay in Follow-Through",
    ],
    tagline: "Right First Time — Every Time",
  },
] as const;

export const industries = [
  { name: "Banking & Finance", icon: "landmark" },
  { name: "Manufacturing", icon: "factory" },
  { name: "Oil & Gas", icon: "fuel" },
  { name: "Automotive", icon: "car" },
  { name: "Food & Beverage", icon: "utensils" },
  { name: "Agro Products", icon: "sprout" },
] as const;

export const domains = [
  { name: "Finance", icon: "wallet" },
  { name: "Human Capital", icon: "headset" },
  { name: "Production", icon: "clipboard-check" },
  { name: "Procurement & Logistics", icon: "truck" },
  { name: "Sales", icon: "user" },
] as const;

export const skills = [
  { name: "SAP FICO", icon: "coins" },
  { name: "SAP Treasury", icon: "trending-up" },
  { name: "SAP MM & SD", icon: "bar-chart" },
  { name: "SAP Prod Plan", icon: "line-chart" },
  { name: "SAP Plant Maint.", icon: "cog" },
  { name: "SAP Business AI", icon: "brain" },
  { name: "SAP ABAP & BTP", icon: "cloud" },
] as const;

export const process = [
  {
    id: "01",
    title: "Requirement Understanding",
    copy: "Requirement gathering from the client.",
  },
  {
    id: "02",
    title: "Resource Mapping",
    copy: "Mapping the right expert from in-house or our trusted expert partners.",
  },
  {
    id: "03",
    title: "Internal Screening & Technical Validation",
    copy: "Initial screening and technical evaluation using AI-based tools.",
  },
  {
    id: "04",
    title: "Profile Submission to Client",
    copy: "Shortlisted and validated expert profiles shared with the client.",
  },
  {
    id: "05",
    title: "Client Interview Rounds",
    copy: "L1, L2, Technical, and client discussions as applicable.",
  },
  {
    id: "06",
    title: "Talent Selection by Client",
    copy: "Client selects the candidates for role fitment.",
  },
  {
    id: "07",
    title: "Onboarding & Deployment",
    copy: "Contract signed; onboard the expert within the agreed SLA and deploy.",
  },
  {
    id: "08",
    title: "Weekly Cadence & Quality Governance",
    copy: "Weekly cadence for progress, delivery quality, and continuous alignment.",
  },
] as const;

export const approachPrinciples = [
  {
    title: "Shared operating cadence",
    copy: "Experts join your rituals — stand-ups, RAID reviews, steering packs — not a parallel delivery lane. Onboarding is structured so the client never feels a seam.",
  },
  {
    title: "Technical validation before submission",
    copy: "Every profile passes internal screening and AI-assisted technical evaluation. You receive shortlisted candidates who have already cleared our bar.",
  },
  {
    title: "Weekly quality governance",
    copy: "Progress, delivery quality and alignment are reviewed on a fixed weekly cadence. Issues surface early; course corrections happen inside the programme, not after it.",
  },
] as const;

export const approachCommitments = [
  {
    label: "Profile submission",
    detail: "Validated expert profiles shared within agreed SLA — no delay in follow-through.",
  },
  {
    label: "Deployment",
    detail: "Contract signed; expert onboarded and deployed within the agreed window.",
  },
  {
    label: "Governance",
    detail: "Named counterpart, shared RAID log and weekly cadence from day one of deployment.",
  },
  {
    label: "Accountability",
    detail: "Right first time — every time. Zero tolerance on delivery gaps or escalation focus.",
  },
] as const;

export const experts = [
  {
    slug: "sap-fico",
    role: "SAP FICO Consultant",
    experience: "15+ years typical depth",
    specialization: "Finance, Controlling, S/4HANA",
    summary:
      "Finance transformation workstreams for multi-country S/4HANA programmes, with depth in controlling design and close acceleration.",
  },
  {
    slug: "sap-treasury",
    role: "SAP Treasury Consultant",
    experience: "12+ years typical depth",
    specialization: "Treasury, Cash, Risk",
    summary:
      "Treasury operations, cash positioning and risk processes designed for live SI programmes — not slideware.",
  },
  {
    slug: "sap-mm-sd",
    role: "SAP MM & SD Consultant",
    experience: "12+ years typical depth",
    specialization: "Procurement, Inventory, Sales & Distribution",
    summary:
      "End-to-end materials and order-to-cash workstreams, aligned to how the client actually buys, stores and sells.",
  },
  {
    slug: "sap-pp",
    role: "SAP Production Planning Consultant",
    experience: "10+ years typical depth",
    specialization: "Production Planning, Manufacturing",
    summary:
      "Production planning specialists who have run MRP, capacity and shop-floor integration inside manufacturing landscapes.",
  },
  {
    slug: "sap-pm",
    role: "SAP Plant Maintenance Consultant",
    experience: "10+ years typical depth",
    specialization: "Plant Maintenance, Asset Operations",
    summary:
      "Maintenance and asset processes that keep plants running — from preventive plans to work-order discipline.",
  },
  {
    slug: "sap-abap-btp",
    role: "SAP ABAP & BTP Specialist",
    experience: "10+ years typical depth",
    specialization: "ABAP, BTP, Extensions",
    summary:
      "Clean-core extensions and scalable ABAP on BTP, written for the operators who inherit the landscape.",
  },
] as const;

export const testimonials = [
  {
    featured: true,
    quote:
      "We appreciate KEAAS's SAP FICO and Treasury consultant for their strong domain expertise, professionalism, and timely support in managing our financial operations.",
    role: "SAP FICO & Treasury",
    company: "Parrys",
  },
  {
    featured: false,
    quote:
      "KEAAS's SAP MM & SD consultants provided excellent support across procurement, inventory, sales, and distribution processes with a clear understanding of our business needs.",
    role: "SAP MM & SD",
    company: "Dhaksha Drones",
  },
  {
    featured: false,
    quote:
      "We are highly satisfied with the support delivered by the SAP Plant Maintenance consultant from KEAAS in optimizing our production and maintenance processes.",
    role: "SAP Plant Maintenance",
    company: "Leitwind",
  },
  {
    featured: false,
    quote:
      "KEAAS's ABAP consultant delivered scalable, innovative, and business-focused solutions that enhanced our SAP environment.",
    role: "SAP ABAP",
    company: "NTT DATA Middle East",
  },
  {
    featured: false,
    quote:
      "KEAAS has consistently supplied skilled SAP consultants who are knowledgeable, adaptable, and aligned with our industry-specific requirements.",
    role: "SAP Delivery",
    company: "Enterprise clients",
  },
] as const;

export const insights = [
  {
    slug: "future-of-sap-2026",
    category: "Enterprise Platforms",
    title: "The Future of SAP: Trends Shaping 2026 and Beyond",
    date: "12 March 2026",
    readTime: "8 min",
    image: "/images/insight-erp.jpg",
    excerpt:
      "How System Integrators should prepare for modern SAP landscapes, cleaner cores and a scarcer market for true functional depth.",
    body: [
      "SAP transformation is no longer a single-suite conversation. System Integrators are being asked to deliver cleaner cores, more disciplined extensions and faster value stories — often with the same delivery bench they had three years ago.",
      "Three forces will define 2026 and beyond. First, the move from monolithic customisation to a clean core with a governed side-by-side estate. Second, the rise of industry-specific process depth as a differentiator, not a commodity. Third, a structural shortage of consultants who have actually closed a books cycle, not merely configured a chart of accounts.",
      "KEAAS works with global SI partners who treat expertise as infrastructure. The firms that win the next wave of SAP programmes will not be those with the largest bench. They will be those who can place the right specialist or complete team into the right workstream at the exact moment the programme needs them.",
      "For delivery leaders, the implication is practical. Build a thinner permanent core. Surround it with curated, on-demand specialists and accountable teams. Measure them by the movement of the plan, not by the hours they occupy a seat.",
    ],
  },
  {
    slug: "high-performing-extended-teams",
    category: "Delivery",
    title: "Building High-Performing Extended Teams",
    date: "4 February 2026",
    readTime: "6 min",
    image: "/images/insight-teams.jpg",
    excerpt:
      "Extended teams fail when they are treated as overflow. They succeed when they inherit your operating system.",
    body: [
      "Most extended-team models fail for a simple reason: the expert is asked to deliver inside a system they have not been shown. Access arrives late. Rituals are implied. Decision rights stay unspoken.",
      "High-performing SI programmes treat KEAAS experts as an extension of the delivery system, not as a contractor parked at the edge. That means a named counterpart, a defined workstream, a shared RAID log and a two-week onboarding that is as disciplined as a client kick-off.",
      "The cultural test is equally precise. An expert who has worked inside regulated, multi-country programmes already understands how an SI speaks to a client. Screening for that fluency is as important as screening for the module.",
      "When the operating system is shared, extended teams stop being a capacity patch and become a growth instrument.",
    ],
  },
  {
    slug: "global-talent-local-impact",
    category: "EaaS",
    title: "Global Talent, Local Impact: The EaaS Advantage",
    date: "18 January 2026",
    readTime: "7 min",
    image: "/images/insight-global.jpg",
    excerpt:
      "Geography still matters. Time zones, language and regulatory context decide whether expertise lands — or merely arrives.",
    body: [
      "Global talent is not the same as interchangeable talent. A controlling specialist in Mumbai can be exactly right for a Frankfurt close — if the time-zone overlap, the language of the steering pack and the local statutory context have been designed for.",
      "Experts-as-a-Service works when the matching logic is geographic as well as technical. KEAAS connects specialists and delivery teams through hubs in Chennai, the United Arab Emirates and Texas.",
      "The commercial effect is quiet and material. Programmes stop paying for the wrong seniority in the wrong city. Clients stop feeling the seam between the SI team and the specialist who joined in week six.",
      "Local impact is the point. Global reach is only the method.",
    ],
  },
] as const;

export const careers = [
  {
    title: "Senior SAP Consultant — Finance",
    location: "Remote · India / UAE / USA",
    type: "Expert network",
  },
  {
    title: "Integration Architect",
    location: "Remote · India / UAE / USA",
    type: "Expert network",
  },
  {
    title: "Partner Development Manager",
    location: "Chennai, Dubai or Texas",
    type: "Full-time",
  },
] as const;

export const caseStudies = [
  {
    slug: "s4hana-finance-emea",
    client: "Global SI · EMEA",
    title: "S/4HANA Finance workstream recovered in six weeks",
    result: "Critical-path design decisions closed; UAT entered on the reset plan.",
  },
  {
    slug: "integration-apac-cutover",
    client: "Regional SI · APAC",
    title: "Cutover integration defects cleared ahead of go-live",
    result: "Fourteen priority interfaces stabilised; hypercare reduced by a third.",
  },
  {
    slug: "architecture-americas",
    client: "National SI · India",
    title: "Target architecture for a hybrid cloud programme",
    result: "Board-ready landscape decision in twenty-two days.",
  },
] as const;
