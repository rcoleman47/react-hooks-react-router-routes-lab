import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
 

  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink 
          to="/" 
          exact >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="/Movies" >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="/Directors"  >
            Directors
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="/Actors"  >
            Actors
          </NavLink>
        </li>
      </ul>
   </div>
    );
}

export default NavBar;
