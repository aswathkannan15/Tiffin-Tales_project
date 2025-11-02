import React from "react";
import bg from "../Assets/pexels-sarthak-2782336-4331490.jpg";

export default function Hero() {
  return (
    <div
      className="text-center text-white d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="bg-dark bg-opacity-50 p-5 rounded">
        <h1 className="fw-bold">Welcome to Tiffin & Tales</h1>
        <p className="lead">Authentic flavors, homely vibes, and heritage served hot.</p>
        <button className="btn btn-warning">Order Now</button>
      </div>
    </div>
  );
}
