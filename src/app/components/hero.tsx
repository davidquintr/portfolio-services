import Image from "next/image";
import external from "../sources/external";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import es from "../sources/es";
import Link from "next/link";
import ToSlug from "../utils/toSlug";

export default function Hero() {
  const TECH_DIRECTORY = "/techs/";
  return (
    <section className="flex items-center flex-col justify-center min-h-dvh dark:bg-black relative bg-white">
      <div className="flex justify-center gap-1.5 md:gap-6 items-center flex-col md:flex-row">
        <Image
          className="rounded-full size-[200px] dark:shadow-glow"
          src="/davidquint-photo.png"
          quality={20}
          width={200}
          sizes="(max-width: 768px) 28vw, (max-width: 1200px) 18vw, 20vw"
          priority={true}
          height={200}
          alt={es.author}
          title={es.author}
        />
        <div className="md:gap-1 flex flex-col justify-center text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-[48px] text-light-blue-400 dark:text-dark-blue-100">
            {es.author}
          </h1>
          <p className="text-light-black font-bold text-5xl md:text-[64px] dark:text-white leading-none">
            {es.hero.title}
          </p>
        </div>
      </div>
      <div className="w-full pt-8 md:pt-[5vh] pb-[2.5vh] z-50">
        <div className="flex justify-center flex-wrap">
          {external.tech_media.map((element, index) => (
            <Image
              src={`${TECH_DIRECTORY}${element.src}`}
              key={index}
              width={166}
              height={130}
              alt={element.name}
              quality={30}
              priority
              className="h-[64px] w-[83px] md:w-[166px] md:h-[130px] object-contain floating-animation brightness-[1.4] dark:brightness-0"
              style={{animationDuration: `${element.duration}ms`}}
            />
          ))}
        </div>
        <div className="px-4 max-w-screen-lg m-auto text-center mt-8 md:mt-[5vh]">
          <h2 className="text-light-blue-400 dark:text-white font-bold text-base md:text-2xl">
            {es.hero.action.title}
          </h2>
          <p className="dark:text-dark-gray md:text-xl">{es.hero.action.description}</p>
        </div>
      </div>
      <div className="bg-light-gradient dark:bg-dark-gradient w-full h-1/2 absolute bottom-0"></div>
      <Link aria-label={es.hero.button_aria} href={`#${ToSlug(es.technologies.title)}`} className="hover:opacity-85 transition-all active:size-10 size-12 bg-light-blue-400 dark:bg-dark-blue-200 rounded-full absolute bottom-4 sm:bottom-8 z-50 grid place-items-center animate-bounce animate-infinite animate-duration-[1800ms] animate-ease-in-out">
        <FontAwesomeIcon icon={faAnglesDown} className="size-6 text-white dark:text-black" />
      </Link>
    </section>
  );
}
