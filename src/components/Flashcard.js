import React, { useState } from "react";
import '../styles/Flashcard.css'
import { CurrentFlashcard, DeleteButton } from "."

const Flashcard = ({ item, index, flashcards }) => {
    const { name } = item

    const [cardActive, setCardActive] = useState(false)

    const clickHandler = () => {
        setCardActive(true)
    }

    return (
        <>
            <div className="Flashcard" onClick={clickHandler}>
                <div className="Flashcard__name">{name}</div>
                <DeleteButton className="DeleteButton" />
            </div>
            {cardActive && <CurrentFlashcard
                setCardActive={setCardActive}
                index={index}
                flashcards={flashcards}
            />}
        </>
    )
}

export default Flashcard