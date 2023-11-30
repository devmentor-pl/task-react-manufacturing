import { types } from '.'

export const setActiveCategoryForm = () => {
    return {
        type: types.ACTIVE_CATEGORYFORM , 
        // payload: {categoryFormIsActive: true}
    }
}
export const setInactiveCategoryForm = () => {
    return {
        type: types.INACTIVE_CATEGORYFORM , 
        // payload: {categoryFormIsActive: false}
    }
}