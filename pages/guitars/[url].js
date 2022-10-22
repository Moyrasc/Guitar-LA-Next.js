const Product = ({guitar}) => {
    return ( 
        <div> [url] </div>
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