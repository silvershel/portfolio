import { Link, animateScroll as scroll } from 'react-scroll';

function Nav() {
    return (
        <div className='ui center aligned grid sticky-nav'>
            <div className='ui row'>
                <div className='ui equal width column'>
                    <h1>Shelli Silverstein</h1>
                    <h3>Sofware Engineer & Designer</h3>
                    <button className='ui circular icon button'>
                        <i className='big github icon'></i>
                    </button>
                    <button className='ui circular icon button'>
                        <i className='big linkedin icon'></i>
                        <a href='https://www.linkedin.com/in/silvershel/' />
                    </button>
                </div>
            </div>
            <div className='ui text menu'>
                <Link className='item' to='skills' smooth={true} duration={500}>
                    Skills
                </Link>
                <Link className='item' to='projects' smooth={true} duration={500}>
                    Projects
                </Link>
                <Link className='item' to='experience' smooth={true} duration={500}>
                    Experience
                </Link>
                <Link className='item' to='education' smooth={true} duration={500}>
                    Education
                </Link>
                <Link className='item' to='about' smooth={true} duration={500}>
                    About
                </Link>
            </div>
        </div>
    )
}
export default Nav;