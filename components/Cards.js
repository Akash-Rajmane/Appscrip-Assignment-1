import React from 'react';
import styles from "../styles/Cards.module.css";
import Image from 'next/image';
import SmallCard from './SmallCard';

const Cards = () => {
  return (
    <section className={styles.cards}>
        <h2 className={styles.txt}><span>Elevate</span> Your Craft</h2>
        <div className={styles.cardbox}>
            <div className={styles.card1}>
                <h3>Unlock Your ABC Earning Potential</h3>
                <p>Are you ready to take your earning potential to the next level? With ABC, you have multiple avenues to monetize your content seamlessly. From subscriptions and tips to merchandise sales and NFTS, ABC helps you diversify your revenue streams and maximize your income.</p>
                <Image
                   src="/mob.png"
                   width={280}
                   height={250}
                   alt="mobile"
                />
                <Image
                    src="/cash.png"
                    width={80}
                    height={80}
                    alt='cash'
                    style={
                        {
                            position: "relative",
                            top: "-200px",
                            left: "120px",
                        }
                    }
                />
            </div>
            <div className={styles.card2}>
                <h3>Boost Your Sales with Built-in E-commerce</h3>
                <p>Take control of your brand and boost your sales with ABC's built-in e-commerce functionality. Showcase and sell your exclusive products, whether it's merchandise, digital downloads, or personalized experiences. Integrate your store effortlessly and turn your creative ideas into profitable ventures.</p>
                <div className={styles.images}>
                    <div className={styles.box1}>
                        <Image
                        src="/bag.png"
                        width={100}
                        height={200}
                        alt="bags"
                        />
                    </div>
                    <div className={styles.box}>
                        <Image
                        src="/img2.jpg"
                        width={130}
                        height={180}
                        style={{
                            borderTopLeftRadius: "8px",
                            borderTopRightRadius: "8px",
                        }}
                        />
                        <p>Green modern bikini</p>
                        <div >
                            <span className={styles.data}>$100</span>
                            <span className={styles.star}>⭐ 4.3</span>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <Image
                            src="/img3.jpg"
                            width={130}
                            height={180}
                            style={{
                                borderTopLeftRadius: "8px",
                                borderTopRightRadius: "8px",
                            }}
                            />
                            <p>Bikini pairs </p>
                            <div >
                                <span className={styles.data}>$100</span>
                                <span className={styles.star}>⭐ 4.3</span>
                            </div>
                    </div>
                    <div className={styles.box}>
                        <Image
                            src="/img4.jpg"
                            width={130}
                            height={180}
                            style={{
                                borderTopLeftRadius: "8px",
                                borderTopRightRadius: "8px",
                            }}
                            />
                        <p>Blue bikini</p>
                        <div >
                            <span className={styles.data}>$100</span>
                            <span className={styles.star}>⭐ 4.3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.smcardbox}>
            <SmallCard
            src="/sm1.png"
            title="Save Time with 
            Automation and Efficiency"
            desc="Supercharge your content creation with ABC's automation tools. Streamline scheduling, multi-platform management, and more. Save time on repetitive tasks, focus on exceptional content."
            />
            <SmallCard
            src="/sm2.png"
            title="Join a Supportive
            Community"
            desc="Join ABC's vibrant creator community. Connect with like-minded individuals, collaborate, and share experiences. Access mental health services and resources for personal and professional growth."
            />
            <SmallCard
            src="/sm3.png"
            title="Unlock Exclusive Opportunities and Prizes"
            desc="Enjoy ABC contests and challenges for valuable prizes. Showcase your exceptional talent and win business grants, scholarships, and more. Thrive on our platform with recognition and rewards."
            />             
        </div>
    </section>
  )
}

export default Cards;