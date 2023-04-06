import React from "react";
import { NavLink } from "react-router-dom";
import '../css/index.css'

function NavbarLinks() {
    return (
        <div>
            <NavLink className="navlinks-list" exact to="/shop">Shop</NavLink>
            <NavLink className="navlinks-list" exact to="/drivers">Drivers</NavLink>
            <NavLink className="navlinks-list" exact to="/support">Support</NavLink>
        </div>
    )
}

export default NavbarLinks;
