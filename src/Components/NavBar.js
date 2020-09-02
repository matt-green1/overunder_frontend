import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <ul>
            <NavLink to="/">
                <li>Log in/out?</li>
            </NavLink>
            
            <NavLink to="/">
                <li>New Game</li>
            </NavLink>

            <NavLink to="/">
                <li>Profile</li>
            </NavLink>
        </ul>
    )

}

export default NavBar