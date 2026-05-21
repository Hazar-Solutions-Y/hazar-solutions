import type { Project } from "@/types";

export const personalProjects: Project[] = [
  {
    title: "Offre-LinkedIn - Freelance Opportunity Triage Cockpit",
    description:
      "Personal cockpit centralizing freelance opportunities scattered across Gmail (LinkedIn job alerts, Free-Work newsletters, direct recruiter emails). Gmail OAuth ingestion with a per-sender parser extracts company, title, TJM, contract type, and location into typed rows. French-first dashboard with one-click status mutations, per-offer notes, and an AI-tailored CV generator (Gemini) that rewrites the headline and highlights matching projects per offer, rendered to PDF.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "Prisma 6",
      "SQLite",
      "googleapis",
      "Gemini AI",
      "react-pdf",
      "Gmail OAuth",
    ],
    period: "2026 - Present",
    link: "https://github.com/Hazar-Solutions-Y/offre-linkedin",
  },
  {
    title: "DropFlow - Multi-Vendor Dropshipping Platform",
    description:
      "Personal microservices project: a multi-vendor dropshipping platform where vendors create stores, manage products and auto-fulfill orders, monetized via SaaS subscriptions and sales commission. Built as an 8-module learning series covering monorepo setup, JWT auth, product catalog, BullMQ-backed orders, customer storefront, email/WebSocket notifications, Stripe payments, coupons & analytics, and AI features. Includes a real-time monitoring dashboard with live log streaming and a Gemini-powered product image analyzer.",
    tags: [
      "Spring Boot",
      "NestJS",
      "Next.js 15",
      "React 19",
      "Prisma",
      "BullMQ",
      "PostgreSQL",
      "Redis",
      "MinIO",
      "Stripe",
      "Gemini AI",
      "Docker",
      "Microservices",
    ],
    period: "2025 - Present",
  },
];
