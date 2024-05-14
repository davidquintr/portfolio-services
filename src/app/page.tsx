import { Metadata } from "next";
import BoxContent from "./components/boxContent";
import en from "./sources/en";
import es from "./sources/es";
import Image from "next/image";
import MetadataFile from "./sources/metadata_en";
import { faBriefcase, faShare } from "@fortawesome/free-solid-svg-icons";
import Service from "./components/service";
import InternalLink from "./components/internalLink";
import Project from "./components/project";
import Form from "./components/form";
import external from "./sources/external";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToSlug from "./utils/toSlug";

export const metadata: Metadata = MetadataFile;

export default function Home() {
  return (
    <>
      <BoxContent title={es.technologies.title} light={true}>
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="flex justify-center flex-col flex-1 gap-3">
            <h3 className="font-bold text-[32px] md:text-5xl leading-normal dark:text-dark-blue-100 text-light-blue-500 dark:first-line:text-white first-line:text-black">
              {es.technologies.action.title}
            </h3>
            <p className="text-lg">{es.technologies.action.description}</p>
            <ul className="grid grid-cols-3 sm:grid-cols-6 2xl:grid-cols-8 text-dark-gray mt-10 border-t border-l border-dark-blue-200">
              {es.technologies.tech?.map((tech, index) => (
                <li
                  className="dark:border-dark-blue-200 border-light-blue-500 text-light-blue-500 dark:text-dark-gray border p-3 grid place-items-center border-l-0 border-t-0"
                  key={index}
                >
                  <tech.icon className="size-[48px]" />
                  <span className="mt-1 text-xs font-light">{tech.text}</span>
                </li>
              ))}
            </ul>
            <InternalLink
              href={`#${ToSlug(es.contact.title)}`}
              icon={faShare}
              text={es.technologies.start}
            />
          </div>
          <picture className="flex items-center justify-center">
            <Image
              className=" lg:size-[512px] object-contain xl:size-[700px]"
              src={es.technologies.action.image}
              quality={50}
              width={700}
              priority={false}
              loading="lazy"
              height={700}
              alt={es.author}
              title={es.author}
            />
          </picture>
        </div>
      </BoxContent>
      <BoxContent
        title={es.services.title}
        light={false}
        className="bg-transparent"
      >
        <div className="w-full max-w-[960px] 2xl:max-w-max">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4">
            {es.services.items.map(
              (element, index) =>
                element.active && (
                  <Service
                    key={index}
                    title={element.title}
                    description={element.description}
                    items={element.icons}
                  />
                )
            )}
          </ul>
          <div className="mt-8 max-w-[768px] mx-auto text-center">
            <h4 className="font-bold text-2xl text-light-blue-400 dark:text-white">
              {es.services.action.title}
            </h4>
            <p className="text-xl text-balance mb-2">
              {es.services.action.description}
            </p>
            <InternalLink
              href={`#${ToSlug(es.contact.title)}`}
              icon={faShare}
              text={es.services.start}
            />
          </div>
        </div>
      </BoxContent>
      <BoxContent title={es.projects.title} light={false}>
        <div className="gradient-mask-right overflow-hidden">
          <div className="gradient overflow-hidden gradient-mask-left">
            <ul className="carousel carousel-center w-full gap-4">
              <li className="min-w-[90vw] sm:min-w-[75vw] xl:min-w-[40vw]"></li>
              {es.projects.list.map((element, index) => (
                <Project
                  title={element.title}
                  description={element.description}
                  gallery={element.gallery}
                  index={index}
                  moreLink={element.moreLink}
                  onlineLink={element.onlineLink}
                  sourceLink={element.sourceLink}
                  techs={element.techs}
                  key={index}
                />
              ))}
              <li className="min-w-[90vw] sm:min-w-[75vw] xl:min-w-[40vw]"></li>
            </ul>
          </div>
        </div>
      </BoxContent>
      <BoxContent title={es.contact.title} light={false}>
        <div className="w-full flex gap-4 items-center flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <Form />
            <p className="text-balance text-center my-4 dark:text-dark-gray">
              {es.contact.direct_comm}
            </p>
            <div className="flex justify-center gap-2.5">
              {external.social_media.map((media, index) => (
                <Link
                  key={index}
                  target="_blank"
                  aria-label={media.name}
                  href={media.link}
                  className="dark:bg-dark-blue-500 dark:hover:bg-dark-blue-200 bg-light-blue-400 flex justify-center items-center p-3 text-white hover:bg-light-blue-500 active:scale-95 transition-all rounded-full"
                >
                  <FontAwesomeIcon
                    icon={media.icon}
                    className="size-7"
                    key={index}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex px-8 gap-2.5 md:gap-6 items-center flex-col md:flex-row">
              <Image
                className="rounded-full size-[100px] dark:shadow-glow-reduced"
                src="/davidquint-photo.png"
                quality={20}
                width={100}
                sizes="(max-width: 768px) 14vw, (max-width: 1200px) 9vw, 10vw"
                priority={false}
                loading="lazy"
                height={100}
                alt={es.author}
                title={es.author}
              />
              <div className="md:gap-1 flex flex-col justify-center text-center md:text-left">
                <h3 className="font-bold text-2xl md:text-[32px] text-light-blue-400 dark:text-dark-blue-100">
                  {es.author}
                </h3>
                <p className="text-light-black font-bold text-4xl md:text-[32px] dark:text-white leading-none">
                  {es.home.about_me.title}
                </p>
              </div>
            </div>
            <div className="dark:bg-dark-items p-2 mt-3 bg-white text-light-black dark:text-dark-gray rounded-xl border border-light-blue-200 dark:border-dark-blue-200 flex flex-col *:w-full">
              <p className="p-4">{es.home.about_me.description}</p>
              <InternalLink
                href={external.domain}
                icon={faBriefcase}
                text={es.contact.visit}
              />
            </div>
          </div>
        </div>
      </BoxContent>
    </>
  );
}
