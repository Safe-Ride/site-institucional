import React, { useState } from "react";
import styles from "./Header.module.css";
import imgLogo from "../../utils/assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import Rotas from "../../routes"
import Home from "../../pages/home/Home";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const rotaCadastro = () => {
        window.location.href = "http://localhost:3000";
    };


    return (
        <header className={styles["header"]}>
            <div className={styles["container"]}>
                <nav className={styles["navbar"]}>
                    <div className={styles["logo"]}>
                       <a onClick={() => navigate (`/`)}> <img src={imgLogo} alt="Logo" /></a>
                    </div>
                    <button className={styles["menu-icon"]} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className={`${styles["list_header"]} ${showMenu ? styles["show"] : ""}`}>
                        <li><a onClick={() => navigate(`/`)}>Pagina Inicial</a></li>
                        <li><a onClick={() => navigate(`/motorista`)}>Sou Motorista</a></li>
                        <li><a onClick={() => navigate(`/responsavel`)}>Sou Responsável</a></li>
                        <li><a onClick={rotaCadastro} >Cadastrar</a></li>
                        <li><a href="#">Entrar</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;