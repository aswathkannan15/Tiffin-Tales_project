import React from "react";

export default function Contact() {
  return (
    <section className="container py-5">
      <h2 className="fw-bold mb-4 text-center">Contact Us</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h5>Get in Touch</h5>
          <p>📍 Address: Chennai</p>
          <p>📞 Phone: +91 123456789</p>
          <p>✉️ Email: feane@gmail.com</p>
        </div>
        <div className="col-md-6">
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="form-control mb-3"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="form-control mb-3"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="form-control mb-3"
              required
            ></textarea>
            <button className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
