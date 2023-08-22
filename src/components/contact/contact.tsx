import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

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
          className="border border-light rounded-md bg-dark p-2 placeholder:text-light/50 focus:ring-light focus:ring-1 focus:outline-none w-1/2"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="border border-light rounded-md bg-dark p-2 placeholder:text-light/50 focus:ring-light focus:ring-1 focus:outline-none w-1/2"
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="border border-light rounded-md bg-dark p-2 placeholder:text-light/50 focus:ring-light focus:ring-1 focus:outline-none flex-grow"
      />
      <textarea
        name="message"
        placeholder="Message"
        rows={5}
        className="border border-light rounded-md bg-dark p-2 placeholder:text-light/50 focus:ring-light focus:ring-1 focus:outline-none flex-grow resize-none"
      />
      <button
        type="submit"
        className="bg-dark text-light border border-light rounded-md hover:bg-light/80 hover:text-dark w-fit px-6 py-2 mt-4"
      >
        Send
      </button>
    </form>
  );
};

export default Contact;
