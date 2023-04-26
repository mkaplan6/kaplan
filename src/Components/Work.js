import React from 'react'
import banner from '.././images/banner.png';
import workwhole from '.././images/work full.png';

export const Work = () => {
    return (
        <div>
            <img style={{position:"absolute", bottom: -500, width:1545, height:"60%"}}src={banner} alt=""/>
            <img style={{position:"relative", left: 220, bottom: -50, width:1020, height:680}}src={workwhole} alt=""/>
        </div>
    )
  }

/*   <p style={{position:"relative", left: 0, bottom:0, textAlign: 'left', color:"white"}}>   
            </p> */