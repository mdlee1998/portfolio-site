import headshot from "../../img/HeadShot.jpeg";
import Navbar from "../Navbar";
import "./styles.scss";

const Intro = ({name}) => {

  return (
    <section data-section={name} className="intro">
        <Navbar></Navbar>
      <div className="inner-content">
        <article>
          <h1>Matthew Lee</h1>
          <p>
            I am a <span>Full-Stack Developer</span> with a love of creating
            products that make their user's lives more efficient.
          </p>
        </article>
        <figure>
          <img src={headshot} alt="" id='photo'/>
        </figure>
      </div>
    </section>
  );
};

export default Intro;
