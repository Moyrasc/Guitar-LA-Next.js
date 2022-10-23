import Layout from "../components/layout"
import Guitar from "../components/guitar";
import styles from "../styles/grid.module.css"
import Post from "../components/post";

const Home = ({guitars, posts}) => {
  return ( 
    <>
    <Layout 
    title={'Inicio'}
    description={'Blog de música, tienda online y más...'}>
      <main className="container">
        <h1 className="heading"> Colección Guitarras </h1>

        <div className={styles.grid}>
                {guitars?.map(guitar =>(
                    <Guitar
                    key={guitar.id}
                    guitar={guitar.attributes}
                    />
                ))}
                </div>

      </main>
      <section className="container">
        <h2 className="heading"> Nuestro Blog </h2>
        <div className={styles.grid}>
            {posts?.map(post =>(
              <Post
              key={post.id}
              post={post.attributes}
              />   
            ))}
        </div>

      </section>
      
    </Layout>
    </> 
  );
}

//Como no voy a usar routing dinamico no es necesario usar getStaticPath
export async function getStaticProps(){

  const urlGuitars = `${process.env.API_URL}/guitars?populate=image`
  const urlPosts = `${process.env.API_URL}/posts?populate=image`

  const [resGuitars, resPosts] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlPosts)
  ])
  const [{data: guitars},{data: posts}] = await Promise.all([
    resGuitars.json(),
    resPosts.json()

  ])
  return {
    props: {
      guitars,
      posts

    }
  }
}

export default Home;

