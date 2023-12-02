import React, { useState } from "react";
import '../styles/Flashcard.css'
import { CurrentFlashcard, DeleteButton, Popup, DeleteSection } from "."
import { useDispatch } from "react-redux";
import { deleteFlashcard } from "../modules/flashcards";

const Flashcard = ({ item, index, flashcards, category }) => {
    const [cardActive, setCardActive] = useState(false)
    const [isDeletePopupActive, setIsDeletePopupActive] = useState(false)

    const dispatch = useDispatch()

    const { name, id } = item

    const clickHandler = () => {
        setCardActive(true)
    }

    const deleteHandler = () => {
        dispatch(deleteFlashcard(id, category))
        setIsDeletePopupActive(false)
    }

    return (
        <>
            <div className="Flashcard" onClick={clickHandler}>
                <div className="Flashcard__name">{name}</div>
                <DeleteButton
                    buttonId="Flashcard"
                    itemId={id}
                    setIsDeletePopupActive={setIsDeletePopupActive}
                />
            </div>
            {cardActive && <CurrentFlashcard
                setCardActive={setCardActive}
                index={index}
                flashcards={flashcards}
            />}
            {isDeletePopupActive &&
                <Popup>
                    <DeleteSection
                        name="flashcard"
                        setIsDeletePopupActive={setIsDeletePopupActive}
                        deleteHandler={deleteHandler}
                    />
                </Popup>
            }
        </>
    )
}

export default Flashcard