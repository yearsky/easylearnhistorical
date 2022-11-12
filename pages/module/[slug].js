import React, { Component } from "react";
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
  return (
    <>
      <Container>
        <SectionTitle
          pretitle="Module Pembelajaran"
          title={data.slug}
        ></SectionTitle>
        <div className="w-full flex justify-center">
          <iframe
            style={{
              width: "1000px",
              height: "500px",
              border: "1px solid black",
            }}
            src={`${data.src}?embedded=true`}
          ></iframe>
        </div>
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
