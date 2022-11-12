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
export default function Module() {
  return (
    <>
      <Container>
        <SectionTitle
          pretitle="Module Pembelajaran"
          title="Banyak beragam pilihan module pembelajaraan untuk siswa"
        ></SectionTitle>
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {moduleData.map((item, index) => (
            <Link
              href={{
                pathname: "/module/[slug]",
                query: { slug: item.title, src: item.source },
              }}
              as={`/module/${item.title}`}
            >
              <div
                className="lg:col-span-2 xl:col-auto w-full cursor-pointer"
                key={index}
              >
                <div className="flex flex-col justify-between w-full h-ful py-10 px-14 bg-gray-100 rounded-2xl dark:bg-trueGray-800">
                  <Image
                    src={item.image}
                    width="40"
                    layout="responsive"
                    height="40"
                    alt="Avatar"
                  />
                  <p className="text-2xl leading-normal ">{item.title}</p>
                  <Avatar
                    image={item.avatar[0].image}
                    name={item.avatar[0].name}
                    title={item.avatar[0].role}
                  />
                </div>
              </div>
            </Link>
          ))}
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
