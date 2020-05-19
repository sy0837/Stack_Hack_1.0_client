import {
    FETCH_TODOS,
    FETCH_LISTS,
    UPDATE_LIST_INDEX
} from '../constants'
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
            dispatch(fetchTodos(err))
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
            dispatch(fetchLists(err))
        })
    }
}