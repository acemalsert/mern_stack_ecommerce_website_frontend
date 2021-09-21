import React, { useContext } from 'react'
import "./navbar.css"
import { Link } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import { AuthContext } from '../../context/AuthContext'
import PersonIcon from '@mui/icons-material/Person';



function Navbar() {
    const {user} = useContext(AuthContext)
    console.log(user)
    const SignedIn = ({user})=>{
        console.log(user)
        if(user !== null){
            return(
                <React.Fragment>
                    <Link to = "/profil"><PersonIcon/></Link>
                </React.Fragment>
            )
        }
        else{
            return(
                <React.Fragment>
                    <button className="btn btn-primary"><Link to = "/girisyap">Giriş Yap</Link></button>
                    <button className="btn btn-secondary"><Link to = "/kayitol">Kayıt Ol</Link></button>
                </React.Fragment>
            )
        }
    }
    
    
    return (
     
      <div>
        <nav>
                <div className="logo">
                    ACStore
                </div>
                <ul className="navbar-list">
                    <li><Link to="/urunler"><StoreIcon/> Ürünler</Link></li>
                    <li><Link to="/kartdetayi"> <ShoppingCartIcon/>Sepetim</Link></li>
                </ul>
                <div className="auth">
                <SignedIn user={user}/>
                </div>
            </nav>
      </div>

    )
}

export default Navbar
