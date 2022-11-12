import React, { Component } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Container from "../components/container";
import SectionTitle from "../components/sectionTitle";
import Testimonials from "../components/testimonials";
import App from "../layouts/App";
export default function Buku() {
  return (
    <>
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
Buku.getLayout = (page) => <App children={page} />;
