import {
    LOADING_TOGGLE
} from '../constants'

const initialState = {
    is_loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING_TOGGLE:
            return {
                ...state,
                is_loading: !state.is_loading
            }

        default:
            return state
    }
}