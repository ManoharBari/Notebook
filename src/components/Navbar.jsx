import { LogOut } from 'lucide-react';
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { useAlert } from '../context/alerts/alertContext'
import UserContext from '../context/user/userContext';
import '../styles/navbar.css';

function Navbar() {
    const alert = useAlert()
    const navigate = useNavigate()
    const { getUser, user } = useContext(UserContext)

    const Logout = () => {
        alert.success("Logout Sucessfully")
        localStorage.removeItem("token")
        navigate("/login")
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand logo" to="/">Note Down</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>


                        <div>Hi, {user.username}</div>

                        {!localStorage.getItem("token") ?
                            <div>
                                <Link to="/login" className='btn btn-outline-primary mx-2' type='button'>Login</Link>
                                <Link to="/signup" className='btn btn-primary' type='button'>Signup</Link>
                            </div> : <button onClick={Logout} className='btn'>
                                <div className="icon"><LogOut size={16} /></div></button>}
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar
