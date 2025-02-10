import Button from "./Button";

const ContactForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-1 font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          className="w-full p-2 border rounded"
          required
        ></textarea>
      </div>
      <Button>Send Message</Button>
    </form>
  );
};

export default ContactForm;
