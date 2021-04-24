import { useState } from "react";
import Head from "next/head";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { getData } from "../utils/fetchData";
import ProductItem from "../components/product/ProductItem";

export default function Home(props) {
  const [products, setProducts] = useState(props.products);
  // console.log(products);

  return (
    <>
      <Head>
        <title>E-commerce | Home</title>
      </Head>
      <Navbar />
      <Layout>
        <div className="product">
          {products.length === 0 && <h2>No product</h2>}
          {products.length &&
            products.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))}
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await getData("product");
  return {
    props: {
      products: res.products,
      result: res.result,
    }, // will be passed to the page component as props
  };
}
