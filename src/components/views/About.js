import React from "react";
import '../../styles/About.css'
import { Link } from 'react-router-dom';


const About = () => {

    return (
        <section className="About">
            <h2 className="About__heading">Below there are few tips how to use our tool: </h2>
            <ol>
                <li>
                    <p>
                        If you want to create a new category:
                    </p>
                    <p>go to <Link className="About__link" to="/">Home</Link> and press <b>Create category button</b></p>
                </li>
                <li>
                    <p>
                        If you want to check the current categories:
                    </p>
                    <p>go to <Link className="About__link" to="/categories">Your categories</Link></p>
                </li>
                <li>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, iure.
                    </p>
                    <p>go to <b>Your Categories</b></p>
                </li>
                <li>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, iure.
                    </p>
                    <p>go to <b>Your Categories</b></p>
                </li>
            </ol>
        </section>

    )
}

export default About