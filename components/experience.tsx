"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

// Enhanced timeline element styles
const getTimelineStyles = (theme: string) => ({
  content: {
    background: theme === "light" 
      ? "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)" 
      : "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)",
    boxShadow: theme === "light"
      ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      : "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",
    border: theme === "light" 
      ? "1px solid rgba(0, 0, 0, 0.08)" 
      : "1px solid rgba(255, 255, 255, 0.1)",
    textAlign: "left" as const,
    padding: "1.5rem 2rem",
    borderRadius: "12px",
  },
  arrow: {
    borderRight: theme === "light"
      ? "0.4rem solid rgba(156, 163, 175, 0.8)"
      : "0.4rem solid rgba(255, 255, 255, 0.3)",
  },
  icon: {
    background: theme === "light" 
      ? "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)"
      : "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)",
    fontSize: "1.5rem",
    boxShadow: theme === "light"
      ? "0 2px 8px rgba(0, 0, 0, 0.15)"
      : "0 2px 8px rgba(0, 0, 0, 0.4)",
    border: theme === "light" 
      ? "2px solid rgba(0, 0, 0, 0.05)" 
      : "2px solid rgba(255, 255, 255, 0.1)",
  }
});

// Animation variants for section
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Experience() {
  const { ref } = useSectionInView("Journey");
  const { theme } = useTheme();
  const styles = getTimelineStyles(theme);

  return (
    <motion.section 
      id="journey" 
      ref={ref} 
      className="scroll-mt-28 mb-28 sm:mb-40"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <SectionHeading>My Journey</SectionHeading>
      
      <VerticalTimeline 
        lineColor={theme === "light" ? "#e5e7eb" : "rgba(255, 255, 255, 0.2)"}
      >
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={styles.content}
            contentArrowStyle={styles.arrow}
            date={item.date}
            icon={item.icon}
            iconStyle={styles.icon}
            className="vertical-timeline-element--work"
          >
            <div className="space-y-2">
              <h3 className="text-xl font-bold capitalize text-gray-900 dark:text-white">
                {item.title}
              </h3>
              
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300 !mt-1">
                {item.location}
              </p>
              
              <p className="!mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Optional: Add a subtle hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <style jsx global>{`
        .vertical-timeline-element-date {
          color: ${theme === "light" ? "#6b7280" : "#9ca3af"} !important;
          font-weight: 500 !important;
          font-size: 0.875rem !important;
        }
        
        .vertical-timeline::before {
          background: ${theme === "light" ? "#e5e7eb" : "rgba(255, 255, 255, 0.2)"} !important;
        }
        
        .vertical-timeline-element-content {
          transition: all 0.3s ease !important;
        }
        
        .vertical-timeline-element-content:hover {
          transform: translateY(-2px) !important;
        }
        
        .vertical-timeline-element-icon {
          transition: all 0.3s ease !important;
        }
        
        .vertical-timeline-element:hover .vertical-timeline-element-icon {
          transform: scale(1.1) !important;
        }
      `}</style>
    </motion.section>
  );
}