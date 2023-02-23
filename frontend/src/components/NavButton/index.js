import { goToSection } from "../../helpers";
import "./styles.scss";
import { changeSection } from "../../slices/sectionSlice";

import { useDispatch } from "react-redux";

const NavButton = ({ Name, children }) => {
  const dispatch = useDispatch();

  const handleNavigation = () => {
    const section = document.querySelector(`[data-section=${Name}]`);
    const newSection = goToSection({ section });
    dispatch(changeSection({ payload: newSection }));
  };

  return (
    <button onClick={handleNavigation} class="navbutton">
      {children}
    </button>
  );
};

export default NavButton;
