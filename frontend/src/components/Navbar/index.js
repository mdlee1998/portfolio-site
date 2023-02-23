import logo from '../../img/logo.svg';
import NavButton from "../NavButton";
import "./styles.scss";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <div className="logo">
          <NavButton Name="intro">
            <svg
              viewBox="0 0 90 90"
              version="1.1"
              id="svg5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="layer1" transform="translate(-91.035197,-98.873981)">
                <path
                  id="path277"
                  d="m 91.035197,98.873981 v 75.000079 h 0.19327 v 0.0501 h 33.999993 v -2.99982 H 94.035014 V 98.873981 Z m 39.000203,0.203088 v 0.01034 h -14.46372 v 2.999821 h 33.99999 v -0.0103 h 11.48096 v 72.05038 h 2.98276 V 99.127195 h -0.19224 v -0.05013 z m -10.93628,8.745721 -20.063894,52.51669 h 20.554304 l -0.0351,0.0925 h 36.48097 l -18.24023,-47.7423 -8.41809,22.03379 z m 12.44936,55.3036 v 11.23963 h 9.63507 v -2.19057 h -6.13864 v -2.57503 h 5.58467 v -2.19057 h -5.58467 v -2.09289 h 5.93866 v -2.19057 z m 12.70414,0 v 11.23963 h 9.63507 v -2.19057 h -6.13864 v -2.57503 h 5.58467 v -2.19057 h -5.58467 v -2.09289 h 5.93865 v -2.19057 z"
                />
              </g>
            </svg>
          </NavButton>
        </div>
        <div>
          <ul>
            <li>
              <NavButton Name="bio">About Me</NavButton>
            </li>
            <li>
              <NavButton Name="skills">My Skills</NavButton>
            </li>
            <li>
              <NavButton Name="projects">Projects</NavButton>
            </li>
            <li>
              <NavButton Name="contact">Contact Me</NavButton>
            </li>
            <li>
              <button>Resume</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
