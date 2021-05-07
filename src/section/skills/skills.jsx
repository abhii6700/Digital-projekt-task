import React, { version } from 'react'
import './skills.styles.scss'
import background from '../../assets/skills.svg'

import { GrHtml5 } from 'react-icons/gr'
import { GrCss3 } from 'react-icons/gr'
import { FaSass } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { SiAdobexd } from 'react-icons/si'
import { SiAdobephotoshop } from 'react-icons/si'
import { SiAdobeillustrator } from 'react-icons/si'
import { SiAdobepremiere } from 'react-icons/si'
import { SiAdobeaftereffects } from 'react-icons/si'
import { SiVisualstudiocode } from 'react-icons/si'
import { FiFigma } from 'react-icons/fi'
import SkillsLottie from '../../component/lotties/skills-lottie'


const Skills = () => (
    <div className="skills-section container">
        <div className="skills-details">
            <div className="title">
                <p>TOOLS AND TECHNOLOGIES</p>
                <div className="h_line2"></div>
            </div>
            <div className="tools">
                <div className='items'>
                    <GrHtml5 className='icon' />
                    <p>HTML 5</p>
                </div>
                <div className='items'>
                    <GrCss3 className='icon' />
                    <p>CSS 3</p>
                </div>
                <div className='items'>
                    <FaSass className='icon' />
                    <p>SASS</p>
                </div>
                <div className='items'>
                    <DiJavascript1 className='icon' />
                    <p>JAVASCRIPT</p>
                </div>
                <div className='items'>
                    <FaReact className='icon' />
                    <p>REACT JS</p>
                </div>
                <div className='items'>
                    <SiAdobexd className='icon' />
                    <p>ADOBE XD</p>
                </div>
                <div className='items'>
                    <SiAdobephotoshop className='icon' />
                    <p>PHOTOSHOP</p>
                </div>
                <div className='items'>
                    <SiAdobeillustrator className='icon' />
                    <p>ILLUSTRATOR</p>
                </div>
                <div className='items'>
                    <SiAdobepremiere className='icon' />
                    <p>PREMIERE</p>
                    <p>PRO</p>
                </div>
                <div className='items'>
                    <SiAdobeaftereffects className='icon' />
                    <p>AFTER</p>
                    <p>EFFECTS</p>
                </div>
                <div className='items'>
                    <SiVisualstudiocode className='icon' />
                    <p>VS CODE</p>
                </div>
                <div className='items'>
                    <FiFigma className='icon' />
                    <p>FIGMA</p>
                </div>
            </div>
        </div>
        <div className="skills-img">
            <SkillsLottie className='skills-lottie' />
        </div>

    </div>








    // <div id='skillssection' className='skills container'>
    //     <div className='details'>
    //         <div>
    //             <p className='title'>
    //                 TOOLS AND TECHNOLOGIES I USE<div className='h_line2'></div>
    //             </p>
    //         </div>

    //     <div className='tools-div'>
    //         <div className='icons'>
    // <div className='items'>
    //     <GrHtml5 className='icon'/>
    //     <p>HTML 5</p>
    // </div>
    // <div className='items'>
    //     <GrCss3 className='icon'/>
    //     <p>CSS 3</p>
    // </div>
    // <div className='items'>
    //     <FaSass className='icon'/>
    //     <p>SASS</p>
    // </div>
    // <div className='items'>
    //     <DiJavascript1 className='icon'/>
    //     <p>JAVASCRIPT</p>
    // </div>
    // <div className='items'>
    //     <FaReact className='icon'/>
    //     <p>REACT JS</p>
    // </div>
    // <div className='items'>
    //     <SiAdobexd className='icon'/>
    //     <p>ADOBE XD</p>
    // </div>
    // <div className='items'>
    //     <SiAdobephotoshop className='icon'/>
    //     <p>PHOTOSHOP</p>
    // </div>
    // <div className='items'>
    //     <SiAdobeillustrator className='icon'/>
    //     <p>ILLUSTRATOR</p>
    // </div>
    // <div className='items'>
    //     <SiAdobepremiere className='icon'/>
    //     <p>PREMIERE</p>
    //     <p>PRO</p>
    // </div>
    // <div className='items'>
    //     <SiAdobeaftereffects className='icon'/>
    //     <p>AFTER</p>
    //     <p>EFFECTS</p>
    // </div>
    // <div className='items'>
    //     <SiVisualstudiocode className='icon'/>
    //     <p>VS CODE</p>
    // </div>
    // <div className='items'>
    //     <FiFigma className='icon'/>
    //     <p>FIGMA</p>
    // </div>
    //         </div>


    //     </div>
    //     <div className='img-container'>
    //         <SkillsLottie className='skills-lottie'/>
    //         </div>
    //     </div>




)

export default Skills;