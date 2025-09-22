import { useState } from "react";
import "./Services.css";

function Services() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__tittle">Trabalhos</h2>
      <span className="section__subtittle">Minha jornada até o momento</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__tittle">Auxiliar de Monitoramento</h3>
          </div>

          <span
            className="services__button"
            onClick={() => {
              toggleTab(1);
            }}
          >
            Ver mais
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => {
                  toggleTab(0);
                }}
              ></i>

              <h3 className="services__modal-tittle">
                Auxiliar de Monitoramento
              </h3>
              <p className="services__modal-description">
                Auxiliei no monitoramento de caminhoes de alta carga e valor,
                garantindo a segurança dos mesmos e a garantia de que a
                tragetoria designada seria concluida
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">9 meses de atuação</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Experiencia com tecnologias de rastreamento (Onix, Sascar,
                    Omnilink e etc)
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Alta atenção aos detalhes
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__tittle">Tapecaria</h3>
          </div>

          <span
            className="services__button"
            onClick={() => {
              toggleTab(2);
            }}
          >
            Ver mais
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => {
                  toggleTab(0);
                }}
              ></i>

              <h3 className="services__modal-tittle">Auxiliar em Tapecaria</h3>
              <p className="services__modal-description">
                Trabalho informal como auxiliar e ajudante em uma tepecaria
                local. Serviço braçal, demandando muita resiliencia e força de
                vontade para manter a constancia
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">8 meses de atuação</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Alta adaptabilidade</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Organização e disciplina
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__tittle">Jovem Aprendiz Admnistrativo</h3>
          </div>

          <span
            className="services__button"
            onClick={() => {
              toggleTab(3);
            }}
          >
            Ver mais
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => {
                  toggleTab(0);
                }}
              ></i>

              <h3 className="services__modal-tittle">
                Jovem Aprendiz Admnistrativo
              </h3>
              <p className="services__modal-description">
                Atuei como Jovem Aprendiz Admnistrativo na área de finanças no
                Hospital Geral de Itapecerica da Serra. Sendo responsavel por
                auxiliar nos processos admnistrativos, envio de documento e
                verificação de informações delicadas
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    1 ano e meio de atuação
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Experienca com pacote Office (Word e Excel)
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Alta organização e foco
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
