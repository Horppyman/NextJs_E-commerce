import Head from 'next/head';

import Navbar from "../components/Navbar";

export default function Cart() {
  return (
    <>
     <Head>
      <title>E-commerce | Cart</title>
    </Head>
    <Navbar />
    <div className="container">
    Cart
    </div>
    </>
  )
}