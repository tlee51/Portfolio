import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dalleIMG from "@/public/dalles.png";
import carphotoIMG from "@/public/cars.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated high school",
    location: "New Jersey",
    description:
      "I graduated high school in 2021.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Enrolled in University",
    location: "New York",
    description:
      "I enrolled in the University of Rochester.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - current",
  },
  {
    title: "Software Engineer",
    location: "New York",
    description:
      "Currently looking for SWE roles alongside my school coursework.",
    icon: React.createElement(FaReact),
    date: "Present",
  },
] as const;

export const projectsData = [
  {
    title: "AI Image Generator",
    description:
      "Created a MERN stack AI Image Generation App using OpenAI API.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    imageUrl: dalleIMG,
  },
  {
    title: "Self-Driving Car",
    description:
      "Created a self-driving car simulation by implementing a neural network to make car control itself.",
    tags: ["Javascript"],
    imageUrl: carphotoIMG,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "C",
  "Swift",
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "TailwindCSS",
  "MongoDB",
  "Express",
  "Framer Motion",
  "Figma",
] as const;