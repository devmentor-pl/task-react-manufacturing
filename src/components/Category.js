import React from "react";
import '../styles/Category.css'
import { DeleteButton } from '.'

const Category = ({ item }) => {
    const clickHandler = ()=> {
        // console.log('trezs')
    }
    return (
        <div className="Category" onClick={clickHandler}>
            <p className="Category__name">{item.name}</p>
            <DeleteButton buttonId="Category" itemId={item.id}/>
        </div>
    )
}

export default Category