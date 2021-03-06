import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


const navbar = () => {
  return ( 
   
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" >For-Tech</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        </li>
          <li className="nav-item"> 
            <Link to="/productos/monitor" className="nav-link active" href="#">Monitores</Link>
            </li>

            <li className="nav-item"> 
            <Link to="/productos/gamer" className="nav-link active" href="#">CPU Gamer</Link>
            </li>

            <li className="nav-item"> 
            <Link to="/productos/notebook"className="nav-link active" href="#">Notebook Gamer</Link>
            </li>
           
        <li className="mover" >  <CartWidget/> </li>
      </ul>
    </div>
  </div>
</nav>
 
   );
}
 
export default navbar;