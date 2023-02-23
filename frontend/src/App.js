import { Intro, Bio, Skills, Projects, Contact, Footer } from "./components";
import { goToSection } from "./helpers";

import { useDispatch, useSelector } from "react-redux";
import { changeSection, stateSection } from "./slices/sectionSlice";

function App() {
<<<<<<< Updated upstream

  let sectionName = useSelector(stateSection);
  const dispatch = useDispatch();

  const goToNextSection = () => {
    const app = document.querySelector('.App');
    const section = app.querySelector(`[data-section=${sectionName}]`);
    return goToSection({section, modifier: 'next'});
  }

  const goToPreviousSection = () => {
    const app = document.querySelector('.App');
    const section = app.querySelector(`[data-section=${app.dataset.current}]`);
    return goToSection({section, modifier: 'previous'});
  }

  const handleMouseWheel = e => {
    let newSection;
    switch (Math.sign(e.deltaY)) {
      case 1:
        newSection = goToNextSection();
        break;
      case -1:
        newSection = goToPreviousSection();
        break;
    }
    setTimeout(() => {
      dispatch(changeSection(newSection));
      sectionName = newSection;
    }, 200);
  }

    document.documentElement.addEventListener('wheel', handleMouseWheel, false);
    document.documentElement.addEventListener('mousewheel', handleMouseWheel, false);

  return (
    <div className="App" data-current={sectionName}>
      <Intro name='intro'></Intro>
      <Bio name='bio'></Bio>
      <Skills name='skills'></Skills>
      <Projects name='projects'></Projects>
      <Contact name='contact'></Contact>
      <Footer name='footer'></Footer>
=======
  let sectionName = useSelector(stateSection);
  const dispatch = useDispatch();

  const goToNextSection = () => {
    const app = document.querySelector(".App");
    const section = app.querySelector(`[data-section=${sectionName}]`);
    return goToSection({ section, modifier: "next" });
  };

  const goToPreviousSection = () => {
    const app = document.querySelector(".App");
    const section = app.querySelector(`[data-section=${app.dataset.current}]`);
    return goToSection({ section, modifier: "previous" });
  };

  const handleMouseWheel = (e) => {
    let newSection;
    switch (Math.sign(e.deltaY)) {
      case 1:
        newSection = goToNextSection();
        break;
      case -1:
        newSection = goToPreviousSection();
        break;
    }
    setTimeout(() => {
      dispatch(changeSection(newSection));
      sectionName = newSection;
    }, 200);
  };

  document.documentElement.addEventListener("wheel", handleMouseWheel, false);
  document.documentElement.addEventListener(
    "mousewheel",
    handleMouseWheel,
    false
  );

  return (
    <div className="App" data-current={sectionName}>
      <Intro name="intro"></Intro>
      <Bio name="bio"></Bio>
      <Skills name="skills"></Skills>
      <Projects name="projects"></Projects>
      <Contact name="contact"></Contact>
      <Footer name="footer"></Footer>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
