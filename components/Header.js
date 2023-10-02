import React from 'react';
import styles from "../styles/Header.module.css";
import { Roboto } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';

const roboto = Roboto({ subsets: ['latin'],  weight: "400", })

const Header = () => {
  const router = useRouter();

  return (
    <header className={`${styles.header}  ${roboto.className}`}>
      <h1 className={styles.htitle}>lOGO</h1>
      <nav>
        <ul className={styles.links}>
          <Link href="/" className={router.pathname == "/" ? styles.active : styles.nonactive} ><li>Home</li></Link>
          <Link href="/aboutus" className={router.pathname == "/aboutus" ? styles.active : styles.nonactive}><li>About Us</li></Link>
          <Link href="/ourblog" className={router.pathname == "/ourblog" ? styles.active : styles.nonactive}><li>Our Blog</li></Link>
          <Link href="/support" className={router.pathname == "/support" ? styles.active : styles.nonactive}><li>Support</li></Link>
          <Link href="/affiliate"className={router.pathname == "/affiliate" ? styles.active : styles.nonactive}><li>Affiliate</li></Link>
          <Link href="/programs" className={router.pathname == "/programs" ? styles.active : styles.nonactive}><li>Programs</li></Link>
        </ul>
      </nav>
      <div className={styles.btnbox}>
        <span>Login</span>
        <button>Sign up</button>
      </div>
    </header>
  )
}

export default Header;