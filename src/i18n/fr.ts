import type { Translation } from "./types";

export const fr: Translation = {
  nav: {
    about: "À propos",
    skills: "Compétences",
    experience: "Expérience",
    projects: "Projets",
    education: "Formation",
    contact: "Contact",
  },
  hero: {
    available: "Disponible pour des missions",
    tagline: "Développeur .NET Senior · Fullstack",
    greeting: "Bonjour, je suis",
    description:
      "Développeur .NET Senior avec plus de 8 ans d'expérience dans la conception et le développement de solutions logicielles robustes et évolutives. Spécialisé dans l'écosystème .NET (C#, ASP.NET Core), avec une maîtrise des architectures microservices, workflows métiers et intégration de données.",
    contactMe: "Me contacter",
    viewProjects: "Voir les projets",
    downloadCV: "Télécharger CV",
  },
  about: {
    title: "À propos",
    p1: "Au fil de missions chez Harvest, Uniformation, Europ Assistance, Veolia et Total, j'ai développé une expertise approfondie en développement .NET, refonte architecturale, gestion de workflows et optimisation de performance.",
    p2: "Je place la qualité du code, la maintenabilité et la satisfaction client au cœur de chaque projet. Mon focus : des solutions .NET robustes, évolutives et bien documentées.",
    contact: "Contact",
  },
  skills: {
    title: "Compétences & Expertise",
    categories: {
      backend: "Développement Back-end",
      frontend: "Développement Front-end",
      devops: "Bases de données",
      quality: "Outils & DevOps",
      soft: "Savoir-être",
    },
  },
  experience: {
    title: "Expérience",
    present: "Présent",
    roles: {
      "Harvest (AXA / Generali)": "Consultant .NET Core",
      "Uniformation": "Consultant .NET Core",
      "Europ Assistance": "Consultant .NET Core / SSIS",
      "SIACI Assurance": "Développeur Fullstack",
      "Veolia": "Développeur Fullstack",
      "Tubozer": "Développeur .NET Core / Angular",
      "Total": "Développeur .NET",
    },
  },
  projects: {
    title: "Projets phares",
    items: [
      {
        title: "Harvest - Refonte architecture AXA / Generali",
        description:
          "Migration d'une application de gestion des processus métiers d'une architecture monolithique vers une architecture n-tiers (microservices). Mise en place de la pré-compilation des vues, développement d'un système de localisation, et optimisation des performances sur plusieurs écrans critiques.",
      },
      {
        title: "Uniformation - Application de gestion métiers",
        description:
          "Développement d'évolutions et correction de bugs sur une application de gestion des processus métiers (Web-Privé, Uniweb). Migration TFS→Git/Azure, développement d'une solution d'export PDF, déploiements et code review pour les développeurs juniors.",
      },
      {
        title: "Europ Assistance - Application E-Sector+",
        description:
          "Extraction et traitement de données Salesforce vers plusieurs formats, développement d'évolutions et garantie du bon fonctionnement des services en production. Intégration AWS et Azure.",
      },
      {
        title: "Veolia - Outil de gestion assainissement & déchets dangereux",
        description:
          "Développement d'évolutions sur un outil de gestion des processus métiers. Création de rapports JASPER, participation aux réunions de spécification fonctionnelle et intervention sur le chemin critique.",
      },
      {
        title: "Total - Machine de dépôt automatique de chèques (DAC)",
        description:
          "Conception et développement d'un automate de remise des chèques avec module de supervision, géolocalisation, synchronisation hors-ligne, monitoring temps réel et reporting SSRS.",
      },
      {
        title: "Tubozer - Solution de gestion de sites pétroliers (TuboSky V2)",
        description:
          "Architecture et développement d'une API .NET Core, module de gestion des utilisateurs (Identity Server), gestion des workflows en multithreading, génération de rapports Word/Excel/PDF, déploiement sur serveur Linux.",
      },
    ],
  },
  education: {
    title: "Formation",
    degree: "Diplôme d'Ingénieur en Informatique",
  },
  languages: {
    title: "Langues",
    items: [
      { name: "Français", proficiency: "Courant / Professionnel" },
      { name: "Anglais", proficiency: "Professionnel" },
      { name: "Arabe", proficiency: "Langue maternelle" },
    ],
  },
  footer: {
    heading: "Travaillons",
    headingHighlight: "ensemble",
    description: "Intéressé par une collaboration ? N'hésitez pas à me contacter pour des missions ou simplement pour échanger.",
    cta: "Me contacter",
    rights: "Tous droits réservés.",
  },
};
