import { Link } from 'react-scroll';

function Nav() {
    return (
        <div className='ui text menu sticky-nav'>
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
        </div>
        
    )
}
export default Nav;