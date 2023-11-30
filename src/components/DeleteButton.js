import React from "react";
import '../styles/DeleteButton.css'
import { useDispatch } from "react-redux";
import { setInactiveCategoryForm, deleteCategory } from "../modules/flashcards";

const DeleteButton = ({buttonId, itemId, changePopup=null, setIsDeletePopupActive}) => {
    const dispatch = useDispatch()
    

    const clickHandler = () => {
        if (buttonId === 'CategoryForm') {
            dispatch(setInactiveCategoryForm()) 
        }
        if (buttonId==="Category") {
            console.log()
            // dispatch(deleteCategory(itemId))
            setIsDeletePopupActive(true)
        }
        if (buttonId === "PopupCategoryDelete") {
            // dispatch(deleteCategory(itemId))
            changePopup()
        }

    }

    return <button onClick={clickHandler} className="DeleteButton">+</button>
}

export default DeleteButton