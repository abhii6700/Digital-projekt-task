import React from 'react'
import './hero-section.styles.scss'
import background from './../../assets/jan-gottweiss-QjnobzYw7uU-unsplash.jpg'
import Header from '../header/header'
import Button from '../../component/button/button'
import ScrollLottie from '../../component/lotties/scroll-lottie'


const Hero = () => (
    <div className='hero' style={{ backgroundImage: `url(${background})` }} >
        <Header />
        <div className='heading'><h1>I Design and Build</h1>
            <span><h1 >Unique things.</h1></span>
            <a target='_blank' rel="noreferrer" href='mailto:abhishekyadav6700.ay@gmail.com'><Button className='hero-btn'>Get in touch.</Button></a>
        </div>

        <div>
            {/* <CgScrollV className='scroll-icon'/> */}
            <a href='#aboutsection'><ScrollLottie /></a>
        </div>
    </div>
)

export default Hero;