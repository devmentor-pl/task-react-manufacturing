import React, { useState } from "react";
import '../styles/Flashcard.css'
import FlashcardForm from "./FlashcardForm";

const Flashcard = ({ item }) => {
    // const [ reversed, setReversed ] = useState(false)
    const { name, definition } = item
    const [formIsActive, setFormIsActive] = useState(false)

    const clickHandler = (e) => {
        console.log(e)

        setFormIsActive(true)
        // setReversed(true)
    }

    return (
        <>
        <div className="Flashcard" onClick={clickHandler}>
            <div className="Flashcard__name">{name}</div>            
        </div>
            {formIsActive && <FlashcardForm />}
        </>
    )
}

export default Flashcard