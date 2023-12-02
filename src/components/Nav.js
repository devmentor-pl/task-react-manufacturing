import React from "react";
import '../styles/Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="Nav">
            <ul className="Nav__list">
                <li className="Nav__item">
                    <Link to='/' className="Nav__link">Home</Link>
                </li>
                <li className="Nav__item Nav__item--middle">
                    <Link to='/about' className="Nav__link">About</Link>
                </li>
                <li className="Nav__item">
                    <Link to='/categories' className="Nav__link">Your flashcards</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav