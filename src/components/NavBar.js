import { Link } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
    return (
        <div className='NavBar'>

            <h2>
                <Link to={"/"}>Lucas Yohan</Link>
            </h2>

            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>

                <li>
                    <Link to={"/projetos"}>Projetos</Link>
                </li>

                <li>
                    <Link to={"/contatos"}>Contatos</Link>
                </li>

            </ul>
        </div>
    )
}

export default NavBar