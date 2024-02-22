"use client"
import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import en from "../sources/en";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import es from "../sources/es";

export default function Form() {
  const form = useRef<HTMLFormElement>(null);
  const [isEmailSent, setIsEmailSent] = useState<boolean>();
  const [disableButton, setDisableButton] = useState<boolean>();
  const [inProgress, setInprogress] = useState<boolean>();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInprogress(true);
    emailjs
      .sendForm(
        "service_zmht5zq",
        "template_bq67pfa",
        form.current || "",
        "aqJFVCZrRMTDkeRGM"
      )
      .then(
        (result) => {
          setIsEmailSent(true);
          setDisableButton(true);
          setInprogress(false);
        },
        (error) => {
          setIsEmailSent(false);
          setDisableButton(true);
          setInprogress(false);
        }
      );
  };

  return (
    <>
      {isEmailSent != null && (
        <div
          className={`md:col-span-6 md:mx-[5%] animate-jump mb-4 py-4 rounded-lg text-center text-black dark:text-white ${
            isEmailSent
              ? "bg-light-green dark:bg-dark-green"
              : "bg-light-red dark:bg-dark-red"
          }`}
        >
          {isEmailSent ? es.contact.form.success : es.contact.form.fail}
        </div>
      )}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="md:col-span-4 "
      >
        <div className="flex flex-col mb-2">
          <label className="hidden">{es.contact.form.names}</label>
          <input
            type="text"
            name="user_name"
            required
            className="h-16 placeholder:text-sm bg-light-gray rounded-lg border-b-2 border-light-blue-400 px-2.5 outline-light-blue-300 dark:bg-dark-bg dark:border-dark-blue-500 dark:focus:outline-dark-blue-200 dark:focus:bg-dark-items"
            placeholder={es.contact.form.names}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label className="hidden">{es.contact.form.email}</label>
          <input
            className="h-16 placeholder:text-sm bg-light-gray rounded-lg border-b-2 border-light-blue-400 px-2.5 outline-light-blue-300 dark:bg-dark-bg dark:border-dark-blue-500 dark:focus:outline-dark-blue-200 dark:focus:bg-dark-items"
            type="email"
            name="user_email"
            required
            placeholder={es.contact.form.email}
          />
        </div>
        <div className="flex flex-col">
          <label className="hidden">{es.contact.form.message}</label>
          <textarea
            className="min-h-32 placeholder:text-sm bg-light-gray rounded-lg border-b-2 border-light-blue-400 px-2.5 py-3 outline-light-blue-300 dark:bg-dark-bg dark:border-dark-blue-500 dark:focus:outline-dark-blue-200 dark:focus:bg-dark-items"
            name="message"
            rows={4}
            placeholder={es.contact.form.message}
          />
        </div>
        <button
          disabled={disableButton}
          className="flex justify-center items-center w-full gap-2 mb-4 mt-2 py-2 rounded-full bg-light-blue-100 dark:bg-dark-blue-500 enabled:dark:hover:bg-dark-blue-200 dark:text-dark-blue-100  enabled:hover:bg-light-blue-300 enabled:active:scale-95 disabled:brightness-90 disabled:scale-95 transition-all text-light-blue-500"
        >
          <FontAwesomeIcon
            icon={inProgress ? faSpinner : faPaperPlane}
            className={`${inProgress && "animate-spin"} size-3.5`}
          />
          <span>{es.contact.form.send}</span>
        </button>
      </form>
    </>
  );
}
