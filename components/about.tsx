"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

// Animation variants for better organization
const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
};

const paragraphVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      
      <div className="space-y-4">
        <motion.p 
          className="mb-3 text-gray-700 dark:text-gray-300"
          variants={paragraphVariants}
        >
          I started learning <span className="font-medium">web development</span> out of pure interest and curiosity. 
          I'm a self-taught developer who recently began working on{" "}
          <span className="font-medium">freelance projects</span>.{" "}
          <span className="italic">What I love most about coding</span> is turning 
          ideas into real, usable products. My current stack includes{" "}
          <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. 
          I'm also learning <span className="font-medium">TypeScript</span> and always 
          excited to explore new tools and technologies. I'm working towards landing a{" "}
          <span className="font-medium">full-time role</span> as a software developer.
        </motion.p>

        <motion.p 
          className="text-gray-700 dark:text-gray-300"
          variants={paragraphVariants}
        >
          <span className="italic">When I'm not coding</span>, I like watching tech 
          videos, learning about new frameworks, and sharpening my skills. I also enjoy{" "}
          <span className="font-medium">exploring design trends</span> and thinking 
          about how to build better user experiences. My journey has just started, 
          and I'm always curious and open to learning something new every day.
        </motion.p>
      </div>

      {/* Optional: Add a subtle call-to-action */}
      <motion.div 
        className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
        variants={paragraphVariants}
      >
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          Currently open to new opportunities and collaborations
        </p>
      </motion.div>
    </motion.section>
  );
}