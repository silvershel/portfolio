import { Link, animateScroll as scroll } from 'react-scroll';

function Nav() {
    return (
        <div className='ui text menu sticky-footer'>
            <Link className='item' to='about' smooth={true} duration={500}>
                Contact
            </Link>
        </div>
        
    )
}
export default Nav;