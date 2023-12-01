import React, { useState } from "react";
import '../styles/CategoryForm.css'

import { Popup, DeleteButton } from '.'

const FlashcardForm = ({setPopupActive}) => {
    const [flashcardName, setFlashcardName] = useState('')
    const [definition, setDefinition] = useState('')
    const [error, setError] = useState()

    const changeHandler = e => {
        console.log(e.target.name)
        setFlashcardName(e.target.value)
    }

    const submitHandler = e => {
        e.preventDefault()

        if (flashcardName === '') {
            setError('The field can not be empty')
            return
        }

    }

    return (
        <Popup>
            <form onSubmit={submitHandler} className="Form__form">
                <label className="Form__label" >Flashcard name
                    <input name="name" value={flashcardName} onChange={changeHandler} type="text" className="Form__input" />
                    {error && <p className="Form__error">{error}</p>}
                </label>
                <label className="Form__label" >Definition
                    <input name="definition" value={flashcardName} onChange={changeHandler} type="text" className="Form__input" />
                    {error && <p className="Form__error">{error}</p>}
                </label>
                <label className="Form__label--submit">
                    <input type="submit" className="Form__input Form__input--submit" value="create" />
                </label>
            </form>
            <DeleteButton buttonId='FlashcardForm' setPopupActive={setPopupActive}/>
        </Popup>
    )
}

export default FlashcardForm