import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom"
function Navbar() {
    return (
     
      <div>
        <nav>
                <div className="logo">
                    ACStore
                </div>
                <ul className="navbar-list">
                    <li><Link to="/urunler">Ürünler</Link></li>
                    <li><Link to="/kartdetayi">Kart Detayı</Link></li>
                </ul>
                <div className="auth">
                    <button className="btn btn-primary"><Link to="/girisyap">Giriş Yap</Link></button>
                    <button className="btn btn-secondary"><Link to="/kayitol">Kayıt Ol</Link></button>
                </div>
            </nav>
      </div>

    )
}

export default Navbar
