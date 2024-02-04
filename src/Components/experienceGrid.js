import React from 'react';
import '../Styles/grid.css';
import { experienceData } from './data';


function Experience() {
    return(
        <div className='grid'>
            {experienceData.map((item) => (
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

export default Experience;