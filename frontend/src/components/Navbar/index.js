import NavButton from "../NavButton";
import logo from '../../img/logo.svg';
import "./styles.scss";

const Navbar = () => {

    return ( 
            <header className='navbar'>
                <nav>
                    <div>
                        <button href="localhost:3000" className='logo'>
                            <img src={logo} alt="" />
                        </button> 
                    </div>
                    <div>
                        <ul>
                            <li>
                                <NavButton Name='bio'>About Me</NavButton>
                            </li>
                            <li>
                                <NavButton Name='skills'>My Skills</NavButton>
                            </li>
                            <li>
                                <NavButton Name='projects'>Projects</NavButton>
                            </li>
                            <li>
                                <NavButton Name='contact'>Contact Me</NavButton>
                            </li>
                            <li>
                                <button >Resume</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
     );
}
 
export default Navbar;