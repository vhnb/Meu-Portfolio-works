import styles from './styles.module.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import jsonWorks from '../../datas/works.json'
import { GoArrowLeft } from "react-icons/go";

export default function Projeto() {
    const router = useRouter()
    const { id } = router.query
    const [work, setWork] = useState(null)

    useEffect(() => {
        if (id) {
            const foundWork = jsonWorks.works.find(work => work.id === parseInt(id))
            setWork(foundWork)
        }
    }, [id])

    if (!work) {
        return (
            <div>
                Projeto não encontrado
            </div>
        )
    }

    return (
        <main className={styles.container}>
            <Head>
                <title>Victor Henrique | {work.for}</title>
            </Head>
            <div className={styles.contentProject}>
                <a href='/'><GoArrowLeft className={styles.iconBackToHome} /> Voltar</a>
                {work.imgs.map((imgs, index) => (
                    <img key={index} src={imgs} alt={work.for} />
                ))}
                <h2>{work.data}</h2>
                <p>{work.extendedDesc}</p>
                <ul>
                    {work.skillsUsed.map((skillsUsed, index) => (
                        <li key={index}>{skillsUsed}</li>
                    ))}
                </ul>
            </div>
        </main>
    )
}