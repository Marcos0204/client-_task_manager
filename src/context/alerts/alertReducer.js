import { SHOW_ALERT, HILE_ALERT } from '../../types'

export default (state, action) =>{
    switch (action.type) {
        case SHOW_ALERT:
            return {
                alert: action.payload
            };
        case HILE_ALERT:
            return {
                alert: null
            }
            
            break;
    
        default:
            break;
    }
}
// eslint-disable-next-line 