import { types } from '.'

const initState = { categoryFormIsActive: false }

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
        default:
            return state
    }
}

export default reducer