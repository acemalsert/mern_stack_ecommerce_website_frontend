import React from 'react'
import "./login.css"

function Login() {
    return (
        <div>
             <div className="login">
            <form className="login-form">
                <label htmlFor="email" className="form-label mt-2">Email:</label>
                <input type="email" name="email" placeholder="xxx@gmail.com" className="form-control"/>
                <label htmlFor="password" className="form-label mt-2">Parola: </label>
                <input type="password" name="password" placeholder="kendi parolan" id="password" className="form-control"/>
                <button className="btn btn-primary mt-3"> Giriş Yap</button>
            </form>
        </div>
        </div>
    )
}

export default Login
