import React from "react";
import styles from "./Header.module.css";
import imgLogo from "../../utils/assets/logo.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();

    return (

       <header className={styles["header"]}>
          <div className={styles["container"]}>
            <nav className={styles["navbar"]}>
            <div className={styles["logo"]}>
              <img src={imgLogo}></img>
            </div>
              <ul className={styles["list_header"]}>
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