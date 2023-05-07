import React, { Component, useState } from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Container from "../../components/container";
import SectionTitle from "../../components/sectionTitle";
import tika from "../../public/img/tika.jpeg";
import App from "../../layouts/App";
import Image from "next/image";
import { moduleData } from "../../components/moduleData";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Module() {
  const router = useRouter();
  const data = router.query;
  console.log(data);
  const [pages, setPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    console.log("object:", numPages, pages);
    setPages(numPages);
    setPageNumber(1);
  }
  return (
    <>
      <Container>
        <div
          className="text-sm cursor-pointer font-bold tracking-wider text-indigo-600 uppercase"
          onClick={() => router.back()}
        >
          {"< "}Kembali
        </div>
        <SectionTitle
          pretitle="Module Pembelajaran"
          title={data.slug}
        ></SectionTitle>
        <div className="w-full flex justify-center"></div>
      </Container>
    </>
  );
}
function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}
Module.getLayout = (page) => <App children={page} />;
