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
            <div className={styles["banner"]}>
                <div className={styles["container"]}>
                    <div className={styles["content"]}>
                        <div className={styles["titulo"]}>
                            <h1>ADMIN PRO</h1>
                        </div>
                        <h2>Administre seu dia a dia de forma mais <b>fácil</b> e <b>rápida</b>!</h2>
                        <Botao to={"/cadastro-motorista"} tipo={"btn-amarelo"}>Cadastre-se Agora</Botao>
                    </div>
                    <img src={BannerImg} alt="" />
                </div>
            </div>

            <section className={styles["banner-motorista"]}>
                <div className={styles["container"]}>
                    <h2 className={styles["subtitulo"]}><span className={styles["text-amarelo"]}>POR QUE</span> NOS ESCOLHER</h2>
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
                        <Botao to={"/cadastro-motorista"} tipo={"btn-branco"}>Cadastrar</Botao>
                    </div>
                </div>
            </section>

            <section className={styles["banner-vantagem"]}>
                <div className={styles["container"]}>
                    <h2>VANTAGENS PARA VOCÊ MOTORISTA</h2>
                    <p>Tudo isso em uma aplicação simples de usar, feita pensada em como ser usada sem te atrapalhar no trânsito da cidade. Afinal apesar de aumentar a transparência com o seu cliente, nos preocupamos principalmente com a vida de todos. </p>
                </div>
            </section>


            <Footer />
        </>
    )
}

export default Motorista