import React, { useState } from "react";
import '../styles/Category.css'
import { DeleteButton, Popup, DeleteSection } from '.'
import { useDispatch } from "react-redux";
import { deleteCategory } from "../modules/flashcards";
import { Link } from 'react-router-dom';

const Category = ({ item }) => {
    const [isDeletePopupActive, setIsDeletePopupActive] = useState(false)
    const dispatch = useDispatch()

    const {id, name} = item
    const lowercaseName = name.toLowerCase()

    const deleteHandler = () => {
        dispatch(deleteCategory(id))
    }
    return (
        <>
            <div className="Category">
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
                    <DeleteSection
                        name='category'
                        setIsDeletePopupActive={setIsDeletePopupActive}
                        deleteHandler={deleteHandler}
                    />
                </Popup>
            }
        </>
    )
}

export default Category