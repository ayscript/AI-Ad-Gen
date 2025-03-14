"use client";
import type React from "react";
import { Nunito } from "next/font/google";
import clsx from "clsx";
import FeatureCard from "@/components/key-features-card";
import { AiAnalytics, GeneratedVisual } from "@/components/icons/icon";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const tagData = [
  {
    icon: <GeneratedVisual className="size-5 sm:size-10" />,
    text: "Generated Visuals",
    textColor: "text-[#00A05E]",
  },
  {
    icon: <AiAnalytics className="size-5 sm:size-8" />,
    text: "AI Analytics",
    textColor: "text-[#FF3F56]",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className={clsx(
        "w-full px-1 md:px-6 bg-white flex flex-col items-center justify-end gap-10 lg:px-16 py-10 md:py-20",
        nunito.variable
      )}
    >
      <motion.div
        className="max-w-7xl mx-auto relative"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center justify-center gap-3 max-w-4xl mx-auto"
          initial={{ y: 50 }}
          animate={isInView ? { y: 0 } : { y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-[#121316] text-3xl lg:text-[40px] text-center font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Powerful AI Features to Supercharge Your Ads
          </motion.h1>
          <AnimatedTags isInView={isInView} />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <FeatureCard />
      </motion.div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AnimatedTags = ({ isInView }: any) => {
  return (
    <div className="flex gap-4">
      {tagData.map((tag, index) => (
        <motion.div
          key={index}
          className={`flex items-center gap-2 md:gap-4 text-sm md:text-base ${tag.textColor}`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }
          }
          transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            initial={{ rotate: -10 }}
            animate={isInView ? { rotate: 0 } : { rotate: -10 }}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
          >
            {tag.icon}
          </motion.div>
          <motion.span
            className="text-md md:text-[20px] text-nowrap font-normal leading-[34.26px]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
          >
            {tag.text}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};
