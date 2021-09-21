import React from 'react'
import {Link} from "react-router-dom"

function Footer() {
    return (
        <div>
            <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="/urunler" class="nav-link px-2 text-muted">Anasayfa</Link></li>
      <li className="nav-item"><Link to="/hakkimizda" class="nav-link px-2 text-muted">Hakkımızda</Link></li>
    </ul>
    <p className="text-center text-muted">© 2021 ACStore, Inc</p>
  </footer>
</div>
        </div>
    )
}

export default Footer
