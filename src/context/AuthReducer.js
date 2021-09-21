export const AuthReducer = (state,action)=>{
    switch (action.type) {
        case "UPDATE_USER":
            return({
                user:action.payload
            })
        default:
            return state;
    }
}