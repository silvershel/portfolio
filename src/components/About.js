import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

function About() {
    const { header } = useContext(AppContext);
    const linkedin = header?.contact?.linkedin;
    const github = header?.contact?.github;    
    const email = header?.contact?.email;
    
    return (
        <div id='about' className='ui very padded basic segment'>
            <div className='ui stackable grid'>
                <div className='ui row'>
                    <div className='ui eight wide column'>
                        <header>
                            <h1>{header.name}</h1>
                            <h2>{header.title}</h2>
                        </header>
                        <p>{header.description}</p>
                        <div className='social-icons'>
                            <a href={linkedin} target='_blank' rel='noopener noreferrer' className='icon'>
                                <i className='big linkedin icon'></i>
                            </a>
                            <a href={github} target='_blank' rel='noopener noreferrer' className='icon'>
                                <i className='big github icon'></i>
                            </a>
                            <a href={email}  target='_blank' rel='noopener noreferrer' className='icon'>
                                <i className='big envelope icon'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;