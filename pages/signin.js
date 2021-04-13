import Head from "next/head";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

export default function SignIn() {
  return (
    <>
      <Head>
        <title>E-commerce | Sign In</title>
      </Head>
      <Navbar />
      <Layout>
        <form className="mx-auto my-4" style={{ maxWidth: "500px" }}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
          <p className="my-2">
            Don't have an account yet?{" "}
            <Link href="/register">
              <a style={{ color: "#2c92f2" }}>Register</a>
            </Link>
          </p>
        </form>
      </Layout>
    </>
  );
}
