import React, {useState, useEffect} from "react"
import {NavLink} from "react-router-dom"

function Navigation(){
    let [toggle, setToggle] = useState(false)
    
    function handleClick(){
        setToggle(prev => !prev)
        console.log(toggle)
    }



    return(
        <div className="navigation">
            <div 
            className={toggle ? "hamburger open" : "hamburger"}
            onClick={handleClick}
            > 
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
            <nav className={toggle ? "opennav" : undefined }>
                <ul>
                    <li>
                        <NavLink activeClassName="active" to="/1">About</NavLink>
                    </li>
                        <li><NavLink activeClassName="active" to="/2">Satire</NavLink></li>
                        <li><NavLink activeClassName="active" to="/3">Poetry</NavLink></li>
                        <li><NavLink activeClassName="active" to="/4">Rants</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation