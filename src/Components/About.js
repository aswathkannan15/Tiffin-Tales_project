import React from "react";
import aboutImg from "../Assets/menu2.jpg";

export default function About() {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img src={aboutImg} alt="about" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">We Are Tiffin & Tales</h2>
          <p className="text-muted">
            Where tradition simmers, and every bite tells a story.
We serve authentic South Indian flavors—from spicy curries to soulful rice dishes—made with age-old recipes and a whole lot of love.
Step into our cozy space or order in for a taste of heritage, fast and fresh.
          </p>
          <h4 className="fw-bold mb-3">Why choose us?</h4>
          <p>Handpicked spices, just like grandma used</p>
          <p>Meals that feel like home</p> 
          <p>Quick delivery, no compromise on tast</p>
            
          <button className="btn btn-outline-primary mt-3">Read More</button>
        </div>
      </div>
    </section>
  );
}
