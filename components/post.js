import Image from "next/future/image";
import Link from "next/link";
import {FormatDate} from "../utils/helpers";
import styles from "../styles/blog.module.css"


const Post = ({post}) => {

    const { content, image, title, url, publishedAt} = post
    
    return ( 
    <article>
        <Image src={image.data.attributes.formats.medium.url} alt={`Image Blog ${title}`} width={600} height={400}/>
        <div className={styles.content}>
            <h3 >{title}</h3>
            <p className={styles.date}>{FormatDate(publishedAt)}</p>
            <p className={styles.summary}>{content}</p>
            <Link href={`/blog/${url}`}>
                <a className={styles.link}> Leer post </a>
            </Link>

        </div>
    </article>
    );
}

export default Post;
