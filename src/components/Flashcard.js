import React, { useState } from "react";
import '../styles/Flashcard.css'
import { CurrentFlashcard } from "."

const Flashcard = ({ item }) => {
    const { name, definition } = item

    const [cardActive, setCardActive] = useState(false)

    const clickHandler = (e) => {
        setCardActive(true)

    }

    return (
        <>
        <div className="Flashcard" onClick={clickHandler}>
            <div className="Flashcard__name">{name}</div>            
        </div>
            {cardActive && <CurrentFlashcard definition={definition} name={name}/>}
        </>
    )
}

export default Flashcard