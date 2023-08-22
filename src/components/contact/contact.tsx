import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface ChildProps {
  setShowNotification: React.Dispatch<React.SetStateAction<boolean>>;
}

const Contact: React.FC<ChildProps> = ({ setShowNotification }) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        formRef.current as HTMLFormElement,
        `${import.meta.env.VITE_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          formRef.current?.reset();
          setIsLoading(false);
          setShowNotification(true);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="flex flex-col w-full text-light gap-4"
    >
      <div className="flex gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          disabled={isLoading}
          className="border border-light rounded-md bg-dark p-2 placeholder:text-light/50 focus:ring-light focus:ring-1 focus:outline-none w-1/2"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          disabled={isLoading}
          className="border border-light rounded-md bg-dark p-2 placeholder:text-light/50 focus:ring-light focus:ring-1 focus:outline-none w-1/2"
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        disabled={isLoading}
        className="border border-light rounded-md bg-dark p-2 placeholder:text-light/50 focus:ring-light focus:ring-1 focus:outline-none flex-grow"
      />
      <textarea
        name="message"
        placeholder="Message"
        rows={5}
        disabled={isLoading}
        className="border border-light rounded-md bg-dark p-2 placeholder:text-light/50 focus:ring-light focus:ring-1 focus:outline-none flex-grow resize-none"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="bg-dark text-light border border-light rounded-md hover:bg-light/80 hover:text-dark w-fit px-6 py-2 mt-4 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
};

export default Contact;
