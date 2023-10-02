import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Hero from '@/components/Hero';
import Cards from "../components/Cards";


import { Roboto } from 'next/font/google'
import JoinUs from '@/components/JoinUs';
import EarnNow from '@/components/EarnNow';
import Learn from '@/components/Learn';

const roboto = Roboto({ subsets: ['latin'],  weight: "400", })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${roboto.className}`}>
        <Hero/>
        <Cards/>
        <div className={styles.filler}>
        </div>
        <JoinUs/>
        <Image
        src="/imgs-collection.png"
        width={1600}
        height={400}
        style={{
          width:"100%",
          height:"auto"
        }}
        />
        <EarnNow/>
        <Learn/>
      </main>
    </>
  )
}
