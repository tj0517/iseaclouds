"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideFromLeftProps {
  children: ReactNode;
  delay?: number;
  distance?: number;
}

export default function SlideFromLeft({
  children,
  delay = 0,
  distance = 80,
}: SlideFromLeftProps) {
  return (
    <motion.div
    className = "w-full h-full"
      initial={{ opacity: 0, x: -distance }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
