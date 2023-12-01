import React from "react";
import '../../styles/Flashcards.css'
import { useSelector } from "react-redux";
import { Category, CreateButton } from '../'
import { useParams } from "react-router-dom/cjs/react-router-dom";

const Flashcards = () => {
    const { category } = useParams()
    const { categories } = useSelector(state => state.flashcards)

    const [currentCategory] = categories.filter(c => c.name.toLowerCase() === category)

    const { list } = currentCategory
    console.log(list)

    // const { categories } = useSelector(state => state.flashcards)
    // const renderCategory = () => {

    //     return categories.map(item => <Category key={item.id} item={item} />)
    // }
    return (
        <section className="Flashcards">
            <h2 className="Flashcards__heading">Your flashcards in category: <i>{category}</i></h2>
            {/* {Flashcards.length !== 0 && <h3>Click the category to see the flashcards</h3>}
            {Flashcards.length === 0 ?
                 <p className="Flashcards__message">You don't have any category yet</p> :
                <div className="Flashcards__box">{renderCategory()}</div>
            } */}
            <CreateButton>Create new flashcard</CreateButton>
        </section>

    )
}

export default Flashcards