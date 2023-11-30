import React, { useState } from "react";
import '../styles/Category.css'
import { DeleteButton, Popup } from '.'
import { useDispatch } from "react-redux";
import { deleteCategory } from "../modules/flashcards";

const Category = ({ item }) => {
    const [isDeletePopupActive, setIsDeletePopupActive] = useState(false)
    const dispatch = useDispatch()

    const {id, name, list} = item

    const clickHandler = ()=> {

    }

    const deleteHandler = () => {
        dispatch(deleteCategory(id))
    }
    return (
        <>
            <div className="Category" onClick={clickHandler}>
                <p className="Category__name">{name}</p>
                <DeleteButton
                    buttonId="Category"
                    itemId={id}
                    setIsDeletePopupActive={setIsDeletePopupActive}
                />
            </div>
            {isDeletePopupActive && (<Popup>
                <p className="">Are you sure you want to delete it?</p>
                <div className="Popup__buttons">
                    <button onClick={deleteHandler} className="Popup__button">Yes</button>
                    <button onClick={() => setIsDeletePopupActive(false)} className="Popup__button">No</button>
                </div>
            </Popup>)}
        </>
    )
}

export default Category