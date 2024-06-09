import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Van from "../../utils/assets/van-escolar.png"
import Card from "../../components/cards/Cards";
import CardBlack from "../../components/cards/Card-black"
import SobreNos from "../../utils/assets/sobre-nos.jpg"
import Footer from "../../components/Footer/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faEye, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { faBell, faComments, faClock } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

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
              <a  
              onClick={()=> navigate(`/responsavel`)}
              className={`${styles["btn"]} ${styles["btn-yellow"]}`}>Sou Responsável
              </a>
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
          <div className={styles['row']}>
            <Card
              image={<FontAwesomeIcon icon={faGear} size="6x" />}
              alt="Imagem do Card de eficiencia"
              title="Eficiencia "
              description="Melhora na sua organização no dia a dia"
            />
            <Card
              image={<FontAwesomeIcon icon={faEye} size="6x" />}
              alt="Imagem do Card de Clareza"
              title="Clareza "
              description="Transparência com o cliente para com o seu filho"
            />
            <Card
              image={<FontAwesomeIcon icon={faShieldHalved} size="6x" />}
              alt="Imagem do Card de Segurança"
              title="Segurança "
              description="Aumento na segurança da criança ao fazer com que as 2 partes saibam de cada ocorrência com ela"
            />
            <Card
              image={<FontAwesomeIcon icon={faClock} size="6x" />}
              alt="Imagem do Card de Praticidade"
              title="Praticidade "
              description="Evite perder tempo esperando crianças que não irão ou outra pessoa irá levar ou buscar ela"
            />
          </div>
          <div className={styles['btn']}>
            <a href="#" className={styles['btn-white']}>Saiba Mais</a>
          </div>
        </div>
      </div>
      <div className={styles["vantagens-responsavel"]}>
        <div className={styles["container"]}>
          <h2 className={styles["title"]}>
            <strong>Vantagens para você Responsável</strong>
          </h2>
          <div className={styles['row']}>
            <CardBlack
              image={<FontAwesomeIcon icon={faBell} size="6x" />}
              alt="Imagem do Card de Tranquilidade"
              title="Tranquilidade "
              description="Fique mais tranquilo ao ser notificado sobre seu filho durante o seu trajeto para a escola"
            />
            <CardBlack
              image={<FontAwesomeIcon icon={faShieldHalved} size="6x" />}
              alt="Imagem do Card de Segurança"
              title="Segurança "
              description="A segurança do seu filho será aumentada ao ambas as partes estarem cientes da localização da criança durante o dia"
            />
            <CardBlack
              image={<FontAwesomeIcon icon={faComments} size="6x" />}
              alt="Imagem do Card de Comunicação"
              title="Comunicação "
              description="Facilite a sua comunicação com o motorista por um meio mais direto"
            />
          </div>
          <div className={styles['btn']}>
            <a 
            onClick={()=> navigate(`/responsavel`)} 
            className={styles['btn-card-black']}>Saiba Mais</a>
          </div>
        </div>
      </div>
      <div className={styles["banner-main"]}>
        <div className={styles["container"]}>
          <div className={styles["img-sobre-nos"]}>
            <img src={SobreNos} alt="" className={styles["img-banner-sobre-nos"]}></img>
          </div>
          <div className={styles["banner-sobre-nos"]}>
            <h1 className={styles["text-uppercase"]}>
              <strong>Sobre Nós</strong>
            </h1>
            <p className={styles["pt-2"]}>
            SafeRide é uma startup de tecnologia, fundada em 2024 (dois mil e vinte quatro), com o propósito de desenvolver soluções tecnológicas para melhor gestão de clientes no transporte escolar particulares e acompanhamento em tempo real dos alunos de cada responsável dos alunos, a fim de trazer conforto e segurança para os pais e controle tanto financeiro quanto de lotação para o motorista.
            </p>

          </div>
        </div>
      </div>
      
      <Footer />

    </>

  );
};
export default Home;
