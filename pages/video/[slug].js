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
import { app, database } from "../../utils/firebaseConfig";
import {
  collection,
  query as fireQuery,
  doc,
  getDocs,
  where,
} from "firebase/firestore";
import Video from "../../components/video";

// const dbInstance = collection(database, "article");
export default function VideoDetail({ article }) {
  const { judul, cover, source } = article;
  const router = useRouter();
  const data = router.query;

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
          pretitle="Video Pembelajaraan"
          title={judul}
        ></SectionTitle>
          <Video source={source} />
       
      </Container>
    </>
  );
}
export async function getServerSideProps({ query }) {
  const { slug } = query;

  try {
    const articleRef = collection(database, "Video");
    const q = fireQuery(articleRef, where("judul", "==", slug));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const articleDoc = querySnapshot.docs[0];
      const article = articleDoc.data();

      // Convert the createdDate field to a Date object
      //   const createdDate = article.createdDate.toDate();

      // Convert the createdDate field to a serializable format
      const formattedArticle = {
        ...article,
      };

      return {
        props: {
          article: formattedArticle,
        },
      };
    } else {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}
VideoDetail.getLayout = (page) => <App children={page} />;
