import styles from "../styles/course.module.css"

const Course = ({course}) => {
    const {title, image, content} = course
    return ( 
        <section className={`${styles.course} course`}>
            {/* como no se puede pasar una img desde JS a CSS utilizamos la etiqueta style jsx para poder dar los estilos en línea */}
            <style jsx>
            {`.course {
                background-image: linear-gradient(to right, rgb(0,0,0,0.65), rgb(0,0,0,0.7)), url(${image.data.attributes.url});
            } `} 
            </style>
            <div className={`content ${styles.grid}`}>
                <div className={styles.content}>
                    <h2 className="heading">{title}</h2>
                    <p>{content}</p>
                </div>
            </div>
        </section>
    );
}

export default Course;