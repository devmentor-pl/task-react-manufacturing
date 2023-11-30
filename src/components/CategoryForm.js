import React from "react";
import '../styles/CategoryForm.css'

const CategoryForm = () => {
    return (
        <div className="Form__box">
            <section className="Form__popup">
                <form action="" className="Form__form">
                    <label className="Form__label">Category name
                        <input type="text" className="Form__input" />
                    </label>
                    <label className="Form__label--submit">
                        <input type="submit" className="Form__input Form__input--submit" value="create" />
                    </label>
                </form>
                <button className="Form__button">+</button>
            </section>
        </div >
    )
}

export default CategoryForm