import "./Navbar.css";
import logo_light from "../assets/night.png";
import logo_dark from "../assets/day.png";
import image_light from "../assets/image_light.png";
import image_dark from "../assets/image_dark.png";
import { useEffect, useState } from "react";

function Navbar({ theme, setTheme }) {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const bright_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div className={`navbar ${theme} ${hidden ? "hidden" : ""}`}>
      <div className="image">
        <img
          src={theme === "light" ? image_light : image_dark}
          alt="Alternar icone"
        />
      </div>

      <ul>
        <li>Home</li>
        <li>Sobre mim</li>
        <li>Projetos</li>
        <li>Contatos</li>
      </ul>

      <button className="theme-toggle" onClick={bright_mode}>
        <img
          src={theme === "light" ? logo_light : logo_dark}
          alt="Alternar tema"
        />
      </button>
    </div>
  );
}

export default Navbar;
