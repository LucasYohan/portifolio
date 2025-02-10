import './Contatos.css'
import Linkedin from "../../assets/linkedin.png"
import { Link } from 'react-router-dom'

const Contatos = () => {
    return (
        <div className={"contatosGeral"}>
            <div className='contatos'>
                <ul>
                    <li className='linkedin'>
                        <Link to={"https://www.linkedin.com/in/lucasyohan"}>Linkedin</Link>
                        <a href='https://www.linkedin.com/in/lucasyohan'>
                            <img src={Linkedin} />
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