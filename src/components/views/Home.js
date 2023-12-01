import React from "react";
import { CreateButton, CategoryForm } from '../'
import '../../styles/Home.css'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';



const Home = () => {
    const { categoryFormIsActive } = useSelector(state => state.flashcards)


    return (<>
        <section className="Home__header">
            <h2 className="Home__heading">Create your own flashcards and start learning!</h2>
            <h4>Press the button, fill the form and go to <Link className="About__link" to='/categories'>Your Categories</Link></h4>
            <div>
                <CreateButton>Create a new category</CreateButton>
            </div>
        </section>
        {categoryFormIsActive && <CategoryForm />}

    </>
    )
}

export default Home