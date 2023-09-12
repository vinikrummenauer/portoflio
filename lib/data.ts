import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import consepro from "@/public/consepro.png";
import kabupi from "@/public/kabupi.jpeg";
import eduambtec from "@/public/eduambtec.png";

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
    title: "Technical High School",
    location: "Taquara, RS",
    description:
      "I graduated after 3 years of programming studies integrated into high school.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Taquara, RS",
    description:
      "I worked as a full-stack developer, I acquired a lot of experience",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - Sep 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Gramado, RS",
    description:
      "I currently work as a full-stack developer in a startup focused on tourism. I am also looking for job opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CONSEPRO - ER",
    description:
      "I worked as a full stack developer developing a rotating parking system for the city.",
    tags: ["React", "Node.js", "MySQL"],
    imageUrl: consepro,
  },
  {
    title: "Kabupi",
    description:
      "I am currently developing an application aimed at tourism in the city of Gramado.",
    tags: ["React", "TypeScript", "Node.js", "MySQL"],
    imageUrl: kabupi,
  },
  {
    title: "EDUAMBTEC",
    description:
      "As my Final Paper I created EDUAMBTEC, a website for elementary schools focused on environmental awareness, so I created some games for this project.",
    tags: ["Javascript", "Bootstrap"],
    imageUrl: eduambtec,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Angular",
  "Express",
  "Python",
  "Git",
  "HTML",
  "CSS",
] as const;
