"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import me from "@/public/me.png";

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
      <div className="flex items-center justify-center mt-12">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={me}
              alt="me"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-60 w-60 rounded-full object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
