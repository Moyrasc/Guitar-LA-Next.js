import Image from "next/future/image";
import Link from "next/link";
import logo from "../public/img/logo.svg"

const Header = () => {
    return ( 
    <header>
        <div className="container">
            <Image src="/img/logo.svg" alt="logo "width={300} height={40}/>
            <nav>
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