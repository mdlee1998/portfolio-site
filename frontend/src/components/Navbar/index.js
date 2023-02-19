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
                                <button >About Me</button>
                            </li>
                            <li>
                                <button >My Skills</button>
                            </li>
                            <li>
                                <button >Projects</button>
                            </li>
                            <li>
                                <button >Contact Me</button>
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