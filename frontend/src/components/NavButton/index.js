import { goToSection } from "../../helpers";
import "./styles.scss";

const NavButton = ({Name, children}) => {

    const handleNavigation = () => {
        const section = document.querySelector(`[data-section=${Name}]`);
        goToSection({section});
    }

    return ( 
        <button onClick={handleNavigation} class='navbutton' >{children}</button>
     );
}
 
export default NavButton;