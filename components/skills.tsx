"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

// Combined animation variants for entry and hover
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.03 * index,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.05,
    y: -2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="
              bg-white border border-black/10 rounded-xl px-5 py-3 
              shadow-sm hover:shadow-md
              dark:bg-white/10 dark:text-white/80 dark:border-white/20
              cursor-default select-none
              transition-shadow duration-200
            "
            key={index}
            variants={fadeInAnimationVariants}
            whileHover="hover"
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
              margin: "-100px",
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
