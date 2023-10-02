import React from 'react';
import styles from "../styles/Learn.module.css";
import Image from 'next/image';

const Learn = () => {
  return (
    <section className={styles.learn}>
        <Image
        src="/g1.png"
        height={1000}
        width={450}
        style={{
            position: "absolute",
            top: "-200px",
            left: "-150px",
            mixBlendMode: "saturation"
        }}
        />
        <Image
        src="/g2.png"
        height={850}
        width={450}
        style={{
            position: "absolute",
            right:"-100px",
            top:"-200px",
            mixBlendMode: "saturation"
        }}
        />
        <div className={styles.content}>
            <h2 className={styles.title}>Join the ABC Community</h2>
            <p className={styles.txt}>Become part of a vibrant and supportive community of like-minded creators by joining ABC's exclusive platform.
Collaborate, learn, and connect with fellow creators who share your passion for adult content creation.</p>
            <button className={styles.learnbtn}>Learn More</button>
        </div>
    </section>
  )
}

export default Learn;