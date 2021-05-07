import React from 'react'
import './header.styles.scss'
import { GiHamburgerMenu } from 'react-icons/gi'


const Header = () => {
    return (
        <div className='header'>
            <div className='logo'><h1>A</h1></div>
            <div className='options'>
                <p className='option'>Home.</p>
                <a href='#aboutsection'><p className='option'>About me.</p></a>
                <a href='#skillssection'><p className='option'>Skills.</p></a>
                <a href='#projectsection'><p className='option'>Projects.</p></a>
                <a href='#contactsection'><p className='option'>Contact.</p></a>

            </div>
            <div className='options'>
                <GiHamburgerMenu className='hamburger-menu' />
            </div>
        </div>
    )
}


export default Header;