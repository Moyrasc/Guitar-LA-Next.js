import Head from "next/head";

const Layout = ({children,title ='', description =''}) => {
    return ( 
        <>
        <Head>
            {/* hacemos dinámicos los parametros de esta manera y ayudamos al SEO de la web */}
            <title>{`Guitar-LA  ${title}`}</title>
            <meta name="description" content={description}/>
        </Head>
        {children}
        </>
    );
}

export default Layout;