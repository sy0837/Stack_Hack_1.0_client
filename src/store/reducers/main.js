import {
    FETCH_TODOS,
    FETCH_LISTS,
    UPDATE_LIST_INDEX,
    CREATE_LIST,
    UPDATE_LIST_INPUT,
    UPDATE_TODO_INPUT
} from '../constants'

const initialState = {
    lists: [],
    todos: [],
    currentListIndex: 0,
    todoInput: '',
    listInput: ''
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
        case CREATE_LIST:
            return {
                ...state,
                lists: [...state.lists, action.payload]
            }

        case UPDATE_LIST_INPUT:
            return {
                ...state,
                listInput: action.payload
            }

        case UPDATE_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        default:
            return state
    }
}