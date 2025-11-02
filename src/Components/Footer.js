import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>📍 Chennai</p>
            <p>📞 +91 123456789</p>
            <p>✉️ tiffinandtales@gmail.com</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>About Tiffin & Tales</h5>
            <p>
              We serve the finest food with the best ingredients and love. Visit us for an unforgettable dining experience.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Opening Hours</h5>
            <p>Everyday</p>
            <p>10:00 AM - 10:00 PM</p>
          </div>
        </div>
        <p className="mt-4 text-secondary">© 2025 Tiffin & Tales. All rights reserved.</p>
      </div>
    </footer>
  );
}
