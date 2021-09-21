import {createContext,useEffect, useReducer} from "react"
import { AuthReducer } from "./AuthReducer"
const store = {
    user:JSON.parse(localStorage.getItem('user')) || null,
}
export const AuthContext = createContext(store)

export const AuthContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(AuthReducer,store)
    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(state.user))
    },[state.user])
    return(
        <AuthContext.Provider
            value = {{
                user:state.user,
                dispatch,
            }}>
            {children}
        </AuthContext.Provider>
    )

}