import {
    FETCH_TODOS,
    FETCH_LISTS,
    UPDATE_LIST_INDEX
} from '../constants'

const initialState = {
    lists: [],
    todos: [],
    currentListIndex: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return {
                ...state,
                todos: action.payload
            }

        case FETCH_LISTS:
            return {
                ...state,
                lists: action.payload.data,
                currentListIndex: action.payload.listIndex
            }

        case UPDATE_LIST_INDEX:
            return {
                ...state,
                currentListIndex: action.payload
            }
        default:
            return state
    }
}