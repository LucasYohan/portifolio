import { useState } from "react";
import "./Header.css";

function Header() {
  /*Menu*/
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Yohan
        </a>

        <div className={toggle ? "nav__menu show__menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#Home" className="nav__link active__link">
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#About" className="nav__link">
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#Skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#Services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>
                Portifolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times nav__close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
