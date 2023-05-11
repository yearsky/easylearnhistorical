import React, { Component, useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Container from "../../components/container";
import SectionTitle from "../../components/sectionTitle";
import App from "../../layouts/App";
import Image from "next/image";
import { useRouter } from "next/router";
// import { moduleData } from "../../components/moduleData";
import Link from "next/link";
import io from "socket.io-client";
import Loading from "../loading";
import {
  collection,
  query as fireQuery,
  doc,
  getDocs,
  where,
} from "firebase/firestore";
import { app, database } from "../../utils/firebaseConfig";
import apiResponse from "../../utils/apiResponse";
// const dbInstance = collection(database, "modules");
export default function Article() {
  const { isLoading, data } = apiResponse("/api/article", 3500);

  return (
    <>
      <Container>
        <SectionTitle
          pretitle="Article"
          title="Banyak beragam pilihan article pembelajaran untuk siswa"
        ></SectionTitle>
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {isLoading ? (
            <Loading length={data.length} />
          ) : data.length === 0 ? (
            <p>No data available</p>
          ) : (
            data.map((item, index) => (
              <Link href={`/article/${item.judul}`} key={index}>
                <div className="lg:col-span-2 xl:col-auto w-full bg-gray-200 rounded-2xl">
                  <div className="flex flex-col justify-between w-full h-ful py-10 px-14">
                    <Image
                      src={item.image[0].downloadURL}
                      width={20}
                      height={10}
                      unoptimized
                      style={{ objectFit: "contain" }}
                      className="rounded-md"
                      alt="Avatar"
                      layout="responsive"
                    />
                    <div className="text-center my-4 text-xl rounded">
                      {item.judul}
                    </div>
                    <Avatar
                      image={item.image[0].downloadURL}
                      name={item.author}
                    />
                  </div>
                </div>
              </Link>
            ))
          )}
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
          unoptimized
          alt="Avatar"
          layout="responsive"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">Penulis</div>
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch("api/article");
//   const data = await res.json();

//   return {
//     props: {
//       articles: data,
//     },
//   };
// }

Article.getLayout = (page) => <App children={page} />;
