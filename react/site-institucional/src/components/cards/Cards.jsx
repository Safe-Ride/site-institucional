import React from 'react';
import styles from'./Cards.module.css'; // Arquivo de estilos CSS para o card

// Componente de Card
const Card = (props) => {
  return (
    <div className={styles["card"]}>
    <div className={styles['line-yellow']}></div>
      <img src={props.image} alt={props.alt} className={styles["card-img"]} />
      <div className={styles["card-content"]}>
      {props.icon}
        <h3 className={styles["card-title"]}>{props.title}</h3>
        <p className={styles["card-description"]}>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;