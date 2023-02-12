import logo from '../img/logo.svg';

const Navbar = () => {
    return ( 
            <header className='navbar'>
                <nav>
                    <div>
                        <a href="localhost:3000" className='logo'>
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <a href="">About Me</a>
                            </li>
                            <li>
                                <a href="">My Skills</a>
                            </li>
                            <li>
                                <a href="">Projects</a>
                            </li>
                            <li>
                                <a href="">Contact Me</a>
                            </li>
                            <li>
                                <a href="">Resume</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
     );
}
 
export default Navbar;