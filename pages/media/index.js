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
export default function MediaPembelajaran() {
  const [moduleData, setModuleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/media");
      const data = await res.json();
      setModuleData(data);
      setIsLoading(false);
    }

    fetchData();
  }, []);
  return (
    <>
      <Container>
        <SectionTitle
          pretitle="Media Pembelajaran "
          title="Banyak beragam pilihan media pembelajaraan untuk siswa"
        ></SectionTitle>
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {isLoading ? (
            <Loading length={moduleData.length} />
          ) : moduleData.length === 0 ? (
            <p>No data available</p>
          ) : (
            moduleData.map((item, index) => (
              <a
                href="#"
                onClick={() => window.open(item.file[0].downloadURL, "_blank")}
                key={index}
              >
                <div key={index}>
                  <div className="lg:col-span-2 xl:col-auto w-full cursor-pointer">
                    <div className="flex flex-col justify-between w-full h-ful py-10 px-14 bg-gray-100 rounded-2xl dark:bg-trueGray-800">
                      <Image
                        src={item.cover[0].downloadURL}
                        width="40"
                        layout="responsive"
                        height="40"
                        unoptimized
                        alt="Avatar"
                      />
                      <p className="text-2xl leading-normal">{item.title}</p>
                      <Avatar
                        image={item.authorImage[0].downloadURL}
                        name={item.author}
                      />
                    </div>
                  </div>
                </div>
              </a>
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
        <div className="text-gray-600 dark:text-gray-400">Pendidik</div>
      </div>
    </div>
  );
}

MediaPembelajaran.getLayout = (page) => <App children={page} />;
