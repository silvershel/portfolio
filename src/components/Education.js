import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

function Education() {
    const { education, arraySet } = useContext(AppContext);

    const educationSet = arraySet(education, 2);

    return (
        <div id='education' className='ui very padded basic segment'>
            <div className='ui stackable grid'>
                <div className='ui row'>
                    <div className='ui twelve wide column'>
                        <h1>Education</h1>
                    </div>
                </div>
                {educationSet.map((set, index) => (
                    <div className='ui row' key={index}>
                        {set.map((school) => (
                            <div className='ui six wide column' key={school.institution}>
                                <h2>{school.institution}</h2>
                                <h3>{school.degree} | {school.start} - {school.end}</h3>
                                <p>{school.details}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education;