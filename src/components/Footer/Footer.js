import "./Footer.css"
import { FaLinkedin, FaGithub } from "react-icons/fa"


function Footer() {
  return (
    <footer className="footer">
      <ul className="social_list">

        <li className="Linkedin">
          <FaLinkedin />
        </li>

        <li className="Github">
          <FaGithub />
        </li>
        
      </ul>
      <p><span>LucasYohan</span> &copy; 2025</p>
    </footer>
  )
}

export default Footer