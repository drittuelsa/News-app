var initialState ={
    articles : [],
    news : []
}

export function ReducerSet(state = initialState, action){

var newState ={...state}

if(action.type == "ByName"){
    newState.articles = action.payload
    return newState
}

if( action.type == "Add"){
    return{...state,
     news:[...state.news, action.payload]
    }}

return newState
}