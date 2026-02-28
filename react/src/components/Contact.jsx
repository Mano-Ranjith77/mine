import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log("Name:", formData.get("name"));
    console.log("Email:", formData.get("email"));
    console.log("Message:", formData.get("message"));

    setSuccessMessage("Message Sent Successfully ✅");
    e.target.reset();
  };

  return (
    <>
      <header className="contact-header">
        <p>We’d love to hear from you</p>
      </header>

      <section className="contact-container">
        <div className="contact-card">
          
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p><strong>Shop Name:</strong> Modern Lifestyle</p>
            <p><strong>Email:</strong> modernlifestyle@gmail.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Address:</strong> Chennai, Tamil Nadu, India</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send a Message</h2>

            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="4" placeholder="Your Message" required />

            <button type="submit">Send Message</button>

            {successMessage && (
              <p className="contact-success">{successMessage}</p>
            )}
          </form>

        </div>
      </section>

      <footer className="contact-footer">
        <p>© 2025 Modern Lifestyle | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Contact;