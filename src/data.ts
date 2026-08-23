export const NAV_ITEMS = [
  { id: "home", label: "Home", icon: "Terminal" },
  { id: "stack", label: "Skills", icon: "Layers" },
  { id: "projects", label: "Projects", icon: "FolderGit2" },
  { id: "experience", label: "Experience", icon: "Briefcase" },
  { id: "certifications", label: "Certs", icon: "Award" },
  { id: "contact", label: "Contact", icon: "Mail" },
];

export const STACK: { label: string; items: string[] }[] = [
  {
    label: "Frontend",
    items: ["React", "JavaScript / TypeScript", "HTML5 & CSS3", "Responsive UI"],
  },
  {
    label: "Backend",
    items: ["Java", "Spring Boot", "Spring Security", "REST APIs", "JWT Auth", "WebSocket (STOMP)"],
  },
  {
    label: "Database & Infra",
    items: ["MySQL", "PostgreSQL", "Redis", "Flyway"],
  },
  {
    label: "Tools & Craft",
    items: ["Figma", "Git & GitHub", "Vercel", "Postman"],
  },
];

export type ProjectItem =
  | { kind: "placeholder" }
  | {
      kind: "project";
      name: string;
      tagline: string;
      file: string;
      desc: string;
      points: string[];
      tech: string[];
      github: string | null;
      live: string | null;
      featured?: boolean;
      accent: "teal" | "violet" | "amber";
    };

export const PROJECTS: ProjectItem[] = [
  {
    kind: "project",
    featured: true,
    accent: "teal",
    name: "TraceBack",
    tagline: "Case management & reporting platform",
    file: "traceback/",
    desc: "Originally built as a missing-persons reporting system at HackIndia 2026, then generalized into a role-based case-management platform with a full paginated REST API behind it.",
    points: [
      "Started as a missing-persons reporting system, later generalized into a role-based case-management platform",
      "Per-IP rate limiting on authentication and case-filing endpoints to harden against abuse",
      "Automatic schema generation replaced with versioned SQL migrations (Flyway), plus a dedicated evidence/photo-upload endpoint",
    ],
    tech: ["React", "Spring Boot", "MySQL", "JWT", "REST API"],
    github: "https://github.com/Gowtham21-prog/traceback-fullstack",
    live: "https://frontend-gowtham-m.vercel.app",
  },
  {
    kind: "project",
    featured: true,
    accent: "violet",
    name: "Chirp",
    tagline: "Real-time messaging platform",
    file: "chirp/",
    desc: "A real-time messaging platform — 1-to-1 chat with live presence and read receipts, plus a Redis-backed anonymous matchmaking engine for interest-based random pairing.",
    points: [
      "Real-time 1-to-1 messaging over STOMP/WebSocket with typing indicators, presence tracking, and read receipts",
      "Redis-backed anonymous matchmaking engine with interest-based pairing and atomic session allocation to prevent race conditions",
      "Secure file sharing via presigned direct-to-object-storage uploads, with JWT-authenticated WebSocket handshakes",
    ],
    tech: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Redis", "WebSocket"],
    github: "https://github.com/Gowtham21-prog/chatapp",
    live: "https://chatapp-xi-tan.vercel.app",
  },
  {
    kind: "project",
    accent: "amber",
    name: "MediFlow",
    tagline: "Healthcare workflow platform",
    file: "mediflow/",
    desc: "A healthcare workflow platform for coordinating patient-care across staff roles, with a structured relational schema for cases and status transitions.",
    points: [
      "Backend service layer coordinating patient-care workflows across staff roles",
      "Structured relational schema for cases and status transitions",
      "React front end for day-to-day clinical and administrative operation on top of a REST API",
    ],
    tech: ["React", "Spring Boot", "REST API"],
    github: "https://github.com/Gowtham21-prog/mediflow",
    live: "https://mediflow-gowtham-m.vercel.app",
  },
  {
    kind: "project",
    accent: "teal",
    name: "Picksy",
    tagline: "Community marketplace for small sellers",
    file: "picksy/",
    desc: "A community marketplace built for small sellers — supporting seller listings, product discovery, and buyer ordering through a dedicated full-stack platform.",
    points: [
      "Seller and buyer workflows built on a REST API backed by a relational product/order schema",
      "React front end with a responsive product catalog and cart-to-order flow",
      "Spring Boot API handling listings, orders, and auth",
    ],
    tech: ["React", "Spring Boot", "MySQL", "REST API"],
    github: "https://github.com/Gowtham21-prog/ecommerce-fullstack",
    live: "https://ecommerce-fullstack-orpin.vercel.app",
  },
  {
    kind: "project",
    accent: "violet",
    name: "SkillForge",
    tagline: "Course marketplace with webhook-driven enrollment",
    file: "skillforge/",
    desc: "A course marketplace where instructors publish courses and students enroll, pay, and track progress — with a real payments flow behind it, not a mock one.",
    points: [
      "Role-based auth (Student / Instructor) with JWT access + refresh token rotation",
      "Real Stripe Checkout with webhook-confirmed enrollment, plus instant enrollment for free courses",
      "Course, enrollment, and review data modeled behind a documented REST API covering 15+ endpoints",
    ],
    tech: ["React", "Spring Boot", "MySQL", "Stripe", "JWT"],
    github: "https://github.com/Gowtham21-prog/elearning-platform",
    live: null,
  },
];

export const EXPERIENCE: {
  date: string;
  title: string;
  org: string;
  desc: string;
}[] = [
  {
    date: "26 Dec 2025 – 09 Jan 2026",
    title: "Frontend Developer Intern",
    org: "OneYes Infotech Solutions Pvt. Ltd.",
    desc: "Completed a Frontend Developer internship program, working on real-world development tasks alongside an engineering team.",
  },
  {
    date: "HackIndia 2026",
    title: "Team Phoenix Warriors — Mailam Engineering College",
    org: "HackIndia",
    desc: "Built a missing-persons reporting system from concept to demo within the hackathon timeframe with 4 teammates — the prototype that later evolved into TraceBack.",
  },
];

export type Cert = {
  name: string;
  issuer: string;
  score: string | null;
  date: string;
  image: string;
  featured?: boolean;
};

export const CERTS: Cert[] = [
  {
    name: "Programming in Java",
    issuer: "NPTEL · IIT Kharagpur",
    score: "83% · Elite",
    date: "Jul – Oct 2025",
    image: "/certs/nptel-java.jpg",
    featured: true,
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    score: "Verified",
    date: "Sep 2025",
    image: "/certs/ccna-completion.jpg",
  },
  {
    name: "Frontend Developer Internship",
    issuer: "OneYes Infotech Solutions",
    score: "Certificate of Excellence",
    date: "Dec 2025 – Jan 2026",
    image: "/certs/oneyes-internship.png",
  },
  {
    name: "HackIndia 2026 — Phoenix Warriors",
    issuer: "HackIndia",
    score: "Participant",
    date: "2026",
    image: "/certs/hackindia-2026.png",
  },
];

export const CONTACT = {
  email: "goww991@gmail.com",
  github: "https://github.com/gowtham21-prog",
  githubLabel: "github.com/gowtham21-prog",
  linkedin: "https://www.linkedin.com/in/gowtham-m-a22416306/",
  linkedinLabel: "linkedin.com/in/gowtham-m",
  portfolio: "https://gowthamportfolio-ten.vercel.app/",
  portfolioLabel: "gowthamportfolio-ten.vercel.app",
  // Drop a resume.pdf into /public and this link will work automatically.
  resume: "/resume.pdf",
  location: "Tamil Nadu, India",
};
