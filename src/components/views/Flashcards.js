import React from "react";
import '../../styles/Flashcards.css'
import { useSelector } from "react-redux";
import { Category, CreateButton } from '../'
import { useParams } from "react-router-dom/cjs/react-router-dom";

const Flashcards = () => {
    const { category } = useParams()
    const { categories } = useSelector(state => state.flashcards)

    const [currentCategory] = categories.filter(c => c.name.toLowerCase() === category)

    const { list: flashcards } = currentCategory
    console.log(flashcards)

    const renderFlashcards = () => {
        return flashcards.map(f => <div>{f.name}</div>)
    }

    return (
        <section className="Flashcards">
            <h2 className="Flashcards__heading">Your flashcards in category: <i>{category}</i></h2>
            {flashcards.length === 0 ?
                 <p className="Flashcards__message">You don't have any category yet</p> :
                <div className="Flashcards__box">{renderFlashcards()}</div>
            }
            <CreateButton>Create a new flashcard</CreateButton>
        </section>

    )
}

export default Flashcards