import type { Translation } from "./types";

export const en: Translation = {
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    available: "Available for missions",
    tagline: "Senior .NET Developer · Fullstack",
    greeting: "Hi, I'm",
    description:
      "Senior .NET Developer with 8+ years of experience designing and building robust, scalable software solutions. Specialized in the .NET ecosystem (C#, ASP.NET Core), microservices architecture, business workflows, and data integration.",
    contactMe: "Contact Me",
    viewProjects: "View Projects",
    downloadCV: "Download CV",
  },
  about: {
    title: "About Me",
    p1: "Through missions at Harvest, Uniformation, Europ Assistance, Veolia and Total, I've built deep expertise in .NET development, architectural redesign, workflow management, and performance optimization.",
    p2: "I place code quality, maintainability, and client satisfaction at the heart of every project. My focus: robust, scalable, and well-documented .NET solutions.",
    contact: "Contact",
  },
  skills: {
    title: "Skills & Expertise",
    categories: {
      backend: "Back-end Development",
      frontend: "Front-end Development",
      devops: "Databases",
      quality: "Tools & DevOps",
      soft: "Soft Skills",
    },
  },
  experience: {
    title: "Experience",
    present: "Present",
    roles: {
      "Harvest (AXA / Generali)": ".NET Core Consultant",
      "Uniformation": ".NET Core Consultant",
      "Europ Assistance": ".NET Core / SSIS Consultant",
      "SIACI Assurance": "Fullstack Developer",
      "Veolia": "Fullstack Developer",
      "Tubozer": ".NET Core / Angular Developer",
      "Total": ".NET Developer",
    },
  },
  projects: {
    title: "Featured Projects",
    items: [
      {
        title: "Harvest - AXA / Generali Architecture Redesign",
        description:
          "Migration of a business process management application from a monolithic to an n-tier (microservices) architecture. View pre-compilation setup, new localization system development, and performance optimization on critical screens.",
      },
      {
        title: "Uniformation - Business Management Application",
        description:
          "Feature development and bug fixing on a business process management application (Web-Privé, Uniweb). TFS→Git/Azure migration, PDF export solution, deployments and code reviews for junior developers.",
      },
      {
        title: "Europ Assistance - E-Sector+ Application",
        description:
          "Salesforce data extraction and transformation to multiple formats, feature development and production service monitoring. AWS and Azure integration.",
      },
      {
        title: "Veolia - Sanitation & Hazardous Waste Management Tool",
        description:
          "Feature development on a business process management tool. JASPER report creation, functional specification meetings, and critical path intervention.",
      },
      {
        title: "Total - Automated Check Deposit Machine (DAC)",
        description:
          "Design and development of a check deposit automation system with supervision module, geolocation, offline sync, real-time monitoring, and SSRS reporting.",
      },
      {
        title: "Tubozer - Oil Site Management Solution (TuboSky V2)",
        description:
          "Architecture and development of a .NET Core API, user management module (Identity Server), multithreaded workflow management, Word/Excel/PDF report generation, Linux server deployment.",
      },
    ],
  },
  education: {
    title: "Education",
    degree: "Engineering Degree in Computer Science",
  },
  languages: {
    title: "Languages",
    items: [
      { name: "French", proficiency: "Fluent / Professional" },
      { name: "English", proficiency: "Professional" },
      { name: "Arabic", proficiency: "Native language" },
    ],
  },
  footer: {
    heading: "Let's work",
    headingHighlight: "together",
    description: "Interested in working together? Feel free to reach out for collaborations or just a friendly hello.",
    cta: "Get in touch",
    rights: "All rights reserved.",
  },
};
