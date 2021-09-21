import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import './profile.css'

function Profile() {
    const {user} = useContext(AuthContext)

    const handleLogout = ()=>{
        window.localStorage.removeItem('user')
        window.location.replace('/urunler')
    }
    return (
        <div>
             <div className = "container">
            <div className = "row">
                <div className = "col-12 col-md-12 m-1 mt-5">
                    <div className="profile">
                        <h5>Username</h5>
                        <p>{user.username}</p>
                        <h5>Email</h5>
                        <p>{user.email}</p>
                        <button className = "btn btn-danger" onClick={handleLogout}>Çıkış Yap</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Profile
