import { Link } from "react-router-dom";
import logo from "../Assets/logo.jpg"; 

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg p-3 bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center fw-bold h1 fs-2 text-primary" to="/">
          <img 
            src={logo} 
            alt="Tiffin & Tales Logo" 
            width="70"
            height="70" 
            className="me-2 rounded-circle"
          />
          Tiffin & Tales
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end fs-5" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/menu">Menus</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/book">Book Table</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
