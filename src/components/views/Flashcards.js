import React, { useState } from "react";
import '../../styles/Flashcards.css'
import { useSelector } from "react-redux";
import { CreateButton, Flashcard, FlashcardForm } from '../'
import { useParams } from "react-router-dom";

const Flashcards = () => {
    const { category } = useParams()
    const { categories } = useSelector(state => state.flashcards)
    const [formIsActive, setFormIsActive] = useState(false)

    if (categories.length === 0) {
        
        return <p className="Flashcards__message">You don't have any flashcard yet</p>} // nie wiem, jak to inaczej rozwiązać. Wcześniej bez tego warunku, jeśli odświeżałam stronę na zakładce flashcards, pojawiał się błąd (categories było puste). 
    const [currentCategory] = categories.filter(c => c.name.toLowerCase() === category)

    console.log('po')

    const { list: flashcards = [] } = currentCategory


    const renderFlashcards = () => {
        return flashcards.map((card, index) => <Flashcard
            key={card.id}
            item={card}
            index={index}
            category={category}
            flashcards={flashcards}
        />)
    }

    return (
        <section className="Flashcards">
            <h2 className="Flashcards__heading">Your flashcards in category: <i>{category}</i></h2>
            <CreateButton setPopupActive={setFormIsActive}>Create a new flashcard</CreateButton>
            {flashcards.length === 0 ?
                <p className="Flashcards__message">You don't have any flashcard yet</p> :
                (<>
                    <h3 className="Flashcards__heading">Click one and start learning!</h3>
                    <div className="Flashcards__box">{renderFlashcards()}</div>
                </>)
            }
            {formIsActive && <FlashcardForm setPopupActive={setFormIsActive} category={category} />}
        </section>
    )
}

export default Flashcards