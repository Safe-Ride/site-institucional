import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Van from "../../utils/assets/van-escolar.png"
import Card from "../../components/cards/Cards";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const iconGear = <FontAwesomeIcon icon="fa-sharp fa-solid fa-gear" />

const Home = () => {
  return (

      <>

  <Header />
  <div className={styles["banner-main"]}>
    <div className={styles["container"]}>
      <div className={styles["banner-main-text"]}>
        <h1 className={styles["text-uppercase"]}>
          <strong>Segurança em Movimento: Por uma Viagem Mais Segura para
            Todos</strong>
        </h1>
        <p className={styles["pt-2"]}>
          Juntos, fazemos da segurança um caminho compartilhado para todos
          os destinos
        </p>
        <div className={styles["button-container"]}>
          <a href="responsavel.html" className={`${styles["btn"]} ${styles["btn-yellow"]}`}>Sou Responsável</a>
          <a href="motorista.html" className={`${styles["btn"]} ${styles["btn-black"]}`}>Sou Motorista</a>
        </div>
      </div>
      <div className={styles["img-van"]}>
        <img className={styles["img-Banner"]} src={Van} alt="Van Escolar" />
      </div>
    </div>
  </div>
  <div className={styles["vantagens-motorista"]}>
    <div className={styles["container"]}>
      <h2 className={styles["title"]}>
        <strong>Vantagens para você motorista</strong>
      </h2>
      <Card 
          image= ''
          alt="Imagem do Card de eficiencia"
          title="Eficiencia "
          description="Melhora na sua organização no dia a dia"
          icon = {iconGear}
        />
    </div>
  </div>
</>

  );
};
export default Home;
