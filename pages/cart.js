import Head from "next/head";
import { useContext } from "react";

import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import { DataContext } from "../store/GlobalState";

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
          <img className='img-responsive w-50 h-50' src="/empty-cart.svg" alt="empty" />
        </Layout>
      </>
    );

  return (
    <>
      <Head>
        <title>E-commerce | Cart</title>
      </Head>
      <Navbar />
      <Layout>
        <h1>Cart</h1>
      </Layout>
    </>
  );
}
