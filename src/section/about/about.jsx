import React from "react";
import "./about.styles.scss";
import background from "../../assets/about-me.png";
import Button from "../../component/button/button";


const about = () => {
    return (
        <div id='aboutsection' className="about-section">
            <div className="container about-wrapper">
                <div className="image-container">
                    <div className='about-image'>
                        <img src={background} alt="" />
                    </div>
                </div>
                <div className="about-details">
                    <div className="decor">
                        <div className='h_line'></div> <p className='about-title'>ABOUT ME</p>
                    </div>
                    <h2>Hi! I am Abhishek Yadav.</h2>
                    <h4>A Designer, Developer, Photographer and an Engineer. I am a tech enthusiast and i like learning new things and brushing up my skills. In my spare time i like watching anime, movies, listening to music and gaming.</h4>
                    <a target='_blank' rel="noreferrer" href='https://drive.google.com/uc?export=download&id=1pyfCZvFdxNjy--3HF3O8kgNDhhsTTxHZ'><Button className='about-btn'>Checkout my Resume</Button></a>
                </div>
            </div>
        </div>
    )
}

export default about
