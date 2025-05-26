import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import Sportelo from "@/public/Screenshot Sportelo.jpg";
import Holikamaal from "@/public/Screenshot holikamaal.jpg";
import FoodAi from "@/public/Screenshot foodAi.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Journey",
    hash: "#journey",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Started Learning Web Development",
    location: "Remote",
    description:
      "I began my web development journey in early 2024, learning everything from scratch with self-study and hands-on practice. I focused on modern tools like HTML, CSS, JavaScript, and React.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2024",
  },
  {
    title: "Completed Full-Stack Web Development",
    location: "Remote",
    description:
      "By the end of 2024, I had a strong grasp on full-stack development. I built multiple projects using React, Next.js, Node.js, and MongoDB to solidify my learning.",
    icon: React.createElement(CgWorkAlt),
    date: "Late 2024",
  },
  {
    title: "Freelance & SaaS Developer",
    location: "Remote",
    description:
      "In 2025, I'm actively working on SaaS products — both for clients and my own ideas. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I'm currently open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2025 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Sportelo",
    description:
      "Built a modern launch page for a sports e-commerce startup with responsive design and waitlist form integration.",
    tags: ["React", "TypeScript", "Next.js", "MongoDB", "Tailwind", "Framer"],
    imageUrl: Sportelo,
    projectUrl: "https://www.sportelo.shop/",
  },
  {
    title: "Holikamaal",
    description:
      "Developed a complete Holi-themed e-commerce site with product categories, search, cart, and responsive UI for a smooth festive shopping experience.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: Holikamaal,
    projectUrl: "https://www.holikamaal.in/",
  },
  {
    title: "Food AI",
    description:
      "Built an AI-powered app where users can upload food images and instantly get detailed nutritional information like calories, carbs, fats, and proteins.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Gen AI"],
    imageUrl: FoodAi,
    projectUrl: "https://foodlensai.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Aws",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
