import Image from "next/future/image";
import Link from "next/link";
import styles from "../styles/header.module.css"
import { useRouter } from "next/router";


const Header = () => {

    const router = useRouter()
    return ( 
    <header className={styles.header}>
        <div className={`container ${styles.navigation}`}>
            <Link href={"/"}>
                <a>
                    <Image src="/img/logo.svg" alt="logo "width={300} height={40}/>
                </a>
            </Link>
            <nav className={styles.nav}>
                <Link href="/">  
                    <a className={router.pathname === "/" ? styles.active : ""}> Inicio </a> 
                </Link>
                <Link href="/about"> 
                    <a className={router.pathname === "/about" ? styles.active : ""}> Nosotros </a>
                </Link>
                <Link href="/store"> 
                    <a className={router.pathname === "/store" ? styles.active : ""}> Tienda </a> 
                </Link>
                <Link href="/blog">
                    <a className={router.pathname === "/blog" ? styles.active : ""}> Blog </a> 
                </Link>
                <Link href="/shoppingCar">
                    <a>
                        <Image width={30} height={25} src="/img/carrito.png" alt="shopping-car"/>
                    </a>
                </Link>
            </nav>
        </div>
    </header>
    )
}
export default Header;