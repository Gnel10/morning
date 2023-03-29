import React from 'react'
import "./Slider"
import leftArrow from "./icons/left-arrow.png"
import rightArrow from "./icons/right-arrow.png"

const BtnSlider = ({direction, moveSlide}) => {

  return (
    <button className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        onClick={moveSlide}>
    
        <img src={direction === "next" ? rightArrow : leftArrow} />

    </button>
    
  )
}

    export default BtnSlider