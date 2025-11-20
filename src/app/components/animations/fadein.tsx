"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInWhenVisibleProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
}

export default function FadeInWhenVisible({
  children,
  delay = 0,
  y = 40,
  duration = 0.7,
}: FadeInWhenVisibleProps) {
  return (
    <motion.div
    className = "w-full h-full"
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
