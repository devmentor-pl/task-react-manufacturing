import React from "react";
import { CreateButton } from '../'
import '../../styles/Home.css'

const Home = () => {
    return (
        <section className="Home__header">
            <h2 className="Home__heading">Create your own flashcards and start learning!</h2>
            <div>
                <CreateButton>Create a new category</CreateButton>
            </div>
        </section>

    )
}

export default Home