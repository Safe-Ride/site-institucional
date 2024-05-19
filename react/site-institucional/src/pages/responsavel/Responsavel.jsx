import React from "react";
import styles from "./Responsavel.module.css";
import Header from "../../components/Header/Header";
import Criancas from "../../utils/assets/criancas-van.png";
import Card from "../../components/cards/Cards";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { faBell, faComments } from '@fortawesome/free-regular-svg-icons';

const Responsavel = () => {
  return (
    <>
      <Header />
      <div className={styles["banner-main"]}>
        <div className={styles["container"]}>
          <div className={styles["img-sobre-nos"]}>
            <img src={Criancas} alt="" className={styles["img-banner-sobre-nos"]}></img>
          </div>
          <div className={styles["banner-sobre-nos"]}>
            <h1 className={styles["text-uppercase"]}>
              <u>SafeRide Tracker</u>
            </h1>
            <h2 className={styles["pt-2"]}>
              Com o SafeRide Tracker, você sabe quando seu filho entra na van escolar e chega à escola, proporcionando tranquilidade enquanto segue seu dia!
            </h2>

          </div>
        </div>
      </div>
      <div className={styles["vantagens-motorista"]}>
        <div className={styles["container"]}>
          <h2 className={styles["title"]}>
            <span>Por que </span><strong>nos escolher</strong>
          </h2>
          <div className={styles['row']}>
            <Card
              image={<FontAwesomeIcon icon={faBell} size="6x" />}
              alt="Imagem do Card de Tranquilidade"
              title="Tranquilidade "
              description="Fique mais tranquilo ao ser notificado sobre seu filho durante o seu trajeto para a escola"
            />
            <Card
              image={<FontAwesomeIcon icon={faShieldHalved} size="6x" />}
              alt="Imagem do Card de Segurança"
              title="Segurança "
              description="A segurança do seu filho será aumentada ao ambas as partes estarem cientes da localização da criança durante o dia"
            />
            <Card
              image={<FontAwesomeIcon icon={faComments} size="6x" />}
              alt="Imagem do Card de Comunicação"
              title="Comunicação "
              description="Facilite a sua comunicação com o motorista por um meio mais direto"
            />
          </div>
        </div>
      </div>
      <div className={styles["vantagens-responsavel"]}>
        <div className={styles["container"]}>
          <h2 className={styles["title"]}>
            <strong>Vantagens para você Responsável</strong>
          </h2>
          <h2 className={styles["title"]}>Entenda um pouco melhor nosso SafeRide Tracker</h2>

          <div className={styles["banner-sobre-nos"]}>
            <h3 className={styles["pt-2"]}>
              Oferecemos notificações exclusivas em tempo real, permitindo que você acompanhe cada ação do
              motorista e saiba a localização do seu filho com apenas um olhar na barra de notificações. Além disso,
              dentro do aplicativo, você terá acesso detalhado aos horários precisos. Facilitamos ainda mais sua
              experiência ao disponibilizar boletos de pagamento no app, indicando quais foram pagos e quais estão
              pendentes, eliminando preocupações relacionadas a pagamentos.
            </h3>
          </div>
        </div>
      </div>
      <Footer/>
    </>

  );
};
export default Responsavel;