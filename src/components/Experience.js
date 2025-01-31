import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

function Experience() {
    const { experience, arraySet } = useContext(AppContext);

    const experienceSet = arraySet(experience, 3);

    return (
        <div id='experience' className='ui very padded basic segment'>
            <div className='ui stackable grid'>
                <div className='ui row'>
                    <div className='ui twelve wide column'>
                        <h1>Experience</h1>
                    </div>
                </div>
                {experienceSet.map((set, index) => (
                    <div className='ui row' key={index}>
                        {set.map((job) => (
                           <div key={job.role} className='ui four wide column'>
                                <h2>{job.role}</h2>
                                <h3>{job.company}<br></br>{job.start} - {job.end}</h3>
                                {job.responsibilities.map((responsibility, index) => (
                                    <p key={index}>{responsibility}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}

                    
            </div>
        </div>
    )
}

export default Experience;