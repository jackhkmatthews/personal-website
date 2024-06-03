"use client";

import { twJoin } from "tailwind-merge";
import { motion, HTMLMotionProps, AnimatePresence } from "framer-motion";
import { AnchorHTMLAttributes, useState } from "react";

export function FocusLink({
  className,
  children,
  onFocus,
  onBlur,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & HTMLMotionProps<"a">) {
  const [focus, setFocus] = useState(false);
  return (
    <motion.a
      className={twJoin(
        "underline underline-offset-4 text-sky-700 hover:text-sky-900 cursor-pointer outline-none transition-colors dark:hover:text-sky-500 relative",
        className
      )}
      onFocus={(value) => {
        setFocus(true);
        onFocus?.(value);
      }}
      onBlur={(value) => {
        setFocus(false);
        onBlur?.(value);
      }}
      {...rest}
    >
      <span className="relative">
        {children}
        {focus && (
          <motion.span
            layout
            layoutId="hover-link"
            className="absolute inset-0 z-[-1]"
          >
            <AnimatePresence>
              <motion.span
                layout
                transition={{
                  duration: 0.1,
                  type: "spring",
                  bounce: 50,
                  damping: 10,
                  stiffness: 5000,
                }}
                initial={{ rotate: 7 }}
                animate={{ rotate: 0 }}
                className="absolute inset-0 bg-sky-200 rounded origin-top-left"
              />
            </AnimatePresence>
          </motion.span>
        )}
      </span>
    </motion.a>
  );
}
