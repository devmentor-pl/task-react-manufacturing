import React from "react";
import { Button } from '../'
import '../../styles/Home.css'

const Home = () => {

    return (
        <section className="Home__header">
            <h2 className="Home__heading">Create your own flashcards and start learning!</h2>
            <div>
                <Button>Create new category</Button>
            </div>
        </section>

    )
}

export default Home