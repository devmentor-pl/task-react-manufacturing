import React from "react";
import { Button } from '../'
import '../../styles/Home.css'

const Home = () => {

    return (
        <section className="Home__header">
            <h1 className="Home__heading">Create your own flashcards and start learning!</h1>
            <Button>Create new category</Button>
        </section>

    )
}

export default Home