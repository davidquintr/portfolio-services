import { randomInt } from "crypto";
import ToSlug from "../utils/toSlug";

interface IboxContent {
  title: string;
  className?: string;
  light: boolean;
  id?: string;
}

export default function BoxContent({
  title,
  className = '',
  light,
  children,
}: IboxContent & { children: React.ReactNode }) {
  return (
    <section
      className={`${className} relative min-h-dvh flex flex-col`}
      id={ToSlug(title)}
    >
      {light && <div className="absolute top-0 bg-light-gradient-inverted dark:bg-dark-gradient-inverted w-full h-24"></div>}
      <div className="py-2 max-w-[1770px] px-4 mx-auto w-full z-10">
        { title && <h2 className="my-3 font-bold text-2xl text-light-blue-400 dark:text-dark-blue-100">
          {title}
        </h2>}
        { title && <span className="h-[1px] block bg-light-border-gradient dark:bg-dark-border-gradient"></span>}
      </div>
      <span style={{animationDuration: `${randomInt(7000, 20000)}ms`}} className="bg-dark-blue-100 dark:bg-dark-blue-350 size-[30vw] animate-pulse animate-infinite animate-ease-in-out rounded-full absolute top-0 right-0 blur-[256px] -z-0"></span>
      <span style={{animationDuration: `${randomInt(7000, 20000)}ms`}} className="bg-dark-blue-100 dark:bg-dark-blue-350 size-[30vw] animate-pulse animate-infinite animate-ease-in-out rounded-full absolute bottom-0 left-0 blur-[256px] -z-0"></span>
      <div className="max-w-[1480px] w-full mx-auto flex-1 flex justify-center px-4 py-8 items-center z-10">{children}</div>
    </section>
  );
}
