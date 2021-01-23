import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header>
            <nav>
                <ul className='nav-links'>
                    <li><Link to='/Quiz'>Quiz</Link></li>
                    <li><Link to='/BestUsers'>Best Users</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
