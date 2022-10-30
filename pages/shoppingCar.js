import Layout from "../components/layout.js" 
import styles from "../styles/shoppingCar.module.css"

const ShoppingCar = () => {
    return ( 
        <>
        <Layout
        title="Carrito compras">
            <main className="container">
                <h1 className="heading"> Carrito </h1>
                <div className={styles.content}>
                    <div className={styles.shopping}>
                        <h2>Artículos</h2>
                    </div>
                    <aside className={styles.summary}>
                        <h3> Resumen del Pedido </h3>
                        <p> Total a pagar:  </p>
                    </aside>
                </div>
            </main>
        </Layout>
        </>
    );
}

export default ShoppingCar;