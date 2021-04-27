import Head from "next/head";
import { useState } from "react";

import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";
import { getData } from "../../utils/fetchData";

export default function ProductDetail(props) {
  const [product] = useState(props.product);

  return (
    <>
      <Head>
        <title>E-commerce | Details</title>
      </Head>
      <Navbar />
      <Layout>
        <div className="col-md-6">
          <img
            src={product.images[0].url}
            alt={product.images[0].url}
            className="d-block img-thumbnail rounded mt-4 w-100"
            style={{ height: "350px" }}
          />

          <div>
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img.url}
                alt={img.url}
                className="img-thumbnail rounded"
                style={{ height: "80px", width: "20%" }}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const res = await getData(`product/${id}`);
  return {
    props: {
      product: res.product,
    }, // will be passed to the page component as props
  };
}
