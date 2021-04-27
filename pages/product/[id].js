import Head from "next/head";
import { useState } from "react";

import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";
import { getData } from "../../utils/fetchData";

export default function ProductDetail(props) {
  const [product] = useState(props.product);
  const [tab, setTab] = useState(0);

  const isActive = (index) => {
    if (tab === index) return " active";
    return "";
  };

  return (
    <>
      <Head>
        <title>E-commerce | Details</title>
      </Head>
      <Navbar />
      <Layout>
        <div className="row detail-page">
          <div className="col-md-6">
            <img
              src={product.images[tab].url}
              alt={product.images[tab].url}
              className="d-block img-thumbnail rounded mt-4 w-100"
              style={{ height: "350px" }}
            />

            <div
              className="row mx-0"
              style={{ cursor: "pointer" }}
            >
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={img.url}
                  className={`img-thumbnail rounded ${isActive(index)}`}
                  style={{ height: "80px", width: "20%" }}
                  onClick={() => setTab(index)}
                />
              ))}
            </div>
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
