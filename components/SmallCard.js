import React from 'react';
import styles from "../styles/SmallCard.module.css";
import Image from 'next/image';

const SmallCard = ({title,src,desc}) => {
  return (
    <div className={styles.card}>
        <Image
            src={src}
            width={50}
            height={50}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
    </div>
  )
}

export default SmallCard;