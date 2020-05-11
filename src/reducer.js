import {combineReducers} from 'redux'
import mainReducer from './reducers/main'


export default combineReducers({
    main: mainReducer
})