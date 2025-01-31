import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

function ComingSoon() {
    const { header } = useContext(AppContext);
    const linkedin = header?.contact?.linkedin;
    const github = header?.contact?.github;    
    const email = header?.contact?.email;

    return (
        <div className='ui very padded basic segment'>
            <div className='ui center aligned stackable grid'>
                <div className='ui row'>
                    <h1>coming soon</h1>
                </div>
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
    )
}

export default ComingSoon;
