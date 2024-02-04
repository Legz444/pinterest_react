import React from 'react';
import '../Styles/grid.css';
import { experienceData } from './data';


function Experience() {
    return(
        <div className='grid'>
            {experienceData.map((item) => (
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

export default Experience;