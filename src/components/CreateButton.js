import React from "react";
import '../styles/CreateButton.css'
import { useDispatch } from "react-redux";
import { setActiveCategoryForm } from "../modules/flashcards";


const CreateButton = props => {
    const { children, setPopupActive } = props

    const dispatch = useDispatch()

    const clickHandler = () => {
        if (children === 'Create a new flashcard') {
            setPopupActive(true)
        }
        if (children === 'Create a new category') {
            dispatch(setActiveCategoryForm())
        }
    }

    return <button onClick={clickHandler} className="CreateButton">{children}</button>
}

export default CreateButton