import React from "react";
import '../styles/Popup.css'

const Popup = (props) => {
    
    return (
        <div className="Popup">
             <section className="Popup__section">
                {props.children}
             </section>
        </div>
    )
}

export default Popup