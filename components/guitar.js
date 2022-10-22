import Image from "next/future/image";
import Link from "next/link";
import styles from "../styles/guitars.module.css"


const Guitar = ({guitar}) => {

    const {description, image, name, price, url} = guitar

    return ( 

        <div className={styles.guitar}>
            {/* formats para no mostrar la img en alta resolución */}
            <Image src={image.data.attributes.formats.medium.url} alt={`photo-guitar ${name}`} width={600} height={400}/>
            <div className={styles.content}>
                <h3>{name}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>${price}</p>
                <Link href={`/guitars/${url}`}>
                    <a className={styles.link}> Ver Producto </a>
                </Link>
            </div>

        </div>
    );
}

export default Guitar;