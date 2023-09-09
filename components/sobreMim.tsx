"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 text-white"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I started programming in my technical course integrated into high school, 
      where I gained a lot of knowledge and <span className="font-medium">experience as a full-stack developer. </span>
      I am a great problem solver and I want to learn more and more. {" "}
      <span className="font-medium">I work with React, Node.js and MySQL. </span> I'm looking for a job as a full 
      stack developer.
      </p>
    </motion.section>
  );
}
