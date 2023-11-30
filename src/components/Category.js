import React from "react";
import '../styles/Category.css'
import { DeleteButton } from '.'

const Category = ({ item }) => {
    return (
        <div className="Category">
            <p className="Category__name">{item.name}</p>
            <DeleteButton buttonId="Category"/>
        </div>
    )
}

export default Category