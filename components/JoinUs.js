import React from 'react';
import styles from "../styles/JoinUs.module.css";

const JoinUs = () => {
  return (
    <section className={styles.join}>
        <div className={styles.circles}>
        <svg width="244" height="244" viewBox="0 0 244 244" fill="none" xmlns="http://www.w3.org/2000/svg" transform='translate(0, 200)'>
            <ellipse id="Ellipse 1952" opacity="0.25" cx="121.615" cy="121.614" rx="121.615" ry="121.614" transform="matrix(-1 0 0 1 243.691 0.238281)" fill="url(#paint0_linear_2_2165)"/>
            <defs>
            <linearGradient id="paint0_linear_2_2165" x1="0" y1="0" x2="248.17" y2="5.15093" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7526F2"/>
            <stop offset="1" stop-opacity="0"/>
            </linearGradient>
            </defs>
        </svg>
        <svg width="226" height="226" viewBox="0 0 226 226" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <ellipse id="Ellipse 1956" opacity="0.25" cx="112.54" cy="112.54" rx="112.54" ry="112.54" transform="matrix(-0.965926 0.258818 0.25882 0.965926 192.207 -24.8672)" fill="url(#paint0_linear_2_2167)"/>
            <defs>
            <linearGradient id="paint0_linear_2_2167" x1="0" y1="0" x2="229.653" y2="4.76659" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7526F2"/>
            <stop offset="1" stop-opacity="0"/>
            </linearGradient>
            </defs>
        </svg>
        <svg width="131" height="132" viewBox="0 0 131 132" fill="none" xmlns="http://www.w3.org/2000/svg" transform='translate(-120,400)'>
            <ellipse id="Ellipse 1955" opacity="0.25" cx="65.1975" cy="65.1973" rx="65.1975" ry="65.1973" transform="matrix(-0.965926 0.258818 0.25882 0.965926 111.457 -13.7227)" fill="url(#paint0_linear_2_2166)"/>
            <defs>
            <linearGradient id="paint0_linear_2_2166" x1="0" y1="0" x2="133.044" y2="2.76141" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7526F2"/>
            <stop offset="1" stop-opacity="0"/>
            </linearGradient>
            </defs>
        </svg>

        <svg width="244" height="244" viewBox="0 0 244 244" fill="none" xmlns="http://www.w3.org/2000/svg" transform='translate(400, 200) rotate(180)'>
            <ellipse id="Ellipse 1952" opacity="0.25" cx="121.615" cy="121.614" rx="121.615" ry="121.614" transform="matrix(-1 0 0 1 243.691 0.238281)" fill="url(#paint0_linear_2_2165)"/>
            <defs>
            <linearGradient id="paint0_linear_2_2165" x1="0" y1="0" x2="248.17" y2="5.15093" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7526F2"/>
            <stop offset="1" stop-opacity="0"/>
            </linearGradient>
            </defs>
        </svg>
        <svg width="226" height="226" viewBox="0 0 226 226" fill="none" xmlns="http://www.w3.org/2000/svg" transform='rotate(180) translate(40,0)'>
            <ellipse id="Ellipse 1956" opacity="0.25" cx="112.54" cy="112.54" rx="112.54" ry="112.54" transform="matrix(-0.965926 0.258818 0.25882 0.965926 192.207 -24.8672)" fill="url(#paint0_linear_2_2167)"/>
            <defs>
            <linearGradient id="paint0_linear_2_2167" x1="0" y1="0" x2="229.653" y2="4.76659" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7526F2"/>
            <stop offset="1" stop-opacity="0"/>
            </linearGradient>
            </defs>
        </svg>
        <svg width="131" height="132" viewBox="0 0 131 132" fill="none" xmlns="http://www.w3.org/2000/svg" transform='translate(-280,400) rotate(180)'>
            <ellipse id="Ellipse 1955" opacity="0.25" cx="65.1975" cy="65.1973" rx="65.1975" ry="65.1973" transform="matrix(-0.965926 0.258818 0.25882 0.965926 111.457 -13.7227)" fill="url(#paint0_linear_2_2166)"/>
            <defs>
            <linearGradient id="paint0_linear_2_2166" x1="0" y1="0" x2="133.044" y2="2.76141" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7526F2"/>
            <stop offset="1" stop-opacity="0"/>
            </linearGradient>
            </defs>
        </svg>
        </div>
        <div className={styles.content}>
            <p className={styles.txt}>Don't miss out on ABC’s Incredible features and Opportunities.</p>
            <h2 className={styles.title}>
            Join us today and unlock your <br/>full potential as a creator
            </h2>
            <button className={styles.joinbtn}>Join Now</button>
        </div>
    </section>
  )
}

export default JoinUs;