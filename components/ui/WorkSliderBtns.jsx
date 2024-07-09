"use client"
import React from 'react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
import { useSwiper } from 'swiper/react'

function WorkSliderBtns({containerStyle,buttomStyle,iconStyle}) {
    const swipper= useSwiper()
  return (
    <div className={containerStyle}>
        <button className={buttomStyle} >
            <PiCaretLeftBold className={iconStyle} onClick={()=>swipper.slidePrev()}/>
        </button>
        <button className={buttomStyle}>
            <PiCaretRightBold className={iconStyle} onClick={()=>swipper.slideNext()}/>
        </button>
    </div>
  )
}

export default WorkSliderBtns
