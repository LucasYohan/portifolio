import "./About.css";
import AboutImg from "../../assets/about.jpeg";
import CV from "../../assets/Curriculo_Lucas_Yohan_2025.pdf";
import Info from "./Info";

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__tittle">Sobre Mim</h2>
      <span className="section__subtittle">Introdução</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />

          <p className="about__description">
            Sou Desenvolvedor Web, formado no curso técnico em Análise e
            Desenvolvimento de Sistemas pela ETEC de Embu. Trabalho
            principalmente com JavaScript e suas tecnologias, como ReactJS e
            NodeJS. Também tenho experiência com MySQL, Figma e Canva, o que me
            permite unir lógica de programação com criatividade no design.
          </p>

          <a download="" href={CV} className="button button--flex">
            Baixar meu curriculo
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
