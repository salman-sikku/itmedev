"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setPending(true);

    const formData = new FormData(e.target);
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          senderEmail,
          message,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success(result.message);
        e.target.reset(); // Reset form
      } else {
        toast.error(result.error || 'Something went wrong');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setPending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,42rem)] mx-auto px-4"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut"
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="text-center mb-12">
        <SectionHeading>Get In Touch</SectionHeading>

        <motion.p
          className="text-gray-700 dark:text-gray-300 max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Have a project in mind? Let's discuss how we can work together.
          Reach out directly at{" "}
          <a
            className="text-gray-800 dark:text-gray-400 underline decoration-2 underline-offset-2 hover:decoration-gray-500 transition-colors font-medium"
            href="mailto:iamsalman.dev@gmail.com"
            aria-label="Send email to iamsalman.dev@gmail.com"
          >
            iamsalman.dev@gmail.com
          </a>{" "}
          or use the form below.
        </motion.p>
      </div>

      <motion.div
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-2xl sm:p-8 p-6 border border-gray-100 dark:border-gray-800"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <form
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="group mb-4">
            <label htmlFor="senderEmail" className="sr-only">
              Your email address
            </label>
            <input
              id="senderEmail"
              className="h-14 px-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-gray-500 dark:focus:border-gray-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none w-full text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 hover:border-gray-300 dark:hover:border-gray-600"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email address"
              aria-describedby="email-error"
              autoComplete="email"
            />
          </div>

          <div className="group mb-6">
            <label htmlFor="message" className="sr-only">
              Your message
            </label>
            <textarea
              id="message"
              className="h-52 px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-gray-500 dark:focus:border-gray-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none w-full resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 hover:border-gray-300 dark:hover:border-gray-600"
              name="message"
              placeholder="Your message..."
              required
              maxLength={5000}
              aria-describedby="message-error"
            />
          </div>

          <button
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
            disabled={pending}
          >
            {pending ? (
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
              <>
                Submit{" "}
                <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
              </>
            )}
          </button>
        </form>
      </motion.div>
    </motion.section>
  );
}