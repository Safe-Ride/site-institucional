import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Card from "../../components/cards/Cards"
import BannerImg from "../../utils/assets/banner-motorista.png"
import styles from "./Motorista.module.css"
import Botao from "../../components/Botao/Botao"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoneyBill1 } from "@fortawesome/free-regular-svg-icons"
import { faComments, faRoad } from "@fortawesome/free-solid-svg-icons"

const Motorista = () => {
    return (
        <>
            <Header />
            <div className={styles["titulo"]}>
                <h2>ADMIN PRO</h2>
            </div>
            <div className={styles["banner"]}>
                <div className={styles["container"]}>
                    <div className={styles["content"]}>
                        <h1>ADMINISTRE SEU DIA A DIA DE FORMA MAIS FÁCIL E RÁPIDA!</h1>
                        <Botao to={"/cadastro-motorista"} tipo={"btn-amarelo"}>Cadastre-se Agora</Botao>
                    </div>
                    <img src={BannerImg} alt="" />
                </div>
            </div>

            <section className={styles["banner-motorista"]}>
                <div className={styles["container"]}>
                    <h2 className={styles["subtitulo"]}>VANTAGENS PARA VOCÊ MOTORISTA</h2>
                    <div className={styles["cards"]}>

                        <Card
                            image={<FontAwesomeIcon icon={faMoneyBill1} size="6x" />}
                            title={"Financeiro"}
                            description={"Veja de forma simples e organizada quais clientes já pagaram e quais ainda possuem pendências"}
                        />
                        <Card
                            image={<FontAwesomeIcon icon={faComments} size="6x" />}
                            title={"Comunicação"}
                            description={"Fale com o cliente de forma direta e fique informado sobre quais alunos irão ou não à aula"}
                        />
                        <Card
                            image={<FontAwesomeIcon icon={faRoad} size="6x" />}
                            title={"Rotas"}
                            description={"Descubra o melhor trajeto entre todos os alunos e escolas"}
                        />
                    </div>
                    <div className={styles["botao-area"]}>
                        <Botao to={"/cadastro-motorista"} tipo={"btn-preto"}>Cadastrar</Botao>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}

export default Motorista