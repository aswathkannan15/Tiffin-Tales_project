import React from "react";

export default function BookTable() {
  return (
    <section className="container py-5">
      <div className="row g-4">
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">Book a Table</h2>
          <form>
            <input type="text" className="form-control mb-3" placeholder="Full Name" />
            <input type="tel" className="form-control mb-3" placeholder="Phone Number" />
            <input type="email" className="form-control mb-3" placeholder="Email Address" />
            <input type="number" className="form-control mb-3" placeholder="Number of Guests" />
            <input type="date" className="form-control mb-3" />
            <button type="submit" className="btn btn-primary w-100">Book Table</button>
          </form>
        </div>
        <div className="col-md-6">
          <iframe
            title="map"
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=chennai+(foodapp)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
