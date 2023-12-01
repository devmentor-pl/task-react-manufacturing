import React, { useState } from "react";
import '../styles/Category.css'
import { DeleteButton, Popup } from '.'
import { useDispatch } from "react-redux";
import { deleteCategory } from "../modules/flashcards";
import { Link } from 'react-router-dom';

const Category = ({ item }) => {
    const [isDeletePopupActive, setIsDeletePopupActive] = useState(false)
    const dispatch = useDispatch()

    const {id, name} = item
    const lowercaseName = name.toLowerCase()

    const clickHandler = ()=> {

    }

    const deleteHandler = () => {
        dispatch(deleteCategory(id))
    }
    return (
        <>
            <div className="Category" onClick={clickHandler}>
                <Link to={`/flashcards/${lowercaseName}`}>
                    <p className="Category__name">{lowercaseName}</p>
                </Link>
                <DeleteButton
                    buttonId="Category"
                    itemId={id}
                    setIsDeletePopupActive={setIsDeletePopupActive}
                />
            </div>
            {isDeletePopupActive &&
                <Popup>
                    <p className="">Are you sure you want to delete this category?</p>
                    <div className="Popup__buttons">
                        <button onClick={deleteHandler} className="Popup__button">Yes</button>
                        <button onClick={() => setIsDeletePopupActive(false)} className="Popup__button">No</button>
                    </div>
                </Popup>
            }
        </>
    )
}

export default Category