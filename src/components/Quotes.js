import React, {useState, useEffect} from "react"
import quotesData from "../quotesData"
import arrow from "../arrow.svg"

function Quotes(){
    let [textNum, setTextNum] = useState(0)  

    function handleNext() {
        setTextNum((textNum === quotesData.length - 1) ? 0 : textNum +1)
    }

    function handlePrev() {
        setTextNum(textNum === 0 ? quotesData.length -1 : textNum -1)
    }
    console.log(textNum)

    useEffect(() => {
        const timer = setTimeout(handleNext, 3500);
        return () => clearTimeout(timer);
    }, [textNum])

    let hide = {opacity: 0, transform: "translateX(100%)"}
    let show = {opacity: 1, transform: "translateX(0%)"}

    return(
        <div className="quotes">
            <div className="image-container image-container-1">
                {quotesData.map((item, index) =>{ return (<img style={index == textNum ? show : hide} src={item.image}/>)})}
            </div>
            <div className="text-container text-container-1">
                {quotesData.map((item, index) =>{ return (<blockquote style={index == textNum ? show : hide}>
                    <p>{item.firstText}</p>
                </blockquote>)})}
                <blockquote className="flow-fix">
                    <p> proident ullamco ea exercitation ipsum magna exercitation irure est magna anim.</p>
                </blockquote>
                <div className="buttons">
                    <img onClick={handlePrev} className="hide left" src={arrow}/>
                    <img onClick={handleNext} src={arrow}/>
                </div>
            </div>
            <div className="image-container image-container-2">
                {quotesData.map((item, index) =>{ return (<img style={index == textNum ? show : hide} src={item.imageTwo}/>)})}
            </div>
            <div className="text-container text-container-2">
                {quotesData.map((item, index) =>{ return (<blockquote style={index == textNum ? show : hide}>
                    <p>{item.secondText}</p>
                </blockquote>)})}
                <img className="left" onClick={handlePrev} src={arrow}/>
            </div>
        </div>
    )
}

export default Quotes