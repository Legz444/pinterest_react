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
                <p><strong><a href="https://www.pinterestcareers.com/en/jobs/5614115/apprentice-engineer/?source=linkedin_limited_listing&utm_source=linkedin_limited_listing&gh_jid=5614115#apply-now">Pinterest Apprentice</a></strong></p>
            </div>
            <div className="nav_right">
                <div className="nav_self">
                    <img src={headshot}/>
                    <div className="nav_right_text">
                        <p className="nav_name_title">Web Developer<br/><span className="nav_name"><strong>Allegra Hilburger</strong></span></p>
                    </div>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/allegra-hilburger/"><i className="fa-brands fa-linkedin fa-fw fa-2x"/></a>
                    <a href="https://github.com/Legz444"><i className="fa-brands fa-github fa-fw fa-2x"/></a>
                    <i className="fa-solid fa-angle-down fa-fw fa-2x"/>
                </div>
            </div>
        </div>
    </>
 )
}

export default Navigation;