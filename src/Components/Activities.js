import React from 'react'
import banner from '.././images/banner.png';
import clubswhole from '../images/clubswhole.png'

export const Activities = () => {
    return (
        <div>
            <img style={{position:"absolute", bottom: -400, width:1545, height:"60%"}}src={banner} alt=""/>
            <img style={{position:"relative", left: 240, bottom: -50, width:1020, height:520}}src={clubswhole} alt=""/>
        </div>
    )
  }