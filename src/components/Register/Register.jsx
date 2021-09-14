import React from 'react'
import "./register.css"

function Register() {
    return (
        <div>
            <div className="register">
            <form className="register-form">
                <label htmlFor="username" className="form-label">Kullanıcı Adı: </label>
                <input type="text" name="username" placeholder="Kullanıcı adı" className="form-control" />
                <label htmlFor="email" className="form-label mt-2">Email:</label>
                <input type="email" name="email" placeholder="xxx@gmail.com" className="form-control"/>
                <label htmlFor="password" className="form-label mt-2">Parola: </label>
                <input type="password" name="password" placeholder="Kendi parolan" id="password" className="form-control"/>
                <label htmlFor="password2" className="form-label mt-2">Parola Tekrar: </label>
                <input type="password" name="password2" placeholder="Yeniden parola" id="password2" className="form-control"/>
                <button className="btn btn-primary mt-3">Kayıt Ol</button>
            </form>
        </div>
        </div>
    )
}

export default Register
