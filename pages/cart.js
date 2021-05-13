import Head from "next/head";
import { useContext } from "react";

import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import { DataContext } from "../store/GlobalState";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  if (cart.length === 0)
    return (
      <>
        <Head>
          <title>E-commerce | Cart</title>
        </Head>
        <Navbar />
        <Layout>
          <img
            className="img-responsive w-50 h-50"
            src="/empty-cart.svg"
            alt="empty"
          />
        </Layout>
      </>
    );

  return (
    <>
      <Head>
        <title>E-commerce | Cart</title>
      </Head>
      <Navbar />
      <div className="row mx-auto">
        <Layout>
          <div className="col-md-8 text-secondary table-responsive my-3">
            <h2 className="text-uppercase">Shopping Cart</h2>
            <tbody>
              {cart.map((item) => (
                <CartItem
                  key={item._id}
                  item={item}
                  dispatch={dispatch}
                  cart={cart}
                />
              ))}
            </tbody>
          </div>
          <div className="col-md-4"></div>
        </Layout>
      </div>
    </>
  );
}
