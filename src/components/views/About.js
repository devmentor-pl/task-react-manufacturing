import React from "react";
import '../../styles/About.css'
import { Link } from 'react-router-dom';


const About = () => {

    return (
        <section className="About">
            <h2 className="About__heading">Below there are few tips how to use our tool: </h2>
            <ol className="About__list">
                <li className="About__item">
                    <p>
                        If you want to create a new category:
                    </p>
                    <p>go to <Link className="About__link" to="/">Home</Link> and press <b>Create a category</b> button</p>
                </li>
                <li className="About__item">
                    <p>
                        If you want to check the current categories:
                    </p>
                    <p>go to <Link className="About__link" to="/categories">Your flashcards</Link></p>
                </li>
                <li className="About__item">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, iure.
                    </p>
                </li>
                <li className="About__item">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, iure.
                    </p>
                </li>
            </ol>
        </section>

    )
}

export default About