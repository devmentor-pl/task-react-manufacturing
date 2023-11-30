import React from "react";
import '../styles/DeleteButton.css'
import { useDispatch } from "react-redux";
import { setInactiveCategoryForm, deleteCategory } from "../modules/flashcards";

const DeleteButton = ({buttonId, itemId}) => {
    const dispatch = useDispatch()
    

    const clickHandler = () => {
        if (buttonId === 'CategoryForm') {
            dispatch(setInactiveCategoryForm()) 
        }
        if (buttonId==="Category") {
            console.log()
            dispatch(deleteCategory(itemId))
        }

    }

    return <button onClick={clickHandler} className="DeleteButton">+</button>
}

export default DeleteButton