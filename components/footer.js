import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <div className={`container ${styles.content} `}>
                <nav className={styles.nav}>
                    <Link href="/"> Inicio </Link>
                    <Link href="/about"> Nosotros </Link>
                    <Link href="/store"> Tienda </Link>
                    <Link href="/blog"> Blog </Link>
                    
                </nav>
                <p className={styles.copy}>&copy; Todos los derechos reservados {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}
export default Footer;