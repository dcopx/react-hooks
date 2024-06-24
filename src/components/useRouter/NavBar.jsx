import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <Link className='navbar-brand' to='/'>useContext</Link>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                    <NavLink
                        className={({ isActive }) => `nav-link ${(isActive) ? 'acvite' : ''}`}
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-link ${(isActive) ? 'acvite' : ''}`}
                        to="/about"
                    >
                        About
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-link ${(isActive) ? 'acvite' : ''}`}
                        to="/login"
                    >
                        Login
                    </NavLink>

                </ul>
            </div>
        </nav>
    )
}
