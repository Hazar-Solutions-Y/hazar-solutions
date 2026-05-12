import type { Project } from "@/types";

export const personalProjects: Project[] = [
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
