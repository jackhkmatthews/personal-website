import { twJoin } from "tailwind-merge";
import { textClasses } from "./textClasses";
import { text } from "stream/consumers";

export default function Home() {
  return (
    <main className="px-[max(1rem,10vw)] py-[max(1rem,10vh)] flex flex-col gap-4 break-words max-w-full [word-break:break-word]">
      <h1 className={twJoin(textClasses.large, "text-sky-800")}>
        Hi, I&apos;m Jack
      </h1>
      <p className={twJoin(textClasses.medium, "text-sky-700 max-w-[40ch]")}>
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
      <p className={twJoin(textClasses.medium, "text-sky-700 max-w-[40ch]")}>
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
      <p className={twJoin(textClasses.medium, "text-sky-700 max-w-[40ch]")}>
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
