import Layout from "../components/layout";
import Post from "../components/post";
import styles from "../styles/grid.module.css"

const Blog = ({posts}) => {

    return ( 
        <Layout
        title={'Blog'}
        description={'Blog de música, GuitarLA, venta de instrumentos'}>
            <main className="container">
                <h1 className="heading">Blog</h1>
                <div className={styles.grid}>

                    {posts?.map(post =>(
                        <Post
                        key={post.id}
                        post={post.attributes}
                        />   
                    ))}
                </div>
            </main>
        </Layout>
    );
}
export async function getStaticProps(){
    
    const response = await fetch(`${process.env.API_URL}/posts?populate=image`)
    const {data: posts} = await response.json()

    return { 
        props: {
            posts
        }
    }
}
export default Blog;