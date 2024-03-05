import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IService from "../types/TypeService";

export default function Service(service: IService) {
  return (
    <>
      <li className="dark:bg-black border-2 bg-light-gradient dark:bg-dark-gradient px-4 lg:px-8 text-center border-light-blue-300 dark:border-dark-blue-200 flex flex-col items-center justify-center rounded-xl aspect-square">
        <div className="flex gap-1 mb-2">
          {service.items.map((element, index) => (
            <FontAwesomeIcon icon={element} key={index} className="size-10 lg:size-20 text-dark-yellow" />
          ))}
        </div>
        <h3 className="dark:text-dark-blue-100 text-light-blue-400 font-bold text-2xl mb-1">{service.title}</h3>
        <p>{service.description}</p>
      </li>
    </>
  );
}
