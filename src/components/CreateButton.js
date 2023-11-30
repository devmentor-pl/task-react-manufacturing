import React from "react";
import '../styles/CreateButton.css'
import { useDispatch } from "react-redux";
import { setActiveCategoryForm } from "../modules/flashcards";


const CreateButton = props => {
    const { children } = props

    const dispatch = useDispatch()

    const clickHandler = () => {
        dispatch(setActiveCategoryForm())
    }

    return <button onClick={clickHandler} className="CreateButton">{children}</button>
}

export default CreateButton