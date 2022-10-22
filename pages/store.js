import Layout from "../components/layout";
import ListGuitars from "../components/list-guitars";

// A través de esta función consultamos los datos de la API Primero se ejecutará la parte del servidor y después el cliente.
export async function getStaticProps(){
    const response = await fetch(`${process.env.API_URL}/guitars?populate=image`)
    const {data: guitars} = response.json

    return {
        props: {
            guitars
        }
    }
}
// export async function getServerSideProps() {
//     const response = await fetch(`${process.env.API_URL}/guitars?populate=image`)
//     const {data: guitars} = response.json()
    
//     return {
//         props: {
//             guitars
//         }
//     }
// }

const Store = ({guitars}) => {
    console.log(guitars)
    return ( 
        <Layout
        title={'Tienda'}
        description={'Tienda virtual, GuitarLA,venta de instrumentos'}>
            <main className="container">
                <h2 className="heading"> Colección de Guitarras </h2>
                <ListGuitars
                
                />
            </main>
        
        </Layout>
    );
}

export default Store;