import {
    FETCH_TODOS,
    FETCH_LISTS,
    UPDATE_LIST_INDEX,
    CREATE_LIST,
    UPDATE_LIST_INPUT,
    UPDATE_TODO_INPUT,
    DELETE_TODO
} from '../constants'

import {
    toggleLoading
} from './ui'
import Axios from 'axios'


const fetchTodos = (data) => {
    return {
        type: FETCH_TODOS,
        payload: data
    }
}

const fetchLists = (data, listIndex) => {
    return {
        type: FETCH_LISTS,
        payload: {
            data: data,
            listIndex: listIndex
        }
    }
}

export const updateListIndex = (data) => {
    return {
        type: UPDATE_LIST_INDEX,
        payload: data
    }
}

const createList = (data) => {
    return {
        type: CREATE_LIST,
        payload: data
    }
}

export const updateListInput = (data) => {
    return {
        type: UPDATE_LIST_INPUT,
        payload: data
    }
}

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
        }).then(()=>{
            return Axios({
                method: 'GET',
                url: 'https://candle-shiny-indigo.glitch.me/todo/todos'
            })
        }).then(res=>{
            dispatch(fetchTodos(res.data))
            dispatch(toggleLoading())
        }).catch(err=>{
            console.log(err)
            dispatch(toggleLoading())
        })
    }
}