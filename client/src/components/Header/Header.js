import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header(props) {

    let signInUpComp = <ul className='nav-links'>
        <li><Link to={'/login'}>Sign In</Link></li>
        <li><Link to={'/register'}>Sign Up</Link></li>
    </ul>

    let logoutComp = <ul className='nav-links'>
        <li><button onClick={props.dropState}>Logout</button></li>
    </ul>

    let userComp = (props.userInfo.login !== '') ? logoutComp : signInUpComp

    return (
        <header>
            <nav>
                <div className='leftSide'>
                    <ul className='nav-links'>
                        <li><Link to='/info'>About</Link></li>
                        <li><Link to='/phones'>Phones</Link></li>
                    </ul>
                </div>
                <div className='rightSide'>
                    {userComp}
                </div>
            </nav>
        </header>
    )
}

export default Header;
