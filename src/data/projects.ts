export interface Project {
  slug: string;
  title: string;
  repo: string;
  result: string;
  problem: string;
  solution: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  isCaseStudy?: boolean;
}

export const projects: Project[] = [
  {
    slug: "restaurant-management",
    title: "Restaurant Management",
    repo: "Restaurant-management",
    problem:
      "Restaurants juggle tables, orders, kitchen, delivery, invoicing, and staff schedules across disconnected tools",
    solution:
      "Full operating system with dedicated panels for waiters, kitchen, and delivery, plus real-time KPI dashboard",
    result:
      "Single platform replacing multiple tools, with live reporting and role-based access",
    description:
      "A comprehensive restaurant operating system built with Laravel. Features include table and reservation management, waiter order panels, kitchen display system, delivery tracking, invoicing, employee scheduling, and a real-time dashboard with key performance indicators. The system uses role-based access control to provide dedicated interfaces for each staff role.",
    tech: ["PHP", "Laravel", "Alpine.js", "Tailwind CSS", "Vite"],
  },
  {
    slug: "workwear-management",
    title: "Workwear Management",
    repo: "Workwear-Management",
    problem:
      "Manual tracking of employee workwear inventory led to errors, lost items, and missed expiration dates",
    solution:
      "Web app with barcode scanning, automated expiration alerts, role-based access, and PL/EN support",
    result:
      "Eliminated manual tracking errors, deployed during internship for real-world use",
    description:
      "A full-featured web application for workwear management built during an internship. The system replaces manual spreadsheet tracking with a digital platform featuring barcode scanner integration for instant item lookup, automated expiration date alerts for safety equipment, role-based access control, and multilingual support (Polish/English). Built on a custom MVC architecture from scratch to deepen understanding of web fundamentals.",
    tech: ["JavaScript", "PHP", "MySQL"],
    liveUrl: "https://workwear.infinityfreeapp.com/workwear/login",
    isCaseStudy: true,
  },
  {
    slug: "task-app",
    title: "Task App",
    repo: "task-app",
    problem:
      "Existing task managers lack guest mode and require account creation to try the product",
    solution:
      "Full-stack platform with Guest Mode, JWT auth, advanced filtering, and dynamic themes",
    result:
      "Zero-friction onboarding — users can try all features instantly without registration",
    description:
      "A full-stack task management platform built with React and NestJS. Unique Guest Mode allows users to try all features without creating an account. Includes secure JWT authentication, advanced task filtering and sorting, dynamic dark/light theme switching, and a responsive design. The backend uses TypeORM with MySQL for data persistence.",
    tech: ["React", "NestJS", "TypeORM", "MySQL", "TypeScript"],
  },
  {
    slug: "expense-tracking",
    title: "Expense Tracking",
    repo: "expense-tracking",
    problem:
      "Tracking income and expenses manually across categories and months is time-consuming",
    solution:
      "Web-based tracker with category/month breakdowns and server-side validation",
    result: "Clear financial overview with validated data entry",
    description:
      "A web-based expense tracker built with Java 17 and Spring Boot. Features include income and expense management with category-based and monthly breakdowns, server-side validation for data integrity, and a responsive UI powered by Bootstrap and Thymeleaf templates. Uses Spring Data JPA for database operations.",
    tech: ["Java", "Spring Boot", "Thymeleaf", "Maven"],
  },
  {
    slug: "recipes-app",
    title: "Recipes App",
    repo: "recipes-app",
    problem:
      "Recipe collections scattered across notes, bookmarks, and apps",
    solution:
      "Full-stack sharing platform with modern SPA-like navigation via Inertia.js",
    result: "Unified recipe management with smooth UX",
    description:
      "A full-stack recipe sharing web application built with Laravel on the backend and Vue 3 on the frontend, connected via Inertia.js for seamless SPA-like navigation without building a separate API. Styled with Tailwind CSS for a clean, responsive interface. Features recipe creation, browsing, and sharing capabilities.",
    tech: ["Vue 3", "Laravel", "Inertia.js", "Tailwind CSS"],
  },
  {
    slug: "quiz-app",
    title: "Quiz App",
    repo: "quiz-app",
    problem: "Need for a quick, deployable quiz platform",
    solution: "TypeScript-based quiz app deployed on Vercel",
    result: "Live interactive quiz platform accessible to anyone",
    description:
      "An interactive quiz application built with TypeScript and deployed on Vercel for instant global access. Features multiple quiz categories, score tracking, and a responsive interface designed for both desktop and mobile use.",
    tech: ["TypeScript", "Vercel"],
    liveUrl: "https://quiz-app-orpin-pi.vercel.app",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
