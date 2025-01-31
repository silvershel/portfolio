import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

function Skills() {
    const { skills, arraySet } = useContext(AppContext);

    const skillsSet = arraySet(skills, 3);

    return (
        <div id='skills' className='ui very padded basic segment'>
            <div className='ui stackable grid'>
                <div className='ui row'>
                    <div className='ui twelve wide column'>
                        <h1>Skills</h1>
                    </div>
                </div>
                {skillsSet.map((set, index) => (
                    <div className='ui row' key={index}>
                        {set.map((skill) => (
                            <div className='ui four wide column' key={skill.title}>
                                <h2>{skill.title}</h2>
                                {skill.skills.map((skill, index) => (
                                    <p key={index}>{skill}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;