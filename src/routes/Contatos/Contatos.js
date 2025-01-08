import './Contatos.css'
import NavBar from '../../components/NavBar'
import Linkedin from "../../img/linkedin.png"
import { Link } from 'react-router-dom'

const Contatos = () => {
    return (
        <div className={"contatosGeral"}>
            <NavBar />
            <div className='contatos'>
                <ul>
                    <li className='linkedin'>
                        <Link to={"https://www.linkedin.com/in/lucas-yohan-fran%C3%A7a-marinho-72160628b/"}>Linkedin</Link>
                        <a href='https://www.linkedin.com/in/lucas-yohan-fran%C3%A7a-marinho-72160628b/'>
                            <img src={Linkedin} href />
                        </a>
                    </li>

                    <li className='Gmail'>
                        <h1>Gmail : lucasyohanfmarinho@gmail.com</h1>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contatos