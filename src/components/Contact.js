import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

function Contact() {
    const { header } = useContext(AppContext);
    const linkedin = header?.contact?.linkedin;
    const github = header?.contact?.github;    
    const email = header?.contact?.email;
    
    return (
        <div id='contact' className='ui very padded basic segment'>
            <div className='ui stackable grid'>
                <div className='ui row'>
                    <div className='ui eight wide column'>
                        <h1>Contact</h1>
                    </div>
                </div>
                <div className='ui row'>
                    <div className='ui eight wide column'>
                        <div className='social-icons'>    
                            <a href={linkedin} target='_blank' rel='noopener noreferrer' className='icon'>
                                <i className='huge linkedin icon'></i>
                            </a>
                            <span><h2>Find me on LinkedIn</h2></span>
                        </div>
                        <br></br>
                        <div className='social-icons'>
                            <a href={github} target='_blank' rel='noopener noreferrer' className='icon'>
                                <i className='huge github icon'></i>
                            </a>
                            <span><h2>View my GitHub</h2></span>
                        </div>
                        <br></br>
                        <div className='social-icons'>
                            <a href={email}  target='_blank' rel='noopener noreferrer' className='icon'>
                                <i className='huge envelope icon'></i>
                            </a>
                            <span><h2>Send me an email</h2></span>
                        </div>
                        <br></br>
                        <div className='social-icons'>
                            <a href={header.cv}  download="silvershel_resume.pdf" className='icon'>
                                <i className='huge arrow circle down icon'></i>
                            </a>
                            <span><h2>Download CV</h2></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;