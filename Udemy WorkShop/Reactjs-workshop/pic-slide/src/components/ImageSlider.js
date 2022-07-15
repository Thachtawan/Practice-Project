import ImageData from "./ImageData";
import { useState } from 'react'
import { BsFillCaretLeftSquareFill, BsFillCaretRightSquareFill } from "react-icons/bs";

const ImageSlider = () => {

    const [imageNo, setImageNo] = useState(0)

    const changeImageLeft = () => {
        return imageNo === 0 ? setImageNo(ImageData.length - 1) : setImageNo(imageNo - 1)
    }

    const changeImageRight = () => {
        return imageNo === ImageData.length - 1 ? setImageNo(0) : setImageNo(imageNo + 1)
    }

    return (
        <section className="slider">
            <BsFillCaretLeftSquareFill className="leftArrow" onClick={changeImageLeft}/>
            <BsFillCaretRightSquareFill className="rightArrow" onClick={changeImageRight}/>
            {ImageData.map((data, index) => {
                return (
                    <div className={imageNo === index ? "slide active" : "slide"} key={index}>
                        {
                            imageNo === index && 
                            <div>
                                <img src={data.image} alt={data.title} className="image"/>
                                <p>{data.title}</p>
                            </div>
                        }
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider;