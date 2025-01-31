import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

function Projects() {
    const { projects } = useContext(AppContext);

    return (
        <div id='projects' className='ui very padded basic segment'>
            <h1>Projects</h1>
            <img src={projects.image} className='ui image'></img>

            {projects.map((project) => (
                <div>
                    
                </div>
            ))}
            <h2>On The Lamb</h2>
            <button className='ui button'>
                <i className='icon github'></i>
                Repo
            </button>
            <button className='ui button'>
                <i className='icon vimeo'></i>
                Demo
            </button>
        </div>
    )
}

export default Projects;