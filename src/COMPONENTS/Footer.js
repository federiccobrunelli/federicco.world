import React from 'react';
import { NavLink } from 'react-router-dom';

export function Footer() {
    return(
        <div className="footer">

        <NavLink className="Link" to="/hire">hire</NavLink>
        <NavLink className="Link" to="/about">about</NavLink>
        <NavLink className="Link" exact="true" to="/">home</NavLink>
        <NavLink className="Link" to="/files/Brunelli_Federico_Resume.pdf" target="_blank">curriculum</NavLink>
        <NavLink className="Link" to="/work">projects</NavLink>
        <NavLink className="Link" to="/contact">contact</NavLink>

      </div>
    )
}