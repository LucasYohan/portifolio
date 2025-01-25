import { useState } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="NavBar">
            <h2>
                <Link to={"/"}>Lucas Yohan</Link>
            </h2>

            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>

                <li className="dropdown">
                    <button onClick={toggleDropdown} className="dropdown-button">
                        <a>Projetos</a>
                    </button>
                    <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                        <li><Link to={"/projeto1"}>Teste 1</Link></li>
                        <li><Link to={"/projeto2"}>Teste 2</Link></li>
                        <li><Link to={"/projeto3"}>Teste 3</Link></li>
                        <li><Link to={"/projeto4"}>Teste 4</Link></li>
                        <li><Link to={"/projeto5"}>Teste 5</Link></li>
                    </ul>
                </li>

                <li>
                    <Link to={"/contatos"}>Contatos</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
