export default function(state={},action){
    switch(action.type){

        case 'GET_RESTAURANTS':
            return {...state,list:action.payload}
      
        default:
            return state;
    }
}
