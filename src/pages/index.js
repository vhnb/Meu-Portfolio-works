import styles from "@/styles/Home.module.css";
import Image from 'next/image'
import myPhoto from '../../public/assets/me.png'
import Head from "next/head";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import jsonWorks from '../datas/works.json'

export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>Victor Henrique | Trabalhos</title>
      </Head>
      <div className={styles.contentContainer}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }} className={styles.containerContentInfo}>
          <div className={styles.contentTextInfo}>
            <h1>Bem-vindo aos trabalhos de <span>Victor Henrique</span></h1>
            <p>Nesta página, você terá a oportunidade de conhecer em detalhes os projetos desenvolvidos por mim para diversos clientes. Cada trabalho foi cuidadosamente elaborado para atender às necessidades específicas de cada cliente, com foco em qualidade, inovação e resultados excepcionais. Acompanhe o portfólio e explore as soluções <a href="https://vhnb.vercel.app" target="blank">aqui</a></p>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} className={styles.containerProject}>
        <div className={styles.containerContentProjects}>
          {jsonWorks.works.map((item, index) => (
            <motion.a key={item.id} href={`/trabalho/${item.id}`} className={styles.cardProject} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2, duration: 0.6 }}>
              <img src={item.imgMain} alt="Image Project" />
              <div className={styles.contentTextProject}>
                <h1>Projeto para: <span> {item.for} </span> <GoArrowRight className={styles.iconTitleProject} /></h1>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
