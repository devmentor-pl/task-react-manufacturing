import { types } from '.'

const initState = { categoryFormIsActive: false, categories: [] }

const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.ACTIVE_CATEGORYFORM:
            return {
                ...state,
                categoryFormIsActive: true
            }
        case types.INACTIVE_CATEGORYFORM:
            return {
                ...state,
                categoryFormIsActive: false
            }
        case types.ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, { name: action.payload.item, list: [] }]
            }
        default:
            return state
    }
}

export default reducer