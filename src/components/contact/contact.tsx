const Contact = () => {
  const contactOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={contactOnSubmit}
      className="flex flex-col w-full text-light gap-4"
    >
      <div className="flex gap-4 w-full">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border border-light rounded-md bg-dark p-2 placeholder:text-light/50 focus:ring-light focus:ring-1 focus:outline-none flex-grow"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="border border-light rounded-md bg-dark p-2 placeholder:text-light/50 focus:ring-light focus:ring-1 focus:outline-none flex-grow"
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
