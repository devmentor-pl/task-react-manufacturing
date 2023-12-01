import React from "react";
import '../styles/Flashcard.css'

const Flashcard = ({ item }) => {
    const { name, definition } = item

    const clickHandler = (e) => {
        console.log(e)

    }

    return (
        <>
        <div className="Flashcard" onClick={clickHandler}>
            <div className="Flashcard__name">{name}</div>            
        </div>
        </>
    )
}

export default Flashcard