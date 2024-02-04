import React from "react";
import "../Styles/navigation.css"
import pinterestLogo from "../Images/pinterest_logo.png";
import headshot from "../Images/headshot.jpeg";

function Navigation() {
 return(
    <>
        <div className="nav_container">
            <div className="pinLogo">
                <img src={pinterestLogo}/> 
                <p>Pinterest Apprentice</p>
            </div>
            <div className="nav_right">
                <div className="nav_self">
                    <img src={headshot}/>
                    <div className="nav_right_text">
                        <p className="nav_name_title">Web Developer<br/><span className="nav_name"><strong>Allegra Hilburger</strong></span></p>
                    </div>
                </div>
                <div>
                    <i className="fa-brands fa-linkedin fa-fw fa-2x"/>
                    <i className="fa-brands fa-github fa-fw fa-2x"/>
                    <i className="fa-solid fa-angle-down fa-fw fa-2x"/>
                </div>
            </div>
        </div>
    </>
 )
}

export default Navigation;