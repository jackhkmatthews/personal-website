"use client";

import { ComponentPropsWithoutRef } from "react";
import { bounce } from "./_lib/actions";
import Image from "next/image";
import { twJoin } from "tailwind-merge";
import { textClasses } from "./_shared/textClasses";

export function Bouncer({
  bounces,
  ...rest
}: { bounces: number | null | undefined } & ComponentPropsWithoutRef<"div">) {
  return (
    <div {...rest}>
      <Image
        onAnimationIteration={bounce}
        width={124}
        height={124}
        src="/jack.png"
        alt="Proud Jack"
        className="h-[0.6em] w-[0.6em] animate-bounce-updown"
      />
      <p className={twJoin(textClasses.medium, "text-sky-700")}>
        {bounces ?? 0}
      </p>
    </div>
  );
}
