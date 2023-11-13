import React from "react";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have questions or concerns? Reach out to us!</p>

      <form className="contact-form">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" />

        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Type your message here"
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
