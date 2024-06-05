"use client";

import { twJoin } from "tailwind-merge";
import { motion } from "framer-motion";
import { textClasses } from "./textClasses";
import { HTMLAttributes } from "react";
import { FocusLink } from "./focus-link";

export function Description({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      layout
      className={twJoin(
        textClasses.medium,
        "flex flex-col gap-4 break-words [word-break:break-word]",
        className
      )}
    >
      <p className={twJoin(textClasses.medium, "text-sky-700")}>
        I work as a Web Developer at{" "}
        <FocusLink target="_blank" href="https://bakkenbaeck.com/">
          Bakken & Bæck
        </FocusLink>{" "}
        where I&apos;m currently working on{" "}
        <FocusLink target="_blank" href="https://tonscan.com">
          tonscan.com
        </FocusLink>
        .
      </p>
      <p className={twJoin(textClasses.medium, "text-sky-700")}>
        I&apos;ve also worked at{" "}
        <FocusLink target="_blank" href="https://openasset.com/">
          Open Asset
        </FocusLink>
        ,{" "}
        <FocusLink target="_blank" href="https://phantom.land">
          Phantom
        </FocusLink>{" "}
        and{" "}
        <FocusLink target="_blank" href="https://thisissoon.com/">
          SOON_
        </FocusLink>{" "}
        and helped create some fun projects outside of work, like{" "}
        <FocusLink target="_blank" href="https://doyoutrackid.com">
          doyoutrackid.com
        </FocusLink>
        .
      </p>
      <p className={twJoin(textClasses.medium, "text-sky-700")}>
        If you want to get in touch, email me at{" "}
        <FocusLink href="mailto:jack@jackhkmatthews.com">
          jack@jackhkmatthews.com
        </FocusLink>
        .
      </p>
    </motion.div>
  );
}
