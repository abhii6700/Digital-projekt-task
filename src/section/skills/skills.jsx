import React, { version } from 'react'
import './skills.styles.scss'
import background from '../../assets/skills-tools-01.png'

import SkillsLottie from '../../component/lotties/skills-lottie'


const Skills = () => (
    <div id='skillssection' className="skills-section container">
        <div className="skills-details">
            <div className="title">
                <p>TOOLS AND TECHNOLOGIES</p>
                <div className="h_line2"></div>
            </div>
        </div>
        <div className="image-container">
            <div className="tools-img">
                <img src={background} alt="" srcset="" />
            </div>
            <div className="skills-img">
                <SkillsLottie className='skills-lottie' />
            </div>
        </div>


    </div>

)

export default Skills;