import { twJoin } from "tailwind-merge";
import { textClasses } from "./textClasses";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className={twJoin(
        textClasses.medium,
        "p-4 pt-8 md:px-[max(1rem,10vw)] md:py-[max(1rem,20vh)] flex flex-col gap-4 break-words [word-break:break-word] @container max-w-[40ch] box-content"
      )}
    >
      <h1
        className={twJoin(
          "font-sans leading-tight text-orange-700 text-[max(1.875rem,19cqw)] translate-x-[-0.1ch]"
        )}
      >
        Hi, I&apos;m{" "}
        <span className="relative">
          Jack
          <Image
            width={124}
            height={124}
            src="/jack.png"
            alt="Proud Jack"
            className="h-[0.6em] w-[0.4em] object-cover absolute bottom-0 right-0 translate-x-full translate-y-1/4"
          />
        </span>
      </h1>
      <p className={twJoin(textClasses.medium, "text-sky-700")}>
        I work as a Web Developer at{" "}
        <a
          target="_blank"
          href="https://metalabel.com/"
          className={twJoin(textClasses.link)}
        >
          Metalabel
        </a>{" "}
        where I&apos;m currently working on{" "}
        <a
          target="_blank"
          href="https://metalabel.com"
          className={twJoin(textClasses.link)}
        >
          metalabel.com
        </a>
        .
      </p>
      <p className={twJoin(textClasses.medium, "text-sky-700")}>
        I&apos;ve also worked at{" "}
        <a
          target="_blank"
          href="https://bakkenbaeck.com/"
          className={twJoin(textClasses.link)}
        >
          Bakken & Bæck
        </a>
        ,{" "}
        <a
          target="_blank"
          href="https://openasset.com/"
          className={twJoin(textClasses.link)}
        >
          Open Asset
        </a>
        ,{" "}
        <a
          target="_blank"
          href="https://phantom.land"
          className={twJoin(textClasses.link)}
        >
          Phantom
        </a>{" "}
        and{" "}
        <a
          target="_blank"
          href="https://thisissoon.com/"
          className={twJoin(textClasses.link)}
        >
          SOON_
        </a>{" "}
        and helped create some fun projects outside of work, like{" "}
        <a
          target="_blank"
          href="https://doyoutrackid.com"
          className={twJoin(textClasses.link)}
        >
          doyoutrackid.com
        </a>
        .
      </p>
      <p className={twJoin(textClasses.medium, "text-sky-700")}>
        If you want to get in touch, email me at{" "}
        <a
          href="mailto:jackhkmatthews@gmail.com"
          className={twJoin(textClasses.link)}
        >
          jackhkmatthews@gmail.com
        </a>
        .
      </p>
    </main>
  );
}
