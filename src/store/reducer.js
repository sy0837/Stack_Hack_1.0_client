import {combineReducers} from 'redux'
import main from './reducers/main'
import ui from './reducers/ui'

const rootReducer = combineReducers({
    main: main,
    ui: ui
})


export default rootReducer