export default function(state={},action){

    switch(action.type){
        /*
        case 'ADD_COMMAND':
            return {...state,commandAdd:action.payload}
            */
        case 'GET_COMMANDS':
            return {...state,list:action.payload}
      
        default:
            return state;
    }
}