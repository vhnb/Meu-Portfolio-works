import styles from './styles.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.contentFooter}>
                <p>Feito com o 💙 por <a href='https://github.com/vhnb' target='blank'>vitinho</a></p>
                <div>
                    <a className={styles.linkToBlog} href='https://vhnb.vercel.app' target='blank'>Portfólio</a>
                    <a className={styles.linkToBlog} href='https://vhnb.vercel.app/blog' target='blank'>Blog</a>
                </div>
            </div>
        </footer>
    )
}