import React from 'react';
import '../Styles/grid.css';
import { aboutMeData } from './data';


function AboutMe() {
    return(
        <div className='grid'>
                {aboutMeData.map((item) => (
                    <div id={item.id} className='grid_item'>
                        <img src={item.imgURL}/>
                        <div className="grid_text">
                            <h3><strong>{item.title}</strong></h3>
                            <h4>{item.subtitle}</h4>
                        </div>
                    </div>
                ))};
        </div>
    )
}

export default AboutMe;