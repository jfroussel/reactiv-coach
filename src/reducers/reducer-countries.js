import { GET_COUNTRIES, ERROR_GET_COUNTRIES} from '../actions'

export default function(state = [], action) {
    switch(action.type) {
        case GET_COUNTRIES :
            return action.payload
        case ERROR_GET_COUNTRIES :
            return action.errors
        
        default :
            return state
    }
}