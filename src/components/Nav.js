import React from "react";
import '../styles/Nav.css'

const Nav = () => {
    return (
        <nav className="Nav">
            <ul className="Nav__list">
                <li className="Nav__item">
                    <a href="/" className="Nav__link">Home</a>
                </li>
                <li className="Nav__item Nav__item--middle">
                    <a href="" className="Nav__link">About</a>
                </li>
                <li className="Nav__item">
                    <a href="" className="Nav__link">Your categories</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav