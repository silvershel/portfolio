import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

function Projects() {
    const { projects } = useContext(AppContext);

    return (
        <div id='projects' className='ui very padded basic segment'>
            <div className='ui stackable grid'>
                <div className='ui row'>
                    <div className='ui twelve wide column'>
                        <h1>Projects</h1>
                    </div>
                </div>
                <div className='ui row'>
                    {projects.map((project) => (
                        <div key={project.title} className='ui four wide column'>
                            <img src={project.image} className='ui  image'></img>
                            <h2>{project.title}</h2>
                            <p>{project.description.main}</p>
                            <p><strong>Backend:</strong> {project.description.backend}</p>
                            <p><strong>Frontend:</strong> {project.description.frontend}</p>
                            <p>Prototype coming soon.</p>
                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                <button className='large ui button'>
                                    <i className='icon vimeo'></i>
                                    Demo
                                </button>
                            </a>
                            <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                                <button className='large ui button '>
                                    <i className='icon github'></i>
                                    Repo
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