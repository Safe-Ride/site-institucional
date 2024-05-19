import React from "react";
import styles from "./Footer.module.css";
import imgLogo from "../../utils/assets/logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className={styles["footer"]}>
            <div className={styles["container"]}>
                <div className={styles["row"]}>
                    <div className={styles["logo"]}>
                        <img src={imgLogo} alt="Logo" />
                    </div>

                    <div className={styles["contato"]}>
                        <h3 className={styles["text-uppercase"]}>
                            <strong>Contato</strong>
                        </h3>
                        <p>
                            <FontAwesomeIcon icon={faMapMarker} />
                            &nbsp; Rua Haddock Lobo, 595 -
                            Cerqueira César, São Paulo - SP, 01414-001
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPhone} />
                            &nbsp; +55 (11) 1234-5678
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} />
                            &nbsp; contato@empresa.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
