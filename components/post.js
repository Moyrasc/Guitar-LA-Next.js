import Image from "next/future/image";
import Link from "next/link";

const Post = ({post}) => {

    const { content, image, title, url, publishedAt} = post
    
    return ( 
    <article>
        <Image src={image.data.attributes.formats.medium.url} alt={`Image Blog ${title}`} width={600} height={400}/>
        <div>
            <h3>{title}</h3>
            <p>{publishedAt}</p>
            <p>{content}</p>
            <Link href={`/blog/${url}`}>
                <a> Leer post </a>
            </Link>

        </div>
    </article>
    );
}

export default Post;
