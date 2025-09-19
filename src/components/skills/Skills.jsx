import "./Skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__tittle">Minhas Habilidades</h2>
      <span className="section__subtittle">Introdução</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}

export default Skills;
