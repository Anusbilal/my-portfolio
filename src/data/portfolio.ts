export type TextPart = {
  text: string;
  tone?: "strong" | "accent" | "underline" | "mark";
};

export type Skill = {
  label: string;
  value: number;
  color: string;
  description: string;
  logo: string;
  spin?: boolean;
  icon?: "monitor";
};

export type Service = {
  title: string;
  description: string;
  icon: "monitor" | "layout" | "phone" | "code" | "cpu" | "brain" | "shop";
};

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tags: string[];
};

export type Testimonial = {
  image: string;
  quote: string;
  author: string;
  role: string;
};

export type SocialLink = {
  name: string;
  url: string;
  gradient: string;
  shadow: string;
  rotation: string;
  hoverRotation: string;
  offsetClass: string;
  hoverOffsetClass: string;
  zIndex: string;
  previewUrl: string;
  action: string;
  headline: string;
  detail: string;
};

export const portfolio = {
  name: "Muhammad Anus",
  logoMark: "M",
  brand: "Anus",
  brandSuffix: ".dev",
  title: "Full Stack Developer & Mobile Developer",
  roles: ["Full Stack Developer", "Mobile Developer", "MERN Specialist"],
  availability: "Available for New Projects",
  greeting: "Hello, I'm",
  heroIntro: [
    { text: "Full Stack Developer specializing in the " },
    { text: "MERN stack", tone: "strong" },
    { text: ". I build scalable web applications, REST and GraphQL APIs, dashboards, and modern interfaces, and I develop cross-platform mobile apps with " },
    { text: "React Native", tone: "strong" },
    { text: " for Android and iOS." },
  ] satisfies TextPart[],
  photo: "/images/profile.jpg",
  photoBadge: "Full Stack Dev",
  photoLocation: "MERN Stack Specialist",
  resumeUrl: "/Muhammad-Anus-CV.pdf",
  resumeFileName: "Muhammad Anus CV.pdf",
  email: "anusbilal17@gmail.com",
  phone: "03130106054",
  phoneHref: "tel:03130106054",
  location: "Karachi, Pakistan",
  formEndpoint: "https://formsubmit.co/ajax/anusbilal17@gmail.com",
  nav: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  aboutEyebrow: "Expertise",
  aboutTitleLead: "About",
  aboutTitleAccent: "Me.",
  aboutName: "Muhammad Anus",
  aboutRole: "Full Stack Developer",
  years: "4+",
  yearsLabel: "Years Exp.",
  aboutHeadline: [
    { text: "Building " },
    { text: "Scalable", tone: "mark" },
    { text: " Products " },
    { text: "\n" },
    { text: "for Web and Mobile." },
  ] satisfies TextPart[],
  aboutParagraphs: [
    [
      { text: "I am a " },
      { text: "Full Stack Developer", tone: "strong" },
      { text: " specializing in the MERN stack. I work with " },
      { text: "React, Next.js, Node.js, Express.js, MongoDB, REST, and GraphQL", tone: "underline" },
      { text: " to build scalable, secure, and user-friendly web applications, with a focus on clean architecture and performance." },
    ],
    [
      { text: "I also develop cross-platform mobile apps with " },
      { text: "React Native", tone: "strong" },
      { text: " for Android and iOS. Since January 2023 I have worked as a Full Stack Developer at " },
      { text: "Wide Dimension", tone: "strong" },
      { text: ", delivering 10+ web applications, reusable React and Next.js interfaces, and APIs with JWT authentication and role-based access." },
    ],
    [
      {
        text: "I use MongoDB and Firebase, integrate third-party services including Shopify GraphQL, and add real-time features and notifications. I enjoy turning complex business requirements into reliable, maintainable products.",
      },
    ],
  ] satisfies TextPart[][],
  stats: [
    { value: "4+", label: "Years Experience" },
    { value: "10+", label: "Apps Delivered" },
    { value: "MERN", label: "Primary Stack" },
  ],
  skillsEyebrow: "Core Technical",
  skillsAccent: "Skills",
  skillsNote:
    "Interactive visualization of my technical stack. Click any skill on the wheel to rotate and focus.",
  skills: [
    {
      label: "Node.js",
      value: 86,
      color: "#339933",
      description: "Server-side JavaScript for APIs, authentication, and application services.",
      logo: "/images/node.svg",
    },
    {
      label: "Express.js",
      value: 82,
      color: "#94a3b8",
      description: "HTTP APIs with routing, middleware, and authenticated endpoints.",
      logo: "/images/express.svg",
    },
    {
      label: "MongoDB",
      value: 84,
      color: "#47A248",
      description: "Document data models and queries, including Mongoose in production apps.",
      logo: "/images/mongodb.svg",
    },
    {
      label: "Firebase",
      value: 86,
      color: "#FFCA28",
      description: "Authentication, Firestore, Cloud Functions, and hosted app backends.",
      logo: "/images/firebase.svg",
    },
    {
      label: "Next.js",
      value: 88,
      color: "#64748b",
      description: "App Router applications, API routes, and server-rendered product sites.",
      logo: "/images/next.png",
    },
    {
      label: "React.js",
      value: 92,
      color: "#61dafb",
      description: "Component-based interfaces, hooks, and reusable UI for web applications.",
      logo: "/images/react.svg",
      spin: true,
    },
    {
      label: "React Native",
      value: 90,
      color: "#61dafb",
      description: "Cross-platform Android and iOS apps with navigation, local storage, and device APIs.",
      logo: "/images/react-native.svg",
    },
    {
      label: "Tailwind CSS",
      value: 88,
      color: "#38bdf8",
      description: "Utility-first layouts and responsive interfaces in React and Next.js projects.",
      logo: "/images/tailwind.png",
    },
    {
      label: "TypeScript",
      value: 90,
      color: "#3178c6",
      description: "Typed React, Next.js, and React Native codebases.",
      logo: "/images/typescript.png",
    },
    {
      label: "REST APIs",
      value: 86,
      color: "#10b981",
      description: "REST API design and client integration with Axios, including authenticated requests.",
      logo: "/images/api.png",
    },
    {
      label: "GraphQL",
      value: 78,
      color: "#e10098",
      description: "GraphQL APIs in product work, including the Shopify GraphQL API.",
      logo: "/images/graphql.svg",
    },
    {
      label: "JWT",
      value: 84,
      color: "#818cf8",
      description: "Token authentication and role-based access in web and mobile apps.",
      logo: "/images/jwt.svg",
    },
    {
      label: "Zustand",
      value: 82,
      color: "#f97316",
      description: "Client state for React Native apps, including inventory and nutrition products.",
      logo: "/images/zustand.svg",
    },
    {
      label: "React Query",
      value: 84,
      color: "#ff4154",
      description: "Server-state caching and data fetching in web and React Native apps.",
      logo: "/images/react-query.svg",
    },
  ] satisfies Skill[],
  servicesEyebrow: "My Offerings",
  servicesTitle: "Specialized",
  servicesAccent: "Services.",
  services: [
    {
      title: "Web Development",
      description: "Building high-performance apps with React & Next.js.",
      icon: "code",
    },
    {
      title: "App Development",
      description: "Turning complex ideas into functional mobile and web apps.",
      icon: "cpu",
    },
    {
      title: "AI Deep Learning",
      description: "Building intelligent features with deep learning and modern AI models.",
      icon: "brain",
    },
    {
      title: "Shopify Development",
      description: "Building Shopify storefronts and GraphQL integrations for products, orders, and inventory.",
      icon: "shop",
    },
  ] satisfies Service[],
  projectsEyebrow: "Portfolio",
  projectsTitle: "Selected",
  projectsAccent: "Works.",
  projects: [
    {
      title: "ExecFleet",
      description:
        "Fleet platform for companies, drivers, vehicles, routes, and rides, with sign-in, admin tools, and documented APIs.",
      image: "",
      link: "https://execfleet-web.vercel.app/sign-in",
      github: "https://github.com/Anusbilal/excefleet",
      tags: ["Next.js", "MongoDB", "JWT", "TypeScript"],
    },
    {
      title: "NeedNet",
      description:
        "Restaurant and rider platform for registration, task assignment, and delivery history.",
      image: "",
      link: "https://neednet-4b9b4.web.app/",
      github: "https://github.com/Anusbilal/neednet-project",
      tags: ["React", "Firebase", "Tailwind", "TypeScript"],
    },
    {
      title: "She Beauty",
      description: "Inventory management system for She Beauty, with a sign-in portal.",
      image: "",
      link: "https://she-beauty-erp.netlify.app",
      github: "",
      tags: ["Next.js", "TypeScript"],
    },
    {
      title: "Divine Marvels",
      description:
        "Islamic knowledge platform for the Quran, duas, hadiths, tafsir, prophet stories, and a shop.",
      image: "",
      link: "https://divine-marvels.netlify.app/",
      github: "",
      tags: ["React", "Tailwind", "React Query", "TypeScript"],
    },
    {
      title: "SafePhone",
      description:
        "Mobile device management platform with role-based access for owners, distributors, retailers, and customers, plus IMEI tracking and remote controls.",
      image: "",
      link: "https://safephone.netlify.app/",
      github: "",
      tags: ["Next.js", "Tailwind", "React Query", "TypeScript"],
    },
    {
      title: "Wide ERP",
      description:
        "Sales and inventory ERP using Shopify GraphQL to sync products, orders, and stock, with vendors, billing, and role-based access.",
      image: "",
      link: "https://wide-erp.netlify.app",
      github: "",
      tags: ["Shopify", "GraphQL", "TypeScript"],
    },
    {
      title: "Screenwich",
      description:
        "Stock picking platform for market indexes, company search, and top gainers and losers.",
      image: "",
      link: "https://screenwich.netlify.app/",
      github: "",
      tags: ["Next.js", "Tailwind", "React Query", "TypeScript"],
    },
    {
      title: "Zap Utilities",
      description: "Utility app with a calculator, clock, unit converter, and weather.",
      image: "",
      link: "https://zap-functionalities.netlify.app",
      github: "https://github.com/Anusbilal/zap",
      tags: ["React", "Tailwind", "TypeScript"],
    },
    {
      title: "Prod Snap",
      description:
        "Product landing page with a photo-to-store section, feature blocks, and a published demo.",
      image: "",
      link: "https://prod-snap.netlify.app",
      github: "https://github.com/Anusbilal/prod-snap",
      tags: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Wide Inventory",
      description:
        "Inventory app for products, stores, users, and stock activity, built for Android and iOS.",
      image: "",
      link: "https://github.com/Anusbilal/inventory-system",
      github: "https://github.com/Anusbilal/inventory-system",
      tags: ["React Native", "Zustand", "TypeScript"],
    },
    {
      title: "Gourmet Glow",
      description:
        "Nutrition app for meal scanning, food search, diary logging, progress, and notifications on Android and iOS.",
      image: "",
      link: "https://github.com/Anusbilal/Gourment-Glow-AI",
      github: "https://github.com/Anusbilal/Gourment-Glow-AI",
      tags: ["React Native", "Firebase", "TypeScript"],
    },
    {
      title: "Wide Dimension",
      description:
        "Company website with services, pricing, project pages, and a contact form.",
      image: "",
      link: "https://github.com/Anusbilal/WD-official-Website",
      github: "https://github.com/Anusbilal/WD-official-Website",
      tags: ["Next.js", "TypeScript", "Tailwind"],
    },
  ] satisfies Project[],
  testimonialsEyebrow: "Testimonials",
  testimonialsTitle: "Feedback",
  testimonialsAccent: "",
  testimonials: [
    {
      image: "",
      quote: "Great developer, highly recommended.",
      author: "Owais ul wara",
      role: "CEO of Wide Dimension",
    },
    {
      image: "",
      quote: "The final deliverable has never disappointed us.",
      author: "Owais ul wara",
      role: "CEO of Wide Dimension",
    },
    {
      image: "",
      quote:
        "Quick to respond, cooperative, and professional, with a bug-free delivery and strong code expertise.",
      author: "Owais ul wara",
      role: "CEO of Wide Dimension",
    },
    {
      image: "",
      quote:
        "Anus Bilal delivered the She Beauty inventory system smoothly. It met every expectation and ran without a single bug.",
      author: "Owais ul wara",
      role: "CEO of Wide Dimension",
    },
    {
      image: "",
      quote: "Dedication and contributions played a significant role in reaching an important milestone for Divine Marvels.",
      author: "Owais ul wara",
      role: "CEO of Wide Dimension",
    },
  ] satisfies Testimonial[],
  findMeTitle: "Find Me On",
  findMeRole: "Full Stack Developer",
  socials: [
    {
      name: "Gmail",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=anusbilal17@gmail.com",
      gradient: "from-[#EA4335] to-[#c0392b]",
      shadow: "hover:shadow-[#EA4335]/40",
      rotation: "-rotate-12 lg:-rotate-[20deg]",
      hoverRotation: "hover:-rotate-3 lg:hover:-rotate-[20deg]",
      offsetClass:
        "-translate-x-[88px] translate-y-6 sm:-translate-x-[250px] lg:-translate-x-[360px] lg:translate-y-12",
      hoverOffsetClass:
        "hover:-translate-y-16 hover:-translate-x-[88px] sm:hover:-translate-x-[250px] lg:hover:-translate-x-[360px]",
      zIndex: "z-10",
      previewUrl: "mail.google.com",
      action: "Compose Email",
      headline: "anusbilal17@gmail.com",
      detail: "Send an email directly.",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anus-bilal-932797265/",
      gradient: "from-[#2980b9] to-[#3498db]",
      shadow: "hover:shadow-[#3498db]/40",
      rotation: "-rotate-6 lg:-rotate-[10deg]",
      hoverRotation: "hover:-rotate-2 lg:hover:-rotate-[4deg]",
      offsetClass:
        "-translate-x-[46px] translate-y-3 sm:-translate-x-[130px] lg:-translate-x-[180px] lg:translate-y-6",
      hoverOffsetClass:
        "hover:-translate-y-16 hover:-translate-x-[46px] sm:hover:-translate-x-[130px] lg:hover:-translate-x-[180px]",
      zIndex: "z-20",
      previewUrl: "linkedin.com/in/anus-bilal-932797265",
      action: "Connect",
      headline: "Muhammad Anus",
      detail: "Full Stack Developer",
    },
    {
      name: "GitHub",
      url: "https://github.com/Anusbilal",
      gradient: "from-[#2c3e50] to-[#1a252f]",
      shadow: "hover:shadow-[#34495e]/40",
      rotation: "rotate-0",
      hoverRotation: "hover:rotate-0",
      offsetClass: "translate-y-0",
      hoverOffsetClass: "hover:-translate-y-16",
      zIndex: "z-30",
      previewUrl: "github.com/Anusbilal",
      action: "Public",
      headline: "excefleet",
      detail: "Next.js fleet platform",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/923130106054",
      gradient: "from-[#128c7e] to-[#25d366]",
      shadow: "hover:shadow-[#25d366]/40",
      rotation: "rotate-6 lg:rotate-[10deg]",
      hoverRotation: "hover:rotate-2 lg:hover:rotate-[4deg]",
      offsetClass:
        "translate-x-[46px] translate-y-3 sm:translate-x-[130px] lg:translate-x-[180px] lg:translate-y-6",
      hoverOffsetClass:
        "hover:-translate-y-16 hover:translate-x-[46px] sm:hover:translate-x-[130px] lg:hover:translate-x-[180px]",
      zIndex: "z-20",
      previewUrl: "wa.me/923130106054",
      action: "Chat Now",
      headline: "Direct Message",
      detail: "Available for project inquiries.",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/anusbilal.bilal.3",
      gradient: "from-[#2c3e50] to-[#34495e]",
      shadow: "hover:shadow-[#34495e]/40",
      rotation: "rotate-12 lg:rotate-[20deg]",
      hoverRotation: "hover:rotate-3 lg:hover:rotate-[6deg]",
      offsetClass:
        "translate-x-[88px] translate-y-6 sm:translate-x-[250px] lg:translate-x-[360px] lg:translate-y-12",
      hoverOffsetClass:
        "hover:-translate-y-16 hover:translate-x-[88px] sm:hover:translate-x-[250px] lg:hover:translate-x-[360px]",
      zIndex: "z-10",
      previewUrl: "facebook.com/anusbilal.bilal.3",
      action: "Follow",
      headline: "Muhammad Anus",
      detail: "Full Stack Developer",
    },
  ] satisfies SocialLink[],
  contactEyebrow: "Get In Touch",
  contactTitle: "Let's Work",
  contactAccent: "Together.",
  contactCopy:
    "Have a project in mind? Looking for a full stack or mobile developer to join your team? Or just want to say hi? I'm always open to discussing new opportunities.",
  footerCredit: "@Muhammad Anus",
  footerRole: "Full Stack Developer & Mobile Developer",
  linkedinBlurb: "Full stack and mobile products with the MERN stack and React Native.",
  githubUser: "Anusbilal",
  githubStars: "",
};
