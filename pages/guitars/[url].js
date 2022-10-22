import Layout from "../../components/layout";
import Image from "next/future/image";
import styles from "../../styles/guitars.module.css"

const Product = ({guitar}) => {

    const {name, description, image, price} = guitar[0].attributes

    return ( 
        <Layout
        title={ `Guitarra ${name}` }
        >
        <div className={styles.guitar}>
            <Image src={image.data.attributes.url} alt={`photo-guitar ${name}`} width={600} height={400}/>
            <div className={styles.content}>
                <h3>{name}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>${price}</p>
            </div>
        </div>
        </Layout>
    );
}
export async function getStaticPaths() {
    const response = await fetch(`${process.env.API_URL}/guitars`)
    const {data} = await response.json()
    const paths = data.map(guitar => ({
        params: {
            url: guitar.attributes.url
        }
    }))
    // agrego el fallback en false para que si intentamos buscar una guitarra que no existe aparezca una error. 404 (sin necesidad de crear yo esa validación)
    return {
        paths,
        fallback: false
    }

}
export async function getStaticProps({params: {url}}) {
    const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
    const {data: guitar} = await response.json()

    return {
        props: {
            guitar
        }
    }
}

export default Product;