export interface SocialLink {
  platform: string
  url: string
  label: string
}

export interface Experience {
  id: string
  company: string
  role: string
  type: string
  location: string
  startDate: string
  endDate: string
  duration: string
  highlights: string[]
  technologies: string[]
}

export interface Project {
  id: string
  name: string
  description: string
  highlights: string[]
  technologies: string[]
  fromExperience: string
}

export interface Education {
  institution: string
  degree: string
  major: string
  gpa: string
  startDate: string
  endDate: string
  coursework: string[]
}

export interface Organization {
  name: string
  role: string
  period: string
  highlights: string[]
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface Stat {
  label: string
  value: string
}

export interface PortfolioData {
  personal: {
    name: string
    firstName: string
    title: string
    location: string
    summary: string
    tagline: string
    email: string
    phone: string
    socialLinks: SocialLink[]
  }
  experience: Experience[]
  projects: Project[]
  education: Education
  organization: Organization
  skills: SkillCategory[]
  stats: Stat[]
}

export const data: PortfolioData = {
  personal: {
    name: "Nur Fajar Sayyidul Ayyam",
    firstName: "Fajar",
    title: "Full Stack Developer",
    location: "Jakarta, Indonesia",
    summary:
      "Nearly 2 years of experience in full-stack development, building scalable information systems across enterprise, startup, and university environments using modern web technologies, with a proven track record of translating business needs into scalable and impactful technical solutions.",
    tagline:
      "Building scalable systems across enterprise, startup & university environments.",
    email: "nur.fajarsa@gmail.com",
    phone: "(+62) 855-5941-4940",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/nurfajar",
        label: "nurfajar",
      },
      {
        platform: "GitHub",
        url: "https://github.com/nurfajar",
        label: "nurfajar",
      },
      {
        platform: "Email",
        url: "mailto:nur.fajarsa@gmail.com",
        label: "nur.fajarsa@gmail.com",
      },
    ],
  },

  experience: [
    {
      id: "ui",
      company: "Universitas Indonesia",
      role: "Full Stack Developer",
      type: "Contract",
      location: "Depok, ID",
      startDate: "Jan 2026",
      endDate: "Present",
      duration: "",
      highlights: [
        "Migrated Global Mobility Information System from PHP to Nuxt (Vue) and Golang, improving performance and reducing security risks in international mobility management.",
        "Containerized application using Docker to improve deployment consistency and scalability across environments.",
        "Collaborated closely with end users to align system solutions with operational needs and ensure GDPR compliance through secure data handling and access control.",
      ],
      technologies: ["Nuxt", "Vue", "Golang", "Docker", "PostgreSQL"],
    },
    {
      id: "apple",
      company: "Apple Developer Academy @BINUS",
      role: "Software Engineering Apprenticeship",
      type: "Part-time",
      location: "BSD, ID",
      startDate: "Mar 2025",
      endDate: "Dec 2025",
      duration: "10 months",
      highlights: [
        "Developed GlugGlug, a water reminder iOS app integrating HealthKit and UserNotification, ensuring efficient local data handling and background scheduling.",
        "Implemented Reforestation Saga, a casual iOS game utilizing the Apple Vision Framework for blink-based interaction, applying a component-based game architecture.",
        "Delivered functional prototypes used in user testing and internal demo presentations.",
        "Collaborated with cross-functional teams of product managers, designers, and engineers to deliver functional prototypes under tight deadlines.",
      ],
      technologies: ["Swift", "SwiftUI", "HealthKit", "Vision Framework"],
    },
    {
      id: "analitica",
      company: "Analitica.id",
      role: "Full Stack Developer",
      type: "Part-time",
      location: "Remote",
      startDate: "Jul 2024",
      endDate: "Aug 2025",
      duration: "1 year",
      highlights: [
        "Developed an internal management system that streamlined the planning and coordination of 90+ events, improving operational efficiency and team visibility.",
        "Built an affiliate management system that supported 50+ active affiliates and enabled the business to track performance and commissions, contributing to 200M+ IDR in revenue.",
        "Collaborated with AI engineers to enhance ICA, Analitica's AI chatbot, by designing a structured knowledge-management framework that improved response accuracy.",
      ],
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL"],
    },
    {
      id: "pxshredder",
      company: "PX Shredder",
      role: "Backend Engineer",
      type: "Freelance",
      location: "Remote",
      startDate: "Jul 2024",
      endDate: "Aug 2024",
      duration: "2 months",
      highlights: [
        "Developed and maintained the transaction service for an accounting software system within a monolithic architecture, ensuring reliable processing and data integrity.",
        "Implemented the MVC architecture using Java Quarkus and PostgreSQL, designing RESTful APIs to handle transaction creation, validation, and reporting.",
      ],
      technologies: ["Java", "Quarkus", "PostgreSQL", "REST API"],
    },
  ],

  projects: [
    {
      id: "glugglug",
      name: "GlugGlug",
      description:
        "A water reminder iOS app integrating HealthKit and UserNotification for efficient local data handling and background scheduling.",
      highlights: [
        "HealthKit integration for health data sync",
        "Background notification scheduling",
        "Local data persistence",
      ],
      technologies: ["Swift", "SwiftUI", "HealthKit", "UserNotification"],
      fromExperience: "apple",
    },
    {
      id: "reforestation-saga",
      name: "Reforestation Saga",
      description:
        "A casual iOS game utilizing Apple Vision Framework for blink-based interaction with a component-based game architecture.",
      highlights: [
        "Apple Vision Framework for blink detection",
        "Component-based game architecture",
        "Reusable and maintainable codebase",
      ],
      technologies: ["Swift", "SpriteKit", "Vision Framework"],
      fromExperience: "apple",
    },
    {
      id: "event-management",
      name: "Event Management System",
      description:
        "Internal management system that streamlined planning and coordination of 90+ events at Analitica.id.",
      highlights: [
        "Streamlined coordination for 90+ events",
        "Improved operational efficiency",
        "Enhanced team visibility and planning",
      ],
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL"],
      fromExperience: "analitica",
    },
    {
      id: "affiliate-system",
      name: "Affiliate Management System",
      description:
        "System supporting 50+ active affiliates with performance tracking and commission management, contributing to 200M+ IDR in revenue.",
      highlights: [
        "50+ active affiliates managed",
        "Performance & commission tracking",
        "Contributed to 200M+ IDR revenue",
      ],
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL"],
      fromExperience: "analitica",
    },
    {
      id: "ica-chatbot",
      name: "ICA - AI Chatbot",
      description:
        "Enhanced Analitica's AI chatbot by designing a structured knowledge-management framework for improved response accuracy.",
      highlights: [
        "Knowledge-management framework design",
        "Improved response accuracy",
        "Contextual relevance enhancement",
      ],
      technologies: ["Python", "AI/ML", "NLP"],
      fromExperience: "analitica",
    },
    {
      id: "transaction-service",
      name: "Transaction Service",
      description:
        "Transaction service for an accounting software system with reliable processing and data integrity across modules.",
      highlights: [
        "RESTful API design",
        "Transaction creation, validation, and reporting",
        "MVC architecture implementation",
      ],
      technologies: ["Java", "Quarkus", "PostgreSQL", "REST API"],
      fromExperience: "pxshredder",
    },
  ],

  education: {
    institution: "University of Indonesia",
    degree: "Bachelor of Computer Science",
    major: "Information System",
    gpa: "3.60/4.00",
    startDate: "Aug 2021",
    endDate: "Jul 2025",
    coursework: [
      "Platform Based Programming",
      "Data Structures & Algorithm",
      "Databases",
      "Enterprise Application Programming",
      "Information Systems Analysis and Design",
      "Information Systems Development Project",
    ],
  },

  organization: {
    name: "BEM Fasilkom UI",
    role: "Vice President",
    period: "Mar 2024 - Feb 2025",
    highlights: [
      "Led 150+ members across 10 departments, delivering university-wide initiatives impacting 1,800+ students.",
      "Drove strategic planning, prioritization, and performance alignment between teams.",
    ],
  },

  skills: [
    {
      category: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Node.js", "Spring Boot", "Nuxt", "Vue"],
    },
    {
      category: "Programming Languages",
      skills: ["Java", "JavaScript", "TypeScript", "Golang", "Python", "Swift"],
    },
    {
      category: "Database",
      skills: ["MySQL", "PostgreSQL"],
    },
    {
      category: "Architecture & API",
      skills: ["RESTful API", "Microservices", "MVC"],
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "Docker", "Google Cloud Platform"],
    },
  ],

  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Events Managed", value: "90+" },
    { label: "Affiliate Revenue", value: "200M+" },
    { label: "University GPA", value: "3.60" },
  ],
}
