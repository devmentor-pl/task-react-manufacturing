import { combineReducers } from "redux";

import { reducer as flashcardsReducer } from "./flashcards";

const reducers = combineReducers({
    flashcards: flashcardsReducer,
})

export default reducers