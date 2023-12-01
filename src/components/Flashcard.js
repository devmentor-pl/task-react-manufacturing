import React, { useState } from "react";
import '../styles/Flashcard.css'

const Flashcard = ({ item }) => {
    // const [ reversed, setReversed ] = useState(false)
    const { name, definition } = item

    const clickHandler = (e) => {
        console.log(e)
        // setReversed(true)
    }

    return (
        <div className="Flashcard" onClick={clickHandler}>
            <div className="Flashcard__name">{name}</div>            
        </div>
    )
}

export default Flashcard