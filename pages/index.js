import Link from "next/link"
import Layout from "../components/layout"

export default function Home() {
  return (
    <>
    <Layout 
    title={'Inicio'}
    description={'Blog de música, tienda online y más...'}>
      <h1>Hola mundo next</h1>
      <Link href="/about">Nosotros</Link>
    </Layout>
    </> 
  )
}
