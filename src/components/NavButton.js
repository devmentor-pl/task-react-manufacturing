import React from "react";
import '../styles/NavButton.css'

const NavButton = ({ navIsActive, setNavIsActive }) => {

    const clickHandler = () => {
        setNavIsActive(state=>!state)
    }

    return (
        <div className={navIsActive ? "NavButton NavButton--clicked" : "NavButton"} onClick={clickHandler}>
            <div className="NavButton__bar NavButton__bar--bar1"></div>
            <div className="NavButton__bar NavButton__bar--bar2"></div>
            <div className="NavButton__bar NavButton__bar--bar3"></div>
        </div>
    )
}

export default NavButton