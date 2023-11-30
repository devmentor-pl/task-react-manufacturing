import { types } from '.'

export const setActiveCategoryForm = () => {
    return {
        type: types.ACTIVE_CATEGORYFORM , 
    }
}
export const setInactiveCategoryForm = () => {
    return {
        type: types.INACTIVE_CATEGORYFORM , 
    }
}
export const addCategory = (item) => {
    return {
        type: types.ADD_CATEGORY,
        payload: { item }
    }
}
export const deleteCategory = (id) => {
    return {
        type: types.DELETE_CATEGORY,
        payload: { id }
    }
}