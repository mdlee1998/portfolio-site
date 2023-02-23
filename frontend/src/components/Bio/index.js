import "./styles.scss";

const Bio = ({ name }) => {
  return (
    <section data-section={name} className="bio">
      <div className="inner-content">
        <div>
          <h3>I'm a fullstack developer,</h3>
        </div>
        <div>
          <p>
            I’m a Front-End Developer located in Poland. I have a serious
            passion for UI effects, animations and creating intuitive, dynamic
            user experiences. Well-organised person, problem solver, independent
            employee with high attention to detail. Fan of MMA, outdoor
            activities, TV series and English literature. A family person and
            father of two fractious boys, Interested in the entire frontend
            spectrum and working on ambitious projects with positive people.
            Let’s make something special.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bio;
