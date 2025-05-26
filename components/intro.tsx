"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import profilePic from "@/public/profile-pic.png"

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[55rem] text-center sm:mb-0 scroll-mt-[100rem] relative"
    >
      {/* Enhanced Profile Section */}
      <div className="flex items-center justify-center mb-8">
        <div className="relative group">
          {/* Subtle background glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gray-200/40 dark:bg-gray-700/20 blur-xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1.3 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />

          {/* Profile Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              duration: 0.6,
            }}
            className="relative z-10"
          >
            <div className="relative p-1 rounded-full bg-white dark:bg-gray-800 shadow-2xl border border-gray-200 dark:border-gray-700">
              <Image
                src={profilePic}
                alt="Salman portrait"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-28 w-28 sm:h-32 sm:w-32 rounded-full object-cover shadow-lg
                         transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Status indicator */}
            <motion.div
              className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1.5 shadow-lg border-3 border-white dark:border-gray-800"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: 0.3,
                duration: 0.5,
              }}
            >
              <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
            </motion.div>
          </motion.div>

          {/* Waving Hand */}
          <motion.span
            className="absolute -top-1 -right-1 text-3xl sm:text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: [0, 15, -15, 15, 0],
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              delay: 0.2,
              duration: 0.8,
              rotate: {
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 4,
              }
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* Enhanced Typography */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-6xl font-bold !leading-[1.2] px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className="text-gray-900 dark:text-white">
            Hi, I'm{" "}
          </span>
          <span className="text-gray-800 dark:text-gray-100 font-black relative">
            Salman
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          I'm a{" "}
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            freelance web developer
          </span>{" "}
          who loves building{" "}
          <span className="italic font-medium text-gray-700 dark:text-gray-300">
            modern websites and apps
          </span>
          . My focus is{" "}
          <span className="font-bold underline decoration-gray-400 dark:decoration-gray-500 decoration-2 underline-offset-2">
            React (Next.js)
          </span>
        </motion.p>
      </motion.div>

      {/* Enhanced Action Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        {/* Primary CTA Button */}
        <Link
          href="#contact"
          className="group relative overflow-hidden bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-8 py-4 flex items-center gap-3 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-800 dark:hover:bg-gray-200 active:scale-95 transition-all duration-300 shadow-xl hover:shadow-2xl font-medium text-lg"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          <span className="relative z-10">Contact me here</span>
          <BsArrowRight className="opacity-80 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300 relative z-10" />
          
          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </Link>

        {/* Secondary Buttons Container */}
        <div className="flex items-center gap-3">
          {/* Download CV Button */}
          <motion.a
            className="group bg-white dark:bg-white/10 px-6 py-4 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-gray-200 dark:border-white/20 shadow-lg hover:shadow-xl font-medium"
            href="/CV.pdf"
            download
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-gray-700 dark:text-gray-200">Download CV</span>
            <HiDownload className="opacity-60 group-hover:translate-y-1 group-hover:opacity-100 transition-all duration-300 text-gray-600 dark:text-gray-300" />
          </motion.a>

          {/* Social Links */}
          <div className="flex gap-2">
            <motion.a
              className="bg-white dark:bg-white/10 p-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center rounded-full focus:scale-110 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border border-gray-200 dark:border-white/20 shadow-lg hover:shadow-xl"
              href="https://www.linkedin.com/in/salman-qureshi-sikku/"
              target="_blank"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <BsLinkedin className="text-xl" />
            </motion.a>

            <motion.a
              className="bg-white dark:bg-white/10 p-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center rounded-full focus:scale-110 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border border-gray-200 dark:border-white/20 shadow-lg hover:shadow-xl"
              href="https://github.com/salman-sikku"
              target="_blank"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaGithubSquare className="text-xl" />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-1.5 h-1.5 bg-gray-300/50 dark:bg-gray-600/50 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 0,
          }}
        />
        <motion.div
          className="absolute top-32 right-16 w-2 h-2 bg-gray-400/40 dark:bg-gray-500/40 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 2,
          }}
        />
      </div>
    </section>
  );
}