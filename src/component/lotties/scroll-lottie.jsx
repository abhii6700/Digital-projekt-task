import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/scroll-down.json'

class ScrollLottie extends Component {


  render(){
    const scrollStyle = {
        
        margin: '30px auto',
        backgroundColor: 'none',
        
        fontSize: '25px'
  
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
              height={30}
              width={30}
              
        />
      </div>
    )
  }
}

export default ScrollLottie;