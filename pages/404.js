import Link from "next/link";
import Layout from "../components/layout";

const Page404 = () => {
    return ( 
        <Layout
        title="Página no encontrada">
            <p className="error">Página no encontrada -404</p>
            <Link href="/">
            <a className="error-link">
                Ir a inicio
            </a>
            </Link>
        </Layout>
        
     );
}

export default Page404;