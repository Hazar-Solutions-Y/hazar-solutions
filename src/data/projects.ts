import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Harvest - Refonte architecture AXA / Generali",
    description:
      "Migration d'une application de gestion des processus métiers d'une architecture monolithique vers une architecture n-tiers (microservices). Mise en place de la pré-compilation des vues, développement d'un système de localisation, et optimisation des performances sur plusieurs écrans critiques.",
    tags: ["C#", ".NET Core", ".NET Framework 4.8", "SQL Server", "Azure DevOps", "Microservices"],
    period: "2024 - Présent",
    link: "https://www.harvest.fr/",
  },
  {
    title: "Uniformation - Application de gestion métiers (Web-Privé, Uniweb)",
    description:
      "Développement d'évolutions et correction de bugs sur une application de gestion des processus métiers. Migration TFS→Git/Azure, traitement des commandes clients, développement d'une solution d'export PDF, déploiements et code review pour les développeurs juniors.",
    tags: ["C#", ".NET Core 3.1", "VB.NET", "ReactJs", "DynamoDB", "Azure DevOps"],
    period: "2021 - 2024",
    link: "https://www.uniformation.fr/",
  },
  {
    title: "Europ Assistance - Application E-Sector+",
    description:
      "Extraction et traitement de données Salesforce vers plusieurs formats, développement d'évolutions et garantie du bon fonctionnement des services en production. Intégration AWS et Azure.",
    tags: ["C#", ".NET Core 3.1", "SSIS", "Salesforce", "SOQL", "AWS", "Azure"],
    period: "2021",
    link: "https://www.europ-assistance.fr/",
  },
  {
    title: "Veolia - Outil de gestion assainissement & déchets dangereux",
    description:
      "Développement d'évolutions sur un outil de gestion des processus métiers. Création de rapports JASPER, intervention sur le chemin critique, participation aux réunions de spécification fonctionnelle.",
    tags: ["C#", ".NET Core 2.2", "NHibernate", "RabbitMQ", "Swagger", "Angular 6", "SQL Server"],
    period: "2018 - 2019",
    link: "https://www.veolia.com/",
  },
  {
    title: "Total - Machine de dépôt automatique de chèques (DAC)",
    description:
      "Conception et développement d'un automate de remise des chèques avec module de supervision, géolocalisation, synchronisation hors-ligne, monitoring temps réel et reporting SSRS.",
    tags: ["C#", "ASP.NET MVC5", "WPF", "SSIS", "SSRS", "Entity Framework", "SQL Server"],
    period: "2017 - 2018",
    link: "https://www.totalenergies.com/",
  },
  {
    title: "Tubozer - Solution de gestion de sites pétroliers (TuboSky V2)",
    description:
      "Architecture et développement d'une API .NET Core, module de gestion des utilisateurs (Identity Server), gestion des workflows en multithreading, génération de rapports Word/Excel/PDF, déploiement sur serveur Linux.",
    tags: ["ASP.NET Core 2.1", "Angular 6", "TypeScript", "JWT", "SQL", "Bootstrap 4"],
    period: "2018",
  },
];
