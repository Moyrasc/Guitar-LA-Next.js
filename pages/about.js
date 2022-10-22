import Image from "next/future/image";
import Layout from "../components/layout";
import styles from "../styles/about.module.css"

const About = () => {
    return ( 
        <Layout
        title={'Nosotros'}
        description={'Sobre nosotros, guitarLA,tienda de música'}>
            <main className="container">
                <h2 className="heading">Nosotros</h2>
                <div className={styles.content}>
                        <Image src="/img/nosotros.jpg" alt="image about us" width={1000} height={800}/>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod elit vel molestie euismod. Aenean augue libero, pellentesque et volutpat in, luctus sit amet eros. Phasellus molestie ultricies consequat. Cras elementum quis sapien nec auctor. Aliquam viverra consequat quam eget mollis. Vestibulum et ex quam. Fusce tincidunt velit in est tristique laoreet. Etiam et arcu ac elit ultrices ultrices ut id metus.</p>
                    
                            <p>Quisque quis libero fermentum, egestas nulla vitae, sagittis odio. Proin at dui nibh. In quis nisi nec nunc malesuada aliquam. Aenean malesuada dui eget quam varius tempor. Donec vel mi nisl. Sed condimentum, turpis vel dapibus rhoncus, tellus turpis luctus nisi, nec elementum sem dui a leo.</p>
                        </div>
                </div>
            </main>
        </Layout>
    );
}

export default About;