const wishReducer = (state=[], action) =>{
    console.log(action);
    if(action.type==='ADD_WISH'){
        return [...state, action.payload];
    }
    return state;
}

export default wishReducer;