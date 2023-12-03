import React, { useState } from "react";
import Popup from "./Popup";
import '../styles/CurrentFlashcard.css'
import '../styles/Button.css'
import DeleteButton from "./DeleteButton";

const CurrentFlashcard = ({ setCardActive, index, flashcards }) => {
    const [definitionActive, setDefinitionActive] = useState(false)
    const [currentCardIndex, setCurrentCardIndex] = useState(index)

    const { name, definition } = flashcards[currentCardIndex]

    const changeNameHandler = () => {
        setDefinitionActive(state => !state)
    }

    const arrowHandler = sign => {
        if (sign === '<') {
            setCurrentCardIndex(state => state - 1)
        }
        if (sign === '>') {
            setCurrentCardIndex(state => state + 1)
        }
        setDefinitionActive(false)
    }

    return (
        <Popup>
            <section className="CurrentFlashcard">
                {!definitionActive ? <div className="CurrentFlashcard__name">{name}</div> :
                    <div className="CurrentFlashcard__name">{definition}</div>}
                <button
                    className="CurrentFlashcard__button Button"
                    onClick={changeNameHandler}>
                    {!definitionActive ? 'Definition' : 'Card name'}
                </button>
                {currentCardIndex !== 0 && <button
                    className="CurrentFlashcard__arrow CurrentFlashcard__arrow--left Button"
                    onClick={() => arrowHandler('<')}>
                    &lsaquo;
                </button>}
                {currentCardIndex !== flashcards.length -1 && <button
                    className="CurrentFlashcard__arrow CurrentFlashcard__arrow--right Button"
                    onClick={() => arrowHandler('>')}>
                    &rsaquo;
                </button>}
                <DeleteButton buttonId='CurrentFlashcard' setPopupActive={setCardActive} />
            </section>
        </Popup>
    )
}

export default CurrentFlashcard