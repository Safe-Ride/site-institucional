import React from "react";
import styles from "./Responsavel.module.css";
import Header from "../../components/Header/Header";
import Van from "../../utils/assets/van-escolar.png"
import Card from "../../components/cards/Cards";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faEye, faShieldHalved, faClock } from '@fortawesome/free-solid-svg-icons';

const Responsavel = () => {
  return (
    <>
      <Header />
      <div className={styles["banner-responsavel"]}>
        <div className={styles["container"]}>
          <div className={styles["titlepage"]}>
            <h1>
              Segurança em Movimento: Por uma Viagem Mais Segura para
                Todos
            </h1>
            <p className={styles["pt-2"]}>
              Juntos, fazemos da segurança um caminho compartilhado para todos
              os destinos
            </p>
          </div>
          {/* <div className={styles["img-van"]}>
            <img className={styles["img-Banner"]} src={Van} alt="Van Escolar" />
          </div> */}
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
      {/* <div class="brand_color">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>SafeRide Tracker</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div class="about_box">
                <figure><img src="images/criancas-van.png" /></figure>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div class="about_box">

                <h2>Com o SafeRide Tracker, você sabe quando seu filho entra na van escolar e chega à escola,
                  proporcionando tranquilidade enquanto segue seu dia! .</h2>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div class="about">
        <div class="container">

        </div>
      </div>

      <div class="whyschose">
        <div class="container">

          <div class="row">
            <div class="col-md-7">
              <div class="title">
                <h2>Por que <strong class="black">nos escolher</strong></h2>
                <span>Sabendo de toda a preocupação que um pai tem com o seu filho, criamos um produto para deixar
                  essa preocupação um pouco menor!
                  Com funções que vão te mostrar quando seu filho entrou na van e
                  foi deixado na escola e um chat para melhorar sua comunicação com o motorista em caso de algum
                  imprevisto ou notificar a ele uma possível falta. </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="choose_bg">
        <div class="container">
          <div class="white_bg">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="for_box">
                  <i><img src="icon/1.png" /></i>
                  <h3>Tranquilidade</h3>
                  <p>Fique mais tranquilo ao ser notificado sobre seu filho durante o seu trajeto para a escola </p>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="for_box">
                  <i><img src="icon/2.png" /></i>
                  <h3>Segurança</h3>
                  <p>A segurança do seu filho será aumentada ao ambas as partes estarem cientes da localização da
                    criança durante o dia </p>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="for_box">
                  <i><img src="icon/3.png" /></i>
                  <h3>Comunicação</h3>
                  <p>Facilite a sua comunicação com o motorista por um meio mais diveto</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
  
      <div class="service">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ">
              <div class="title">
                <h2>Mais detalhes</h2>
                <span>Entenda um pouco melhor nosso SafeRide Tracker</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="title">
              <span>Oferecemos notificações exclusivas em tempo real, permitindo que você acompanhe cada ação do
                motorista e saiba a localização do seu filho com apenas um olhar na barra de notificações. Além disso,
                dentro do aplicativo, você terá acesso detalhado aos horários precisos. Facilitamos ainda mais sua
                experiência ao disponibilizar boletos de pagamento no app, indicando quais foram pagos e quais estão
                pendentes, eliminando preocupações relacionadas a pagamentos.</span>
            </div>

          </div>
        </div>
      </div> */}
    </>

  );
};
export default Responsavel;