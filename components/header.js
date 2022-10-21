import Image from "next/future/image";
import Link from "next/link";
import styles from "../styles/header.module.css"


const Header = () => {
    return ( 
    <header className={styles.header}>
        <div className={`container ${styles.navigation}`}>
            <Image src="/img/logo.svg" alt="logo "width={300} height={40}/>
            <nav className={styles.nav}>
                <Link href="/"> Inicio </Link>
                <Link href="/about"> Nosotros </Link>
                <Link href="/blog"> Blog </Link>
                <Link href="/store"> Store </Link>

            </nav>
        </div>
    </header>
    )
}
export default Header;