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

// const dbInstance = collection(database, "article");
export default function Module({ article }) {
  const { judul, isi, image, createdDate, author } = article;
  const router = useRouter();
  const data = router.query;
  const paragraphs = isi.split("\n\n");
  const dateString = createdDate;
  const dateObj = new Date(dateString);

  const formattedDate = dateObj.toLocaleDateString();
  //   console.log(isi);
  return (
    <>
      <Container>
        <div
          className="text-sm cursor-pointer font-bold tracking-wider text-indigo-600 uppercase"
          onClick={() => router.back()}
        >
          {"< "}Kembali
        </div>
        <SectionTitle pretitle="Article" title={judul}></SectionTitle>
        <div className="flex flex-col text-center">
          <p>
            {author} {" - "}
            {formattedDate}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center min-h-screen py-12">
          <div className="w-3/4 text-lg">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
export async function getServerSideProps({ query }) {
  const { slug } = query;

  try {
    const articleRef = collection(database, "article");
    const q = fireQuery(articleRef, where("judul", "==", slug));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const articleDoc = querySnapshot.docs[0];
      const article = articleDoc.data();

      // Convert the createdDate field to a Date object
      const createdDate = article.createdDate.toDate();

      // Convert the createdDate field to a serializable format
      const formattedArticle = {
        ...article,
        createdDate: createdDate.toISOString(),
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
Module.getLayout = (page) => <App children={page} />;
