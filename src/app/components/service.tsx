import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IService from "../types/TypeService";

export default function Service(service: IService) {
  return (
    <>
      <li className="bg-black border-2 bg-dark-gradient px-4 lg:px-8 text-center border-dark-blue-200 flex flex-col items-center justify-center rounded-xl aspect-square">
        <div className="flex gap-1 mb-2">
          {service.items.map((element, index) => (
            <FontAwesomeIcon icon={element} key={index} className="size-10 lg:size-20 text-dark-yellow" />
          ))}
        </div>
        <h2 className="text-dark-blue-100 font-bold text-2xl mb-1">{service.title}</h2>
        <p>{service.description}</p>
      </li>
    </>
  );
}
