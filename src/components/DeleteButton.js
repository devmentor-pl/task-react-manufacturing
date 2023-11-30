import React from "react";
import '../styles/DeleteButton.css'
import { useDispatch } from "react-redux";
import { setInactiveCategoryForm } from "../modules/flashcards";

const DeleteButton = ({buttonId, setIsDeletePopupActive}) => {
    const dispatch = useDispatch()
    

    const clickHandler = () => {
        if (buttonId === 'CategoryForm') {
            dispatch(setInactiveCategoryForm()) 
        }
        if (buttonId==="Category") {
            setIsDeletePopupActive(true)
        }
    }

    return <button onClick={clickHandler} className="DeleteButton">+</button>
}

export default DeleteButton