export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'full-stack' | 'backend' | 'ai';
  categoryLabel: string;
  timeline: string;
  technologies: string[];
  overview: string;
  highlights: string[];
  architectureDetails: {
    problemStatement: string;
    systemDesign: string;
    securityAndSafeguards: string;
    keyAchievements: string[];
    endpointsOrComponents?: string[];
  };
  link: string;
  linkText: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  timeline: string;
  techStack: string[];
  achievements: string[];
  link: string;
  badge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  timeline: string;
  score: string;
  scoreType: string;
  highlights?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  focus: string;
  link: string;
  badgeText: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

export const PERSONAL_INFO = {
  name: "Harsh Kamboj",
  initials: "HK",
  title: "Software Engineer | Full-Stack Developer | AI Enthusiast",
  subheading: "Building software. Exploring AI. Solving real problems.",
  heroLabel: "SOFTWARE ENGINEER IN THE MAKING",
  bio: "I'm a Computer Science and Engineering student at UPES, Dehradun, with hands-on experience in full-stack development, backend systems, and AI-powered applications. I enjoy turning complex problems into practical digital experiences.",
  extendedBio: "With practical exposure to authentication, Role-Based Access Control (RBAC), API security testing, and Responsible AI safeguards (including PII masking and prompt-injection defense), I apply a security-first mindset across backend engineering, data workflows, and automation projects. Skilled in translating business and technical requirements into structured documentation and maintainable technology solutions.",
  cgpa: "8.24/10",
  university: "UPES, Dehradun",
  email: "harshkamboj413@gmail.com",
  phone: "+91 9990376004",
  github: "https://github.com/Harsh123-k",
  linkedin: "https://www.linkedin.com/in/hkamboj/",
  location: "Dehradun / Delhi NCR, India",
  profileImage: "/images/harsh-kamboj-portrait.png",
  profileImageRaw: "/images/harsh-kamboj-profile.png",
  resumePath: "/Harsh_Kamboj_Resume.pdf",
};

export const FOCUS_AREAS = [
  {
    title: "Software Engineering & Full-Stack",
    description: "Architecting scalable RESTful APIs, structured MVC systems, robust database schemas, and modern, high-performance responsive web applications.",
    icon: "Layers",
    technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs", "TypeScript", "React"],
    gradient: "from-cyan-500/20 to-blue-600/20",
    borderGlow: "border-cyan-500/30",
  },
  {
    title: "AI, Gen-AI & Intelligent Automation",
    description: "Developing intelligent RAG pipelines, LLM-powered document workflows, and autonomous agents with built-in safeguards like prompt injection defense and PII redaction.",
    icon: "BrainCircuit",
    technologies: ["Claude API", "Python", "LangChain", "LangGraph", "RAG", "Prompt Engineering"],
    gradient: "from-blue-600/20 to-indigo-600/20",
    borderGlow: "border-blue-500/30",
  },
  {
    title: "Product Thinking & User-Centered Systems",
    description: "Bridging technical architecture with real business needs, translating complex requirements into clean API contracts, intuitive workflows, and actionable data analytics.",
    icon: "Workflow",
    technologies: ["Tableau", "Figma", "Swagger/OpenAPI", "Postman", "SDLC", "Technical Docs"],
    gradient: "from-teal-500/20 to-cyan-600/20",
    borderGlow: "border-teal-500/30",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "clinic-mgmt",
    title: "Clinic Front Desk Management System",
    subtitle: "Enterprise Healthcare RESTful Backend & Access Control",
    category: "backend",
    categoryLabel: "Backend & Systems",
    timeline: "June 2026 - July 2026",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "RBAC", "REST APIs", "Swagger/OpenAPI", "Postman"],
    overview: "A database-driven backend application implementing secure RESTful APIs for end-to-end clinic operations, including patient onboarding, doctor availability scheduling, and appointment workflows.",
    highlights: [
      "Engineered MVC architecture with strict separation of concerns across routes, controllers, and service tiers.",
      "Implemented JWT authentication and granular Role-Based Access Control (RBAC) to enforce administrative boundaries.",
      "Designed normalized MongoDB schemas with optimized indexing for doctor availability slots and patient history.",
      "Built, validated, and thoroughly documented comprehensive REST API endpoints using Postman and Swagger/OpenAPI.",
    ],
    architectureDetails: {
      problemStatement: "Clinics often struggle with fragmented appointment bookings, schedule conflicts between rotating doctors, and insecure patient data handling.",
      systemDesign: "Built on Node.js and Express.js using Model-View-Controller patterns. Connects to MongoDB via Mongoose with atomic operations for slot bookings to prevent double-booking race conditions.",
      securityAndSafeguards: "JWT token validation middleware with secret key rotation; Role-Based Access Control ensuring only certified physicians can modify diagnostic notes, and front-desk staff can only view administrative status.",
      keyAchievements: [
        "Zero-conflict scheduling via atomic database lookups.",
        "Interactive Swagger documentation for streamlined client integration.",
        "Strict request body validation and automated error middleware."
      ],
      endpointsOrComponents: [
        "POST /api/auth/login - Multi-role JWT generation",
        "GET /api/doctors/availability - Real-time slot inspection",
        "POST /api/appointments/book - Transaction-safe slot reservation",
        "GET /api/patients/:id/records - RBAC-protected medical file access"
      ]
    },
    link: "https://bit.ly/4aMPqGS",
    linkText: "View Project & Documentation",
    featured: true,
  },
  {
    id: "hr-shortlisting-agent",
    title: "HR Resume & LinkedIn Shortlisting Agent",
    subtitle: "RAG & LLM-Powered Document Intelligence with Responsible AI",
    category: "ai",
    categoryLabel: "AI & Gen-AI",
    timeline: "June 2025 - August 2025",
    technologies: ["Python", "Streamlit", "Claude API", "NLP / LLMs", "RAG", "LangChain", "LangGraph", "Prompt Engineering"],
    overview: "An AI-powered document intelligence application using Python for semantic resume matching, structured information extraction, and automated candidate shortlisting with rigorous Responsible AI safeguards.",
    highlights: [
      "Built a Retrieval-Augmented Generation (RAG) pipeline to semantically compare candidate profiles against job specifications.",
      "Implemented Responsible AI safeguards including prompt-injection protection and automatic PII masking to protect candidate privacy.",
      "Leveraged Claude API and structured prompt engineering to extract verifiable skills, experience levels, and evaluation rubrics.",
      "Created an interactive Streamlit UI for recruitment teams to rank candidates, visualize match confidence, and inspect rationale.",
    ],
    architectureDetails: {
      problemStatement: "High-volume recruitment creates evaluation bottlenecks while naive LLM usage risks leaking Personally Identifiable Information (PII) and vulnerability to prompt injection attacks embedded in applicant resumes.",
      systemDesign: "Streamlit frontend communicating with a Python orchestration layer. Resumes are parsed, sanitized, split into semantic chunks, vectorized, and matched against job description rubrics via Claude API.",
      securityAndSafeguards: "Dual-tier security: (1) Regex and NLP-based PII redaction (masking phone numbers, home addresses, government IDs) before sending tokens to LLMs; (2) Boundary and sandwich defense prompt structures preventing injected candidate instructions from overriding evaluation rubrics.",
      keyAchievements: [
        "Accurate semantic matching going far beyond keyword frequency matching.",
        "Zero data leakage of sensitive candidate contact identifiers during LLM processing.",
        "Transparent, explainable shortlisting summaries for hiring managers."
      ],
      endpointsOrComponents: [
        "Pipeline: Document Ingestion -> PII Redaction -> Semantic Chunking",
        "Safeguards: Injection Detection -> Sanitization Layer",
        "Inference: Claude API Evaluation -> Structured JSON Extraction",
        "Dashboard: Streamlit Scoring UI with Interactive Filters"
      ]
    },
    link: "https://bit.ly/4fumeY7",
    linkText: "View AI Workflow Details",
    featured: true,
  },
  {
    id: "workforce-ai",
    title: "The WorkForce AI Platform",
    subtitle: "Enterprise Workforce Automation & Operational Analytics",
    category: "full-stack",
    categoryLabel: "Full-Stack & APIs",
    timeline: "June 2026 - August 2026",
    technologies: ["Node.js", "Express.js", "MongoDB", "Tableau", "Figma", "Antigravity", "REST APIs", "Debugging"],
    overview: "Developed and maintained scalable backend APIs and business workflow automation for The WorkForce AI platform during internship at Xebia, supporting reliable enterprise operations and data visualization.",
    highlights: [
      "Developed and optimized scalable backend APIs and automated business workflows using Node.js, Express.js, and MongoDB.",
      "Assisted in full-lifecycle debugging, unit testing, and technical documentation contributing to high-availability deployment.",
      "Created workflow automation and operational data visualization dashboards using Tableau for data-driven management reporting.",
      "Collaborated on UX and workflow wireframes in Figma to ensure tight alignment between engineering and product goals.",
    ],
    architectureDetails: {
      problemStatement: "Large organizations require automated workforce operational tracking, schedule optimization, and executive visibility without manual spreadsheets.",
      systemDesign: "Microservices-ready Express backend integrated with MongoDB. Data export pipelines feed analytical datasets into Tableau dashboards for department heads.",
      securityAndSafeguards: "Secure token verification, sanitized database inputs, robust error-handling middleware, and structured logging for audit tracking.",
      keyAchievements: [
        "Streamlined business workflow automation reducing manual data entry overhead.",
        "Authored clear technical documentation and API specifications for internal teams.",
        "Delivered intuitive Tableau visual reports supporting leadership decision-making."
      ],
      endpointsOrComponents: [
        "REST APIs for employee operational tracking and scheduling",
        "Data pipeline for Tableau analytics aggregation",
        "Automated validation middleware for business operations"
      ]
    },
    link: "http://bit.ly/4f5Pdjq",
    linkText: "View Internship Experience Details",
    featured: true,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "xebia",
    role: "Full Stack Developer Intern",
    company: "Xebia",
    location: "Delhi, India",
    timeline: "June 2026 - August 2026",
    techStack: ["Node.js", "Express.js", "MongoDB", "Tableau", "Figma", "Antigravity", "Deployment"],
    achievements: [
      "Developed and maintained scalable backend APIs and business workflow automation for The WorkForce AI platform using Node.js, Express.js, and MongoDB.",
      "Supported application development, debugging, testing, process improvement, and technical documentation contributing to reliable and maintainable technology solutions.",
      "Contributed to workflow automation and data visualization initiatives using Tableau, supporting data-driven insights and technology-focused reporting.",
      "Collaborated within cross-functional teams to align design specifications in Figma with backend data contracts and deployment workflows.",
    ],
    link: "http://bit.ly/4f5Pdjq",
    badge: "Full-Stack & Automation",
  },
  {
    id: "ultimez",
    role: "Backend Developer Intern",
    company: "Ultimez Technology Private Limited",
    location: "Hubballi, Karnataka, India",
    timeline: "June 2026 - July 2026",
    techStack: ["Java", "Node.js", "Express.js", "MongoDB", "JWT Auth", "RBAC", "Swagger", "Postman"],
    achievements: [
      "Engineered scalable RESTful backend services using Node.js, Express.js, and MongoDB following MVC architecture and software engineering best practices.",
      "Implemented JWT authentication and Role-Based Access Control (RBAC) to strengthen secure access, token validation, and authorization across the backend.",
      "Designed database schemas with focus on data consistency, maintainability, index optimization, and high performance.",
      "Developed, tested, debugged, and documented REST APIs using Postman and Swagger/OpenAPI for seamless team integration.",
    ],
    link: "https://bit.ly/4wIAylJ",
    badge: "Backend & Security",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core languages used for backend systems, AI scripting, and software engineering",
    skills: [
      { name: "Python", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "Java", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "SQL", highlight: true },
      { name: "HTML5" },
      { name: "CSS3" },
    ]
  },
  {
    category: "Backend & Systems",
    description: "Server architecture, API standards, and authentication protocols",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "RESTful APIs", highlight: true },
      { name: "MVC Architecture", highlight: true },
      { name: "JWT Authentication", highlight: true },
      { name: "Role-Based Access Control (RBAC)", highlight: true },
      { name: "Authentication & Authorization" },
      { name: "System Design Principles" },
    ]
  },
  {
    category: "AI, Gen-AI & Data Intelligence",
    description: "Generative AI, LLM orchestration, and Responsible AI safeguards",
    skills: [
      { name: "Retrieval-Augmented Generation (RAG)", highlight: true },
      { name: "Large Language Models (LLMs)", highlight: true },
      { name: "Claude API", highlight: true },
      { name: "LangChain", highlight: true },
      { name: "LangGraph", highlight: true },
      { name: "Prompt Engineering", highlight: true },
      { name: "PII Masking & Privacy", highlight: true },
      { name: "Prompt-Injection Defense", highlight: true },
      { name: "NLP Techniques" },
    ]
  },
  {
    category: "Databases & Storage",
    description: "Relational, document, and vector database technologies",
    skills: [
      { name: "MongoDB", highlight: true },
      { name: "MySQL", highlight: true },
      { name: "PostgreSQL", highlight: true },
      { name: "Vector Databases", highlight: true },
      { name: "Database Schema Design" },
      { name: "Query Optimization" },
    ]
  },
  {
    category: "Testing, Tools & DevOps",
    description: "Quality assurance, API testing, version control, and infrastructure",
    skills: [
      { name: "Postman", highlight: true },
      { name: "Swagger / OpenAPI", highlight: true },
      { name: "Git & GitHub", highlight: true },
      { name: "AWS Cloud" },
      { name: "CI/CD Pipelines", highlight: true },
      { name: "API Testing & Debugging" },
      { name: "Vercel" },
      { name: "Antigravity" },
    ]
  },
  {
    category: "Data & Product Tools",
    description: "Data analysis, reporting dashboards, and interface wireframing",
    skills: [
      { name: "Tableau", highlight: true },
      { name: "Pandas & NumPy", highlight: true },
      { name: "Data Visualization" },
      { name: "Exploratory Data Analysis (EDA)" },
      { name: "Figma" },
      { name: "Technical Documentation", highlight: true },
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "University of Petroleum and Energy Studies (UPES)",
    location: "Dehradun, Uttarakhand, India",
    timeline: "July 2023 - Present",
    score: "8.24 / 10",
    scoreType: "CGPA",
    highlights: [
      "Specialized in full-stack backend engineering, security protocols, and intelligent AI workflows.",
      "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks, Software Engineering.",
      "Active participant in technical projects and industry-aligned developer initiatives.",
    ],
  },
  {
    degree: "Class XII - Senior Secondary (CBSE)",
    institution: "Scholars Indian School",
    location: "Ras Al Khaimah, UAE",
    timeline: "April 2022 - May 2023",
    score: "80.5%",
    scoreType: "Percentage",
    highlights: [
      "Rigorous science and mathematics curriculum with foundation in algorithmic reasoning.",
      "International academic environment fostering cross-cultural collaboration.",
    ],
  },
  {
    degree: "Class X - Secondary School (ICSE)",
    institution: "Modern Academy Sr. Sec. School",
    location: "Ghaziabad, Uttar Pradesh, India",
    timeline: "April 2020 - May 2021",
    score: "92.0%",
    scoreType: "Percentage",
    highlights: [
      "Achieved distinction with 92% across all subjects.",
      "Strong foundation in logical sciences, mathematics, and analytical problem solving.",
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "AWS Certification",
    issuer: "Amazon Web Services",
    focus: "Cloud Computing, Scalable Infrastructure, AWS Core Services",
    link: "https://drive.google.com/file/d/1tlJkQbU5jXwt2o37jPT7VWqwUTFcp3i_/view?usp=sharing",
    badgeText: "Cloud Architecture",
  },
  {
    title: "B.U.I.L.D — Building Reliable Infrastructure & Deployment",
    issuer: "Global Deployment Standard",
    focus: "Global Environments, Automated CI/CD Pipelines, High Reliability",
    link: "https://drive.google.com/file/d/1CUNNuVx5_GT2qqt7uwr9WQdTV-wXYdjz/view?usp=sharing",
    badgeText: "CI/CD & DevOps",
  },
  {
    title: "Generative AI Fundamentals",
    issuer: "AI Industry Standard",
    focus: "LLMs, Prompt Engineering, Transformer Architectures, AI Ethics",
    link: "https://drive.google.com/file/d/1p-knvQQd0BIvFWKBjcK7KT7yHxK0BcRl/view?usp=sharing",
    badgeText: "Gen-AI & LLMs",
  },
];
