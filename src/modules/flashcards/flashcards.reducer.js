import { types } from '.'
import { v4 as uuidv4 } from 'uuid';
import { list } from '../../providers/categories';

const initState = {
    categoryFormIsActive: false,
    categories: [
        { id: 1, name: 'Frontend', list },
        { id: 2, name: 'Backend', list: [] }
    ]
}

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
                categories: [...state.categories, { id: uuidv4(), name: action.payload.item, list: [] }]
            }
        case types.DELETE_CATEGORY:
            const newCategories = [...state.categories].filter(item => item.id !== action.payload.id)
            return {
                ...state,
                categories: newCategories
            }
        case types.ADD_FLASHCARD:
            const { item, category } = action.payload

            const currentCategoryArr = [...state.categories].filter(cat => cat.name.toLowerCase() === category)
            const otherCategoryArr = [...state.categories].filter(cat => cat.name.toLowerCase() !== category)

            const [currentCategory] = currentCategoryArr
            const { list } = currentCategory

            list.push(item)

            console.log(otherCategoryArr)

            return {
                    ...state,
                categories: [...otherCategoryArr, currentCategory]
            }
        default:
            return state
    }
}

export default reducer