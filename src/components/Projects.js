import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

function Projects() {
    const { projects } = useContext(AppContext);

    return (
        <div id='projects' className='ui very padded basic segment'>
            <div className='ui center aligned stackable grid'>
                <div className='ui row'>
                    <h1>Projects</h1>
                </div>
                <div className='ui row'>
                    {projects.map((project) => (
                        <div key={project.title} className='ui four wide column'>
                            <img src={project.image} className='ui  image'></img>
                            <h2>{project.title}</h2>
                            <p>{project.description.main}</p>
                            <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                                <button className='large ui button '>
                                    <i className='icon github'></i>
                                    Repo
                                </button>

                            </a>
                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                <button className='large ui button'>
                                    <i className='icon vimeo'></i>
                                    Demo
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;