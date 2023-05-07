import React, { Component, useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Container from "../../components/container";
import SectionTitle from "../../components/sectionTitle";
import tika from "../../public/img/tika.jpeg";
import App from "../../layouts/App";
import Image from "next/image";
import { useRouter } from "next/router";
// import { moduleData } from "../../components/moduleData";
import Link from "next/link";
import io from "socket.io-client";
import Loading from "../loading";

// const dbInstance = collection(database, "modules");
export default function Module() {
  const [moduleData, setModuleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const socketInitializer = async () => {
    const collectionName = "article"; // Replace with the desired collection name
    const response = await fetch(
      `/api/socket?collectionName=${encodeURIComponent(collectionName)}`
    );
    if (!response.ok) {
      console.error("Failed to establish socket connection");
      return;
    }

    let socket = io();

    socket.on("connect", () => {
      socket.emit("subscribe", collectionName);
    });

    socket.on("moduleData", ({ collectionName, modules }) => {
      if (collectionName === collectionName) {
        setModuleData([...modules]);
        console.log(modules);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000); // Delay for 2 seconds before setting isLoading to false
      }
    });

    return () => {
      socket.emit("unsubscribe");
      socket.off("moduleData");
      socket.close();
    };
  };

  useEffect(() => {
    let socket = null; // Define socket variable

    socketInitializer().catch((error) => {
      console.error("Failed to establish socket connection:", error);
    });

    return () => {
      if (socket) {
        socket.emit("unsubscribe");
        socket.off("moduleData");
        socket.close();
      }
    };
  }, []);

  return (
    <>
      <Container>
        <SectionTitle
          pretitle="Article"
          title="Banyak beragam pilihan article pembelajaraan untuk siswa"
        ></SectionTitle>
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {isLoading ? (
            <Loading length={moduleData.length} />
          ) : moduleData.length === 0 ? (
            <p>No data available</p>
          ) : (
            moduleData.map((item, index) => (
              <Link
                href={{
                  pathname: "/article/[slug]",
                  query: {
                    slug: item.judul,
                  },
                }}
                as={`/article/${item.judul}`}
                key={index}
              >
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

Module.getLayout = (page) => <App children={page} />;
