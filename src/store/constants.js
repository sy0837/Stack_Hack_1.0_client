/**
 * This file will contain all the 
 * actions constant strings 
 */

/**
 * For running async code inside our reducers 
 * we need to use redux-thunk and also create 
 * action creators inside that will return a action. 
 */

export const LOADING_TOGGLE = "LOADDING_TOGGLE"
export const FETCH_TODOS = "FETCH_TODOS"
export const FETCH_LISTS = "FETCH_LISTS"
export const UPDATE_LIST_INDEX = "UPDATE_LIST_INDEX"
export const CREATE_TODO = "CREATE_TODO"
export const CREATE_LIST = "CREATE_LIST"
export const UPDATE_LIST_INPUT = "UPDATE_LIST_INPUT"
export const UPDATE_TODO_INPUT = "UPDATE_TODO_INPUT"
export const DELETE_TODO = "DELETE_TODO"