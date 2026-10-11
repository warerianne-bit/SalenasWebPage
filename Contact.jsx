import InstagramSection from "../Components/InstagramSection";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact the Artist</h2>

      <p>
        For artwork purchases, commissions or enquiries,
        please get in touch.
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        />

        <button type="submit">
          Send Message
        </button>
      </form>

      <InstagramSection />
    </section>
  );
}

export default Contact;
