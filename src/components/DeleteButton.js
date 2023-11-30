import React from "react";
import '../styles/DeleteButton.css'
import { useDispatch } from "react-redux";
import { setInactiveCategoryForm } from "../modules/flashcards";

const DeleteButton = () => {
    const dispatch = useDispatch()

    const clickHandler = () => {
        dispatch(setInactiveCategoryForm())
    }

    return <button onClick={clickHandler} className="DeleteButton">+</button>
}

export default DeleteButton