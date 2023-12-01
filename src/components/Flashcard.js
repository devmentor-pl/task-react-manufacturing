import React from "react";
import '../styles/Flashcard.css'

const Flashcard = ({ item }) => {
    const { name, definition } = item

    return (
        <div className="Flashcard">
            <div className="Flashcard__name">{name}</div>

            {/* <div className="Flashcard__definition">{definition}</div> */}
        </div>
    )
}

export default Flashcard