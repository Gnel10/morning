import React,{useState} from "react"
import "./slider.scss"
import BtnSlider from "./BtnSlider"
import DataSlider from "./DataSlider"
import logo from "../../images/rating.png"



const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== DataSlider.length){
            setSlideIndex(slideIndex + 1)
        }else if (slideIndex === DataSlider.length){
            setSlideIndex(1)
        }
    }
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if(slideIndex === 1){
            setSlideIndex(DataSlider.length)
        }
    }
    const moveDot = index => {
        setSlideIndex(index)
    }

    return(
        <div className="container-slider">
            {DataSlider.map((obj, index) => {
                return(
                    <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"} key={obj.id}>
                         <div className="logo-container">
                         <img src={logo} alt="" className="logo" />
                         </div>
                         <div className="title-container">
                         <h3>{obj.title}</h3>
                         </div>
                          <div className="subtitle-container">
                          <h3>{obj.subtitle}</h3>
                          </div>
                          <div className="network-container">
                              <h4>{obj.network}</h4>
                          </div>
                         
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction="next"/>
            <BtnSlider moveSlide={prevSlide} direction="prev"/>
            <div className="container-dots">
                {Array.from({length: 3}).map((item, index) =>(
                    <div className={slideIndex === index + 1 ? "dot active" : "dot"}
                    onClick={() => moveDot(index + 1)}></div>
                ))}
            </div>
        </div>
     
    )
}
    export default Slider