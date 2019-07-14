
export default function(state={},action){
    switch(action.type){
        case 'sign_user':
        return {
            ...state,
            userData:{
                uid:action.payload.localId || false,
                token:action.payload.idToken || false,
                refToken:action.payload.refreshToken || false
            }
        }
    break;

        case 'register_user':
        return {
            ...state,
            userData:{
                uid:action.payload.localId || false,
                token:action.payload.idToken || false,
                refToken:action.payload.refreshToken || false
            }
        }
        
        break;
  
        default:
            return state;
    }
}

