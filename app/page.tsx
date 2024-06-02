import { twJoin } from "tailwind-merge";
import { textClasses } from "./textClasses";
import { text } from "stream/consumers";

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
          "font-sans leading-tight text-sky-700 text-[max(1.875rem,19cqw)] translate-x-[-0.1ch]"
        )}
      >
        Hi, I&apos;m Jack
      </h1>
      <p className={twJoin(textClasses.medium, "text-sky-700")}>
        I work as a Web Developer at{" "}
        <a
          target="_blank"
          href="https://bakkenbaeck.com/"
          className={twJoin(textClasses.link)}
        >
          Bakken & Bæck
        </a>{" "}
        where I&apos;m currently working on{" "}
        <a
          target="_blank"
          href="https://tonscan.com"
          className={twJoin(textClasses.link)}
        >
          tonscan.com
        </a>
        .
      </p>
      <p className={twJoin(textClasses.medium, "text-sky-700")}>
        I&apos;ve also worked at{" "}
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
          href="mailto:jack@jackhkmatthews.com"
          className={twJoin(textClasses.link)}
        >
          jack@jackhkmatthews.com
        </a>
        .
      </p>
    </main>
  );
}
