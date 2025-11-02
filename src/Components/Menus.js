import React from "react";


import menu1 from "../Assets/pexels-markus-winkler-1430818-19969210.jpg";
import menu2 from "../Assets/parotta-65.jpeg";
import menu3 from "../Assets/dosa2.jpg";


const MenuItem = ({ title, desc, price, image }) => (
  <div className="col-md-4 mb-4">
    <div className="card text-center shadow-sm h-100">
      <img src={image} className="card-img-top p-3" alt={title} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">{desc}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold">₹{price}</span>
          <button className="btn btn-outline-primary btn-sm">
            <i className="bi bi-cart"></i> Add
          </button>
        </div>
      </div>
    </div>
  </div>
);


export default function Menus() {
  const menuData = [
    {
      title: "Chicken Curry",
      desc: "Spicy Chettinad-style chicken curry with rich flavors",
      price: 220,
      image: menu1,
    },
    {
      title: "Dosa",
      desc: "Crispy dosa with hot sambar and fresh coconut chutney",
      price: 120,
      image: menu3,
    },
    {
      title: "Parotta Set",
      desc: "Soft layered parotta served with mutton gravy",
      price: 160,
      image: menu2,
    },
  ];

  return (
    <section className="container py-5">
      <h2 className="text-center mb-5 fw-bold text-primary">Our Menus</h2>
      <div className="row">
        {menuData.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}
