import React from 'react'
import './projects.styles.scss'
import { FaArrowCircleRight } from 'react-icons/fa'
import { BiCodeBlock } from 'react-icons/bi'
import { MdPhotoCamera } from 'react-icons/md'
import { RiBrush3Fill } from 'react-icons/ri'

const Projects = () => (
    <div id='projectsection' className='projects'>
        <div className='cards container'>
            <a target='_blank' href="https://www.behance.net/abhishekyadav29"><div className='card'>
                <RiBrush3Fill className='project-icon' />
                <h2>DESIGN</h2>
                <p>My Designing projects includes UI/UX Designing, Illustrations, Logo Design and 2D Animations.</p>
                <a target='_blank' href="https://www.behance.net/abhishekyadav29"><FaArrowCircleRight className='arrow' /></a>
            </div></a>
            <a target='_blank' href="https://github.com/abhii6700"><div className='card'>
                <BiCodeBlock className='project-icon' />
                <h2>DEVELOPMENT</h2>
                <p>My projects are based on HTML, CSS, SASS, JavaScript and React JS.</p>
                <a target='_blank' href="https://github.com/abhii6700"><FaArrowCircleRight className='arrow' /></a>
            </div></a>
            <a target='_blank' href="https://www.instagram.com/__abhishek.yadav__/"><div className='card'>
                <MdPhotoCamera className='project-icon' />
                <h2>PHOTOGRAPHY</h2>
                <p>This collection represents my creative side, it includes photography of some genres, 2D animations and videos.</p>
                <a target='_blank' href="https://www.instagram.com/__abhishek.yadav__/"><FaArrowCircleRight className='arrow' /></a>
            </div></a>
        </div>
    </div>
)

export default Projects;