import { twJoin } from "tailwind-merge";
import { textClasses } from "./textClasses";
import { Description } from "./description";

export default function Home() {
  return (
    <main
      className={twJoin(
        textClasses.medium,
        "p-4 pt-8 md:px-[max(1rem,10vw)] md:py-[max(1rem,20vh)] flex flex-col gap-4 @container max-w-[40ch] box-content"
      )}
    >
      <h1
        className={twJoin(
          "font-sans leading-tight text-sky-700 text-[max(1.875rem,19cqw)] translate-x-[-0.1ch]"
        )}
      >
        Hi, I&apos;m Jack
      </h1>
      <Description />
    </main>
  );
}
