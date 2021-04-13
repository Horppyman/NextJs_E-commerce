import Head from 'next/head';

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>E-commerce | Home</title>
      </Head>
      <Navbar />
      Home
    </>
  );
}
