import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/skills-lottie-vector.json'

class SkillsLottie extends Component {


  render(){
    const scrollStyle = {
        
       
        backgroundColor: 'none',
  
      };


    const defaultOptions = {
      
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        <Lottie options={defaultOptions} style={scrollStyle}
              height={"100%"}
              width={"100%"}
              
        />
      </div>
    )
  }
}

export default SkillsLottie;