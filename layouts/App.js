import Head from "next/head";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function App({ children }) {
  return (
    <>
      <Head>
        <title>Easy Learn Historical</title>
        <meta
          name="description"
          content="Easy Learn Historical is a platform that provides you with the best learning experience"
        />
        <link rel="icon" href="/img/logo.svg" />
      </Head>

      <Navbar />
      {children}
      <Footer />
    </>
  );
}
