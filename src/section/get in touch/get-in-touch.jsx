import React from 'react'
import Button from '../../component/button/button'
import './get-in-touch.styles.scss'

const GetInTouch = () => (
    <div id='contactsection' className='gitdiv'>
        <div className='git'>
            <div className='title'>
                <p>GET IN TOUCH <div className='hline'></div></p>
            </div>

            <h1>Have a Project?</h1>
            <a target='_blank' href='mailto:abhishekyadav6700.ay@gmail.com'><Button className='get-in-touch-btn'>Get in touch</Button></a>
        </div>
        <div className='want-to-hire'>
            <div></div>
            <h1>Want to hire?</h1>
            <a target='_blank' href='https://drive.google.com/uc?export=download&id=1iVfPlm6GdWq9vv2K5nQ-gjyO5dFv1WWV'><Button className='get-in-touch-btn'>Checkout my resume</Button></a>
        </div>
    </div>
)

export default GetInTouch;