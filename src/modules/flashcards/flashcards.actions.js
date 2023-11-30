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