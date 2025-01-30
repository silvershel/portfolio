function Skills() {
    return (
        <div id='skills' className='ui very padded basic segment'>
            <div className='ui center aligned stackable grid'>
                <div className='ui row'>
                    <h1>Skills</h1>
                </div>
                <div className='ui row'>
                    <div className='ui four wide column'>
                        <h3>Languages and Frameworks</h3>
                        <p>Flask, JavaScript, Python, React</p>
                    </div>
                    <div className='ui four wide column'>
                        <h3>Databases</h3>
                        <p>PostgreSQL, SQLite</p>
                    </div>
                    <div className='ui four wide column'>
                        <h3>Deployment Platforms</h3>
                        <p>Heroku, Render</p>
                    </div>
                </div>
                <div className='ui row'>
                    <div className='ui four wide column'>
                        <h3>Testing Libraries</h3>
                        <p>Jest, Pytest, React Testing Library</p>
                    </div>
                    <div className='ui four wide column'>
                         <h3>UI and Web Development </h3>
                         <p>CSS, HTML, Semantic UI, Figma, Balsamiq</p>
                    </div>
                    <div className='ui four wide column'>
                        <h3>Design and Creative</h3>
                        <p>Adobe Creative Suite (Illustrator, InDesign, Photoshop)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;