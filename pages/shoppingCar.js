import Layout from "../components/layout"
const ShoppingCar = () => {
    return ( 
        <>
        <Layout
        title="carrito compras">
            <main className="container">
                <h1 className="heading"> Carrito </h1>
                <div>
                    <div>
                        <h2>Artículos</h2>
                    </div>
                    <aside>
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