import { useState } from "react";
import Layout from "../../components/layout";
import Image from "next/future/image";
import styles from "../../styles/guitars.module.css"

const Product = ({guitar, addShoppingCar}) => {
    const [amount, setAmount] = useState(0)
    const {name, description, image, price} = guitar[0].attributes
    
    const handleSubmit = e => {
        e.preventDefault()
        
        if ( amount < 1 ){
            alert('Seleccione una cantidad')
            return
        }
        const guitarSelect = {
            id: guitar[0].id,
            image: image.data.attributes.url,
            name,
            price,
            amount
        }
        // agregando la info a Context 
        addShoppingCar(guitarSelect)
    }
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

                <form className={styles.form} onSubmit={handleSubmit}>
                    <label htmlFor="amount"> Cantidad </label>
                    <select onChange={e => setAmount(Number(e.target.value))}name="amount" id="amount">
                        <option value="0"> -- Seleccione --</option>
                        <option value="1"> 1 </option>
                        <option value="2"> 2 </option>
                        <option value="3"> 3 </option>
                        <option value="4"> 4 </option>
                    </select>
                    <input
                    type="submit"
                    value="añadir al carrito"
                    
                    />
                </form>
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