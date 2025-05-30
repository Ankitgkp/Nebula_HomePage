"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "../../../lib/utils"; // your utility for classNames, or use your own

type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  navItems,
  className,
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (current < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.nav
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed top-10 inset-x-0 mx-auto max-w-fit flex items-center justify-center space-x-4 rounded-full bg-white dark:bg-black border border-transparent dark:border-white/[0.2] shadow-[0_2px_3px_-1px_rgba(0,0,0,0.1),0_1px_0_0_rgba(25,28,33,0.02),0_0_0_1px_rgba(25,28,33,0.08)] pr-2 pl-8 py-2 z-[5000]",
            className
          )}
        >
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="flex items-center space-x-1 text-neutral-600 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300"
            >
              <span className="block sm:hidden">{item.icon}</span>
              <span className="hidden sm:block text-sm">{item.name}</span>
            </a>
          ))}

          <button className="relative rounded-full border border-neutral-200 dark:border-white/[0.2] px-4 py-2 text-sm font-medium text-black dark:text-white">
            Login
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </button>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
