import Head from "next/head";
import { useState } from "react";

import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";
import { getData } from "../../utils/fetchData";

export default function ProductDetail(props) {
  const [product, setProduct] = useState(props.product);

  return (
    <>
      <Head>
        <title>E-commerce | Details</title>
      </Head>
      <Navbar />
      <Layout>
        <div className="col-md-6">
          {/* hey */}
          <img
            src={product.images[0].url}
            alt={product.images[0].url}
            className="d-block img-thumbnail rounded mt-4 w-100"
          />
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const res = await getData(`product/${id}`);
  return {
    props: {
      props: { product: res.product },
    }, // will be passed to the page component as props
  };
}
