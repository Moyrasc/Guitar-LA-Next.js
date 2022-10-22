import Layout from "../components/layout";
import Guitar from "../components/guitar";
import styles from "../styles/grid.module.css"

const Store = ({guitars}) => {
    console.log(guitars)
    return ( 
        <Layout
        title={'Tienda'}
        description={'Tienda virtual, GuitarLA,venta de instrumentos'}>
            <main className="container">
                <h2 className="heading"> Colección de Guitarras </h2>
                <div className={styles.grid}>
                {guitars?.map(guitar =>(
                    <Guitar
                    key={guitar.id}
                    guitar={guitar.attributes}
                    />
                ))}
                </div>
            </main>
        
        </Layout>
    );
}
// Esta función se ejucuta primero (la parte del servidor y por eso podemos pasarla como props) A través de esta función consultamos los datos de la API,  es dinámica (al contrario que getStaticProps())

export async function getServerSideProps(){
    const response = await fetch(`${process.env.API_URL}/guitars?populate=image`)
    const { data: guitars } = await response.json()
    return {
        props: {
            guitars
        }
    }
}

export default Store;
