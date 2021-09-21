import React, {useState} from 'react'
import "./register.css"
import axios from "axios";


function Register() {

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [passwordReg2, setPasswordReg2] = useState("");
    const [emailReg,setEmailReg] = useState("");

    const register = async () => {
        if(passwordReg === passwordReg2 && usernameReg !=null && passwordReg !=null && passwordReg !=null){
                const res = await axios.post("http://localhost:5000/api/auth/register",{
                username : usernameReg,
                password : passwordReg,
                email : emailReg
            }).then((res) => {
                console.log(res)
            })
            window.location.replace('/urunler')
            
        }
       
    }

    return (
        <div>
            <div className="register">
            <form className="register-form">
                <label htmlFor="username" className="form-label">Kullanıcı Adı: </label>
                <input type="text" name="username" placeholder="Kullanıcı adı" className="form-control" onChange = {(e) => {
                    setUsernameReg(e.target.value);
                }} />
                <label htmlFor="email" className="form-label mt-2">Email:</label>
                <input type="email" name="email" placeholder="xxx@gmail.com" className="form-control" onChange = {(e) => {
                    setEmailReg(e.target.value);
                }}/>
                <label htmlFor="password" className="form-label mt-2">Parola: </label>
                <input type="password" name="password" placeholder="Kendi parolan" id="password" className="form-control" onChange = {(e) => {
                    setPasswordReg(e.target.value);
                }}/>
                <label htmlFor="password2" className="form-label mt-2">Parola Tekrar: </label>
                <input type="password" name="password2" placeholder="Yeniden parola" id="password2" className="form-control" onChange = {(e) => {
                    setPasswordReg2(e.target.value);
                }}/>
                <button className="btn btn-primary mt-3" onClick = {register}>Kayıt Ol</button>
            </form>
        </div>
        </div>
    )
}

export default Register
