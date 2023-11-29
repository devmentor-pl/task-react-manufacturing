import React from "react";
import '../styles/Button.css'

const Button = props => {
    const { children } = props
    return <button className="Button">{children}</button>
}

export default Button