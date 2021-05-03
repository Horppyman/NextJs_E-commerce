import Head from "next/head";
import { useContext, useState } from "react";

import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";
import { getData } from "../../utils/fetchData";
import { DataContext } from "../../store/GlobalState";
import { addToCart } from "../../store/Actions";

export default function ProductDetail(props) {
  const [product] = useState(props.product);
  const [tab, setTab] = useState(0);

  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

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

            <div className="row mx-0" style={{ cursor: "pointer" }}>
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
          <div className="col-md-6 mt-3">
            <h2 className="text-uppercase">{product.title}</h2>
            <h5 className="text-danger">${product.price}</h5>
            <div className="row mx-0 d-flex justify-content-between">
              {product.inStock > 0 ? (
                <h6 className="text-danger">In Stock: {product.inStock}</h6>
              ) : (
                <h6 className="text-danger">Out of Stock</h6>
              )}

              <h6 className="text-danger">Sold: {product.sold}</h6>
            </div>
            <div className="my-2">{product.description}</div>
            <div className="my-2">{product.content}</div>
            <button
              type="button"
              className="btn btn-dark d-block my-3 px-5"
              onClick={() => dispatch(addToCart(product, cart))}
            >
              Buy
            </button>
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
