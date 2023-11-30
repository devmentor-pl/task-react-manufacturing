import React from "react";
import '../../styles/Categories.css'
import CreateButton from "../CreateButton";


const Categories = () => {

    return (
        <section className="Categories">
            <h2 className="Categories__heading">Your current categories</h2>
            <p className="Categories__message">You don't have any category yet</p>
            <CreateButton>Create new category</CreateButton>
        </section>

    )
}

export default Categories