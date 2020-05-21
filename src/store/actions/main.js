/**
 * For running async code inside our reducers 
 * we need to use redux-thunk and also create 
 * action creators inside that will return a action. 
 */

/**
 * This file contains all the action creators, 
 * About: Action creators are function that dispatch a action.
 */


import {
    FETCH_TODOS,
    FETCH_LISTS,
    UPDATE_LIST_INDEX,
    CREATE_LIST,
    UPDATE_LIST_INPUT,
    UPDATE_TODO_INPUT
} from '../constants'

import {
    toggleLoading
} from './ui'
import Axios from 'axios'

/**
 * This action updates the todos state with the new
 * payload value.
 */
const fetchTodos = (data) => {
    return {
        type: FETCH_TODOS,
        payload: data
    }
}

/**
 * This action updates the lists and the 
 * currentListIndex
 */
const fetchLists = (data, listIndex) => {
    return {
        type: FETCH_LISTS,
        payload: {
            data: data,
            listIndex: listIndex
        }
    }
}

/**
 * Updates the list Index
 */
export const updateListIndex = (data) => {
    return {
        type: UPDATE_LIST_INDEX,
        payload: data
    }
}

/**
 * Creates a new list 
 */
const createList = (data) => {
    return {
        type: CREATE_LIST,
        payload: data
    }
}

/**
 * updates the list input 
 */
export const updateListInput = (data) => {
    return {
        type: UPDATE_LIST_INPUT,
        payload: data
    }
}

/**
 * updates to todo input
 */
export const updateTodoInput = (data) => {
    return {
        type: UPDATE_TODO_INPUT,
        payload: data
    }
}

/**
 * Async functions 
 */
export const fetchTodoAsync = () => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: 'https://candle-shiny-indigo.glitch.me/todo/todos'
        }).then(res => {
            dispatch(fetchTodos(res.data))
        }).catch(err => {
            console.log(err)
        })
    }

}

export const fetchListAsync = () => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: 'https://candle-shiny-indigo.glitch.me/todo/lists'
        }).then(res => {
            dispatch(fetchLists(res.data, res.data[0]._id))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const createTodoAsync = (listId, name) => {
    if (name === '') {
        return dispatch => { }
    }
    return dispatch => {
        dispatch(toggleLoading())
        Axios({
            method: 'POST',
            url: 'https://candle-shiny-indigo.glitch.me/todo/todos',
            data: {
                listId: listId,
                name: name
            }
        }).then(response => {
            return Axios({
                method: 'GET',
                url: 'https://candle-shiny-indigo.glitch.me/todo/todos'
            })
        }).then(res => {
            dispatch(fetchTodos(res.data))
            dispatch(updateTodoInput(''))
            dispatch(toggleLoading())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const createListAsync = (listName) => {
    if (listName === '') {
        return dispatch => { }
    }
    return dispatch => {
        dispatch(toggleLoading())
        Axios({
            method: 'POST',
            url: 'https://candle-shiny-indigo.glitch.me/todo/lists',
            data: {
                listName: listName
            }
        }).then(res => {
            dispatch(createList(res.data))
            dispatch(updateListInput(''))
            dispatch(toggleLoading())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const deleteTodoAsync = (todoId) => {

    return dispatch => {
        dispatch(toggleLoading())
        Axios({
            method: 'DELETE',
            url: 'https://candle-shiny-indigo.glitch.me/todo/todos',
            data: {
                todoId: todoId
            }
        }).then(() => {
            return Axios({
                method: 'GET',
                url: 'https://candle-shiny-indigo.glitch.me/todo/todos'
            })
        }).then(res => {
            dispatch(fetchTodos(res.data))
            dispatch(toggleLoading())
        }).catch(err => {
            console.log(err)
            dispatch(toggleLoading())
        })
    }
}

export const deleteListAsync = (listId, name) => {
    console.log(listId, name)
    return dispatch => {
        dispatch(toggleLoading())
        Axios({
            method: 'DELETE',
            url: 'https://candle-shiny-indigo.glitch.me/todo/lists',
            data: {
                id: listId,
                name: name
            }
        }).then((result) => {
            console.log(result)
            return Axios({
                method: 'GET',
                url: 'https://candle-shiny-indigo.glitch.me/todo/lists'
            })
        }).then(res => {
            dispatch(fetchLists(res.data, res.data[0]._id))
            dispatch(toggleLoading())
        }).catch(err => {
            console.log(err)
            dispatch(toggleLoading())
        })
    }
}