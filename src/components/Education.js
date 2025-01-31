import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

function Education() {
    const { education, arraySet } = useContext(AppContext);

    const educationSets = arraySet(education, 2);

    return (
        <div id='education' className='ui very padded basic segment'>
            <div className='ui center aligned stackable grid'>
                <div className='ui row'>
                    <h1>Education</h1>
                </div>
                {educationSets.map((chunk, index) => (
                    <div className='ui row' key={index}>
                        {chunk.map((school) => (
                            <div className='ui five wide column' key={school.institution}>
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