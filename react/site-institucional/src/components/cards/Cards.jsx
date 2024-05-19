import React from 'react';
import styles from './Cards.module.css'; // Arquivo de estilos CSS para o card

// Componente de Card
const Card = ({ image, alt, title, description }) => {
  return (
    <div className={styles["card"]}>
      <div className={styles['line-yellow']}></div>
      <div className={styles['card-image']}>
        {image}
      </div>
      <div className={styles["card-content"]}>
        <h3 className={styles["card-title"]}>{title}</h3>
        <p className={styles["card-description"]}>{description}</p>
      </div>
    </div>
  );
};

export default Card;