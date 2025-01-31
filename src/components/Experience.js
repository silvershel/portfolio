import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

function Experience() {
    const { experience } = useContext(AppContext);

    return (
        <div id='experience' className='ui very padded basic segment'>
            <div className='ui center aligned stackable grid'>
                <div className='ui row'>
                    <h1>Experience</h1>
                </div>
                    {experience.map((job) => (
                        <div className='ui row' key={job.company}>
                            <div className='ui eight wide column'>
                                <h2>{job.company}</h2>
                                <h3>{job.role} | {job.location} | {job.start} - {job.end}</h3>
                                {job.responsibilities.map((responsibility, index) => (
                                    <p key={index}>{responsibility}</p>
                                ))}
                            </div>
                        </div>
                    ))} 
            </div>
        </div>
    )
}

export default Experience;