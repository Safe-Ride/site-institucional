import styles from './Botao.module.css'
import { useNavigate } from 'react-router-dom'

const Botao = ({ tipo, to, children }) => {

    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(to)} className={styles[tipo]}>
            { children }
        </button>
    )

}

export default Botao