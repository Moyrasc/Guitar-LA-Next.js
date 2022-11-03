//es importante intentar mantener el orden de importación para facilitar la lectura
import { useEffect, useState } from "react";
import Layout from "../components/layout.js" 
import styles from "../styles/shoppingCar.module.css"
import Image from "next/future/image.js";

const ShoppingCar = ({shoppingCar, updateAmount}) => {
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        //el primer parametro es el acumulado, irá sumando las cantidades en cada iteración y el segundo el elemento del arreglo sobre el cual esta iterando
        const sumPrice = shoppingCar.reduce((total,product )=> total + (product.amount * product.price), 0)
        setTotal(sumPrice)
    },[shoppingCar])
    return (       
        <Layout
        title="Carrito compras">
            <main className="container">
                <h1 className="heading"> Carrito </h1>
                <div className={styles.content}>
                    <div className={styles.shopping}>
                        <h2>Artículos</h2>
                        {shoppingCar.length === 0 ? "Cesta vacía" : (shoppingCar.map(product => (

                            <div key={product.id} className={styles.product}>
                                <div>
                                    <Image width={250} height={280} src={product.image} alt={product.name}/>

                                </div>
                                <div>
                                    <p className={styles.name}> {product.name} </p>
                                    <div className={styles.amount}>
                                        <p>Cantidad: </p>
                                        <select className={styles.select} onChange={e => updateAmount({
                                            id:product.id,
                                            amount: e.target.value
                                        })}
                                        value={product.amount}>
                                            <option value="1"> 1 </option>
                                            <option value="2"> 2 </option>
                                            <option value="3"> 3 </option>
                                            <option value="4"> 4 </option>
                                        </select>
                                    </div>
                                    <p className={styles.precio}> $ <span>{product.price}</span></p>
                                    <p className={styles.subtotal}> Subtotal: $<span> {product.amount * product.price}</span></p>
                                </div>

                            </div>
                        )))}
                    </div>
                    <aside className={styles.summary}>
                        <h3> Resumen del Pedido </h3>
                        <p> Total a pagar: ${total} </p>
                    </aside>
                </div>
            </main>
        </Layout>
       
    );
}

export default ShoppingCar;