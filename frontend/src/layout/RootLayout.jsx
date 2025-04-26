import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/react.svg'

const RootLayout = () => {
    return (
        <div className="mainLayout">
            <header>
                <Link to='/' className='logo'>
                    <img src={logo} alt="logo" />
                    <span>Item Quest</span>
                </Link>
                <div className="user">
                    User
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout