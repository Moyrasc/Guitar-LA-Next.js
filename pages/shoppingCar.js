import Layout from "../components/layout.js" 
import styles from "../styles/shoppingCar.module.css"
import Image from "next/future/image.js";

const ShoppingCar = ({shoppingCar}) => {
    return ( 
        <>
        <Layout
        title="Carrito compras">
            <main className="container">
                <h1 className="heading"> Carrito </h1>
                <div className={styles.content}>
                    <div className={styles.shopping}>
                        <h2>Artículos</h2>
                        {shoppingCar.length === 0 ? "Cesta vacía" : shoppingCar.map(product => {

                            <div key={product.id} className={styles.product}>
                                <div>
                                    <Image width={250} height={480} src={product.image} alt={product.name}/>

                                </div>
                                <div>
                                    <p className={styles.name}> {product.name} </p>
                                    <p className={styles.precio}> $ <span>{product.price}</span></p>
                                    <p className={styles.subtotal}> Subtotal: $<span> {product.amount * product.price}</span></p>
                                </div>

                            </div>
                        })}
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