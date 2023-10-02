import React from 'react';
import styles from "../styles/EarnNow.module.css";

const EarnNow = () => {
  return (
    <section>
         <div className={styles.content}>
            <h2 className={styles.title}>
            Ready to Cash in Your Connections?<br/>
            Join Our Affiliate Program
            </h2>
            <p className={styles.txt}>Join now and get<span className={styles.cent}>7.5%</span>commission on all creator referrals for the entire year.</p>
            <button className={styles.earnbtn}>Earn Now</button>
        </div>
    </section>
  )
}

export default EarnNow;