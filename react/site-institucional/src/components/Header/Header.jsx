import React, { useState } from "react";
import styles from "./Header.module.css";
import imgLogo from "../../utils/assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import Home from "../../pages/home/Home";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setShowMenu(!showMenu);
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
                        <li><a href="#">Sou Motorista</a></li>
                        <li><a onClick={() => navigate(`/responsavel`)}>Sou Responsável</a></li>
                        <li><a href="#">Entrar</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;