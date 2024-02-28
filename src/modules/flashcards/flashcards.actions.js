import { types } from '.'

export const setActiveCategoryForm = () => {
    return {
        type: types.ACTIVE_CATEGORYFORM , 
    }
}
export const setInactiveCategoryForm = () => {
    return {
        type: types.INACTIVE_CATEGORYFORM, 
    }
}
export const addCategory = item => {
    return {
        type: types.ADD_CATEGORY,
        payload: { item }
    }
}
export const deleteCategory = id => {
    return {
        type: types.DELETE_CATEGORY,
        payload: { id }
    }
}
export const addFlashcard = (item, category) => {
    return {
        type: types.ADD_FLASHCARD,
        payload: { item, category }
    }
}
export const deleteFlashcard = (id, category) => {
    return {
        type: types.DELETE_FLASHCARD,
        payload: { id, category }
    }
}

export const setData = data => {
    return {
        type: types.SET_DATA,
        payload: { data }
    }
}

export const sendData = categories => () => {
    return fetch('https://flashcards-project-a12ae-default-rtdb.firebaseio.com/categories.json', {
        method: 'PUT',
        body: JSON.stringify(categories)
    }).then(resp => {
        if (resp.ok) {
            return resp.json()
        }
        return new Error('something went wrong')
    }).catch(err => console.log(err))

}


export const loadData = () => dispatch => {
    return fetch('https://flashcards-project-a12ae-default-rtdb.firebaseio.com/categories.json')
        .then(resp => {
            if (resp.ok) {
                return resp.json()
            }
            return new Error('something went wrong')
        })
        .then(data => {
            console.log(data)
            dispatch(setData(data || []))})
        .catch(err => console.log(err))
}