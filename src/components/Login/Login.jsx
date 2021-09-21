import React, { useContext, useState } from 'react'
import axios from 'axios'
import './login.css'
import { AuthContext } from '../../context/AuthContext'
function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const {user,dispatch} = useContext(AuthContext)

    const handleSubmit = (event)=>{
        event.preventDefault()
        const loginCall= async(email,password)=>{
            try {
                const res = await axios.post('http://localhost:5000/api/auth/login',{
                    email:email,
                    password:password
                })
                console.log(res.data)
                dispatch({type:'UPDATE_USER',payload:res.data})
            } catch (error) {
                console.log(error)
            }
            window.location.replace('/urunler')
        }
        loginCall(email,password)
    }

    return (
        <div className="login">
            <form className="login-form">
                <label htmlFor="email" className="form-label mt-2" >Email:</label>
                <input type="email" name="email" placeholder="xxx@gmail.com" className="form-control" onChange={(event)=>setEmail(event.target.value)}/>
                <label htmlFor="password" className="form-label mt-2">Parola: </label>
                <input type="password" name="password" placeholder="kendi parolan" id="password" className="form-control" onChange = {(event)=>setPassword(event.target.value)}/>
                <button className="btn btn-primary mt-3" onClick={handleSubmit}>Giriş Yap</button>
            </form>
        </div>
    )
}

export default Login