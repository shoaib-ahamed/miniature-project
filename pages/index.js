import Head from "next/head";
import Layout from "../components/Layout";

const Home = ({products}) => {

    
  return (
    <div>
      <Head>
        <title>NEXT-JS WITH TAILWIND</title>
        <meta name="description" content="DEMO PROJECT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center min-h-screen">
        <Layout products={products}/>
      </div>
    </div>
  );
};


export async function getStaticProps() {
  let res = [];

   await fetch(`https://fakestoreapi.com/products`)
                      .then((response) => response.json())
                      .then((data) => {
                        res = data
                      })
                      .catch((err) => {
                        console.log(err.message);
                      })
  // server side rendering

  return {
    props: {
         products: res
      }, // will be passed to the page component as props
      revalidate: 100,
      // and revalidate every 100 seconds.
  }
}

export async function getStaticPaths() {
  const res = await fetch('https://fakestoreapi.com/products')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' }
}

export default Home;
