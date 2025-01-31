import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

function Skills() {
    const { skills, arraySet } = useContext(AppContext);

    const skillsSets = arraySet(skills, 3);

    return (
        <div id='skills' className='ui very padded basic segment'>
            <div className='ui center aligned stackable grid'>
                <div className='ui row'>
                    <h1>Skills</h1>
                </div>
                {skillsSets.map((set, index) => (
                    <div className='ui row' key={index}>
                        {set.map((skill) => (
                            <div className='ui three wide column' key={skill.title}>
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