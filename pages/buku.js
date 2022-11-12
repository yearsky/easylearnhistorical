import React, { Component } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Container from "../components/container";
import SectionTitle from "../components/sectionTitle";
import Testimonials from "../components/testimonials";

export default function Buku() {
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

      <Container>
        <SectionTitle
          pretitle="Buku Panduan Belajar"
          title="Akses buku panduan belajar gratis! 🤩"
        ></SectionTitle>
        <Testimonials />
      </Container>
    </>
  );
}
