import Image from "next/image";
import IProject from "../types/TypeProject";

export default function Project(project: IProject) {
  const PROJECT_DIRECTORY = "/projects";

  return (
    <li
      style={{ animationDelay: (project.index * 75).toString().concat("ms") }}
      className={`carousel-item w-[95vw] sm:w-[75vw] xl:w-[40vw] flex flex-col rounded-lg overflow-hidden`}
    >
      <div className="carousel">
        {project.gallery.map((image, index) => (
          <Image
            className="w-full carousel-item aspect-video scroll snap-always"
            alt={`${project.title} - ${index}`}
            width={480}
            height={270}
            quality={60}
            priority={false}
            key={index}
            loading="lazy"
            src={`${PROJECT_DIRECTORY}${image}`}
          />
        ))}
      </div>
      <div className="flex flex-col justify-between flex-1 py-2.5 px-5">
        <div className="flex gap-1 mt-3.5 text-dark-gray">
          {project.techs.map((tech, index) => (
            <tech.icon size="36" key={index} />
          ))}
        </div>
        <div className="flex flex-col flex-1 justify-between">
          <div>
            <h2 className="text-light-blue-500 dark:text-dark-blue-100 font-bold text-3xl my-2">
              {project.title}
            </h2>
            <p className="text-light-black dark:text-dark-gray">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
