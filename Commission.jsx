
import { Link } from "react-router-dom";

function Commission() {
  return (
    <section className="contact">
      <h2>Request a Commission</h2>

      <p>
        Interested in a personalised painting or
        digital artwork? Tell us what you have in mind.
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          required
        />

        <select required defaultValue="">
          <option value="" disabled>
            Select Artwork Type
          </option>
          <option value="painting">Original Painting</option>
          <option value="digital">Digital Artwork</option>
        </select>

        <textarea
          placeholder="Describe your artwork request"
          rows="5"
          required
        />

        <button type="submit">
          Request a Commission
        </button>
      </form>

      <Link to="/contact" className="button">
        General Enquiry
      </Link>
    </section>
  );
}

export default Commission;
