import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Message Sent Successfully");
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <section className="contact-page">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </label>
        <label>
          Message
          <textarea
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          />
        </label>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
