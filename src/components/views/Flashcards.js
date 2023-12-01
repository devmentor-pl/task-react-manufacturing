import React from "react";
import '../../styles/Flashcards.css'
import { useSelector } from "react-redux";
import { CreateButton, Flashcard } from '../'
import { useParams } from "react-router-dom";

const Flashcards = () => {
    const { category } = useParams()
    const { categories } = useSelector(state => state.flashcards)

    const [currentCategory] = categories.filter(c => c.name.toLowerCase() === category)

    const { list: flashcards } = currentCategory
    
    const renderFlashcards = () => {
        return flashcards.map(card => <Flashcard key={card.id} item={card}/>)
    }

    return (
        <section className="Flashcards">
            <h2 className="Flashcards__heading">Your flashcards in category: <i>{category}</i></h2>
            <CreateButton>Create a new flashcard</CreateButton>
            {flashcards.length === 0 ?
                <p className="Flashcards__message">You don't have any flashcard yet</p> :
                (<>
                    <h3 className="Flashcards__heading">Click one and start learning!</h3>
                    <div className="Flashcards__box">{renderFlashcards()}</div>
                </>)
            }

        </section>

    )
}

export default Flashcards