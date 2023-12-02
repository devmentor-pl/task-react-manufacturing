import React from "react";

const DeleteSection = ({name, deleteHandler, setIsDeletePopupActive}) => {

    return (
        <>
            <p className="">Are you sure you want to delete this {name}?</p >
            <div className="Popup__buttons">
                <button onClick={deleteHandler} className="Popup__button">Yes</button>
                <button onClick={() => setIsDeletePopupActive(false)} className="Popup__button">No</button>
            </div>
        </>
    )
}

export default DeleteSection