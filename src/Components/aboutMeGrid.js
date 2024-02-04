import React from 'react';
import '../Styles/grid.css';
import { aboutMeData } from './data';


function AboutMe() {
    return(
        <div className='grid'>
                {aboutMeData.map((item) => (
                    <div id={item.id} className='grid_item'>
                        <img src="#"/>
                        <div>
                            <h3>{item.title}</h3>
                            <h4>{item.subtitle}</h4>
                        </div>
                    </div>
                ))};
        </div>
    )
}

export default AboutMe;