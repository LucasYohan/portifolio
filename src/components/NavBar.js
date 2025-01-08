import { Link } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
    return (
        <div className='NavBar'>

            <h2>
                <Link to={"/portifolio"}>Lucas Yohan</Link>
            </h2>

            <ul>
                <li>
                    <Link to={"/portifolio"}>Home</Link>
                </li>

                <li>
                    <Link to={"/portifolio/projetos"}>Projetos</Link>
                </li>

                <li>
                    <Link to={"/portifolio/contatos"}>Contatos</Link>
                </li>

            </ul>
        </div>
    )
}

export default NavBar
