import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface InternalLinkTypes {
    href: string,
    icon: IconDefinition
    text: string
}

export default function InternalLink({href, icon, text} : InternalLinkTypes) {
    
    return(
        <Link
        href={href}
        className="flex px-4 justify-center items-center w-full gap-2 py-2 rounded-full bg-light-blue-100 dark:bg-dark-blue-500 dark:hover:bg-dark-blue-200 dark:text-dark-blue-100  hover:bg-light-blue-300 active:scale-95 transition-all text-light-blue-500"
      >
        <FontAwesomeIcon
          icon={icon}
          className="size-4"  
        />
        <span>{text}</span>
        </Link>
    )
}