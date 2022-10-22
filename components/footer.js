import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <div className={`container ${styles.content} `}>
                <nav className={styles.nav}>
                    <Link href="/"> Inicio </Link>
                    <Link href="/about"> Nosotros </Link>
                    <Link href="/blog"> Blog </Link>
                    <Link href="/store"> Tienda </Link>
                </nav>
                <p className="copyright">&copy; Todos los derechos reservados {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}
export default Footer;