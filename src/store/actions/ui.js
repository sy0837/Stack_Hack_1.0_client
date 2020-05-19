/**
 * Action creators 
 */

import {
    LOADING_TOGGLE
} from '../constants'

export const  toggleLoading = () => {
    return {
        type: LOADING_TOGGLE
    }
}