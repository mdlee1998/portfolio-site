import { Intro, Bio, Skills, Projects, Contact, Footer } from "./components";


function App() {
  return (
    <div className="App">
      <Intro name='intro'></Intro>
      <Bio name='bio'></Bio>
      <Skills name='skills'></Skills>
      <Projects name='projects'></Projects>
      <Contact name='contact'></Contact>
      <Footer name='footer'></Footer>
    </div>
  );
}

export default App;
