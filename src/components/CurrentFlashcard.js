import React, { useState } from "react";
import Popup from "./Popup";
import '../styles/CurrentFlashcard.css'
import '../styles/Button.css'
import DeleteButton from "./DeleteButton";

const CurrentFlashcard = ({ definition, name }) => {
    const [definitionActive, setDefinitionActive] = useState(false)

    const clickHandler = () => {
        setDefinitionActive(state => !state)
    }

    return (
        <Popup>
            <section className="CurrentFlashcard">
                {!definitionActive ? <div className="CurrentFlashcard__name">{name}</div> :
                    <div className="CurrentFlashcard__name">{definition}</div>}
                <button
                    className="CurrentFlashcard__button Button"
                    onClick={clickHandler}>
                    {!definitionActive ? 'Definition' : 'Card name'}
                </button>
                <DeleteButton />
                <button className="CurrentFlashcard__arrow CurrentFlashcard__arrow--left Button">&lsaquo;</button>
                <button className="CurrentFlashcard__arrow CurrentFlashcard__arrow--right Button">&rsaquo;</button>
            </section>
        </Popup>
    )
}

export default CurrentFlashcard