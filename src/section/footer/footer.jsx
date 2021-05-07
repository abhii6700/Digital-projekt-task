import React from 'react'
import './footer.styles.scss'
import { FaLinkedin } from 'react-icons/fa'
import { FaBehance } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FaHeart } from 'react-icons/fa'


const Footer = () => (
    <div className='footer'>
        <div className='container'>
            <div className="footer-wrapper">
                <div>
                    <p>Made with <FaHeart className='heart-icon' /> by Abhishek Yadav </p>
                </div>
                <div className='footer-icons'>
                    <a target='_blank' href='https://www.linkedin.com/in/abhishek-yadav-3187ba16b/'><FaLinkedin className='f-icon' /></a>
                    <a target='_blank' href='https://www.behance.net/abhishekyadav29'><FaBehance className='f-icon' /></a>
                    <a target='_blank' href='https://github.com/abhii6700'><FaGithub className='f-icon' /></a>
                    <a target='_blank' href='https://www.instagram.com/__abhishek.yadav__/'><AiFillInstagram className='f-icon' /></a>
                </div>
            </div>


        </div>
    </div>

)

export default Footer;