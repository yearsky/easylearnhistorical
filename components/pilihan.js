import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/guru.jpg";
import Link from "next/link";

export default function Pilihan() {
  return (
    <Container className="">
      <div className="flex flex-col justify-center">
        <div className="flex flex-wrap items-center justify-center gap-5 mt-10 md:justify-around">
          <div className="pt-2 text-gray-400 dark:text-gray-400">
            <Link href="/buku">
              <a className="items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                <span>
                  <img
                    src="/img/book.svg"
                    alt="N"
                    width="32"
                    height="32"
                    className="w-32 mx-auto"
                  />
                </span>
                <span>Buku Pembelajaran</span>
              </a>
            </Link>
          </div>
          <div className="text-gray-400 dark:text-gray-400 pt-2">
            <Link href="/module">
              <a className="items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                <span>
                  <img
                    src="/img/emodule.svg"
                    alt="N"
                    width="32"
                    height="32"
                    className="w-32 mx-auto"
                  />
                </span>
                <span>E-Module</span>
              </a>
            </Link>
          </div>
          <div className="text-gray-400 dark:text-gray-400 pt-2">
            <Link href="/">
              <a className="items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                <span>
                  <img
                    src="/img/video.svg"
                    alt="N"
                    width="32"
                    height="32"
                    className="w-32 mx-auto"
                  />
                </span>
                <span>Video Pembelajaran</span>
              </a>
            </Link>
          </div>
          <div className="pt-2 text-gray-400 dark:text-gray-400">
            <Link href="/">
              <a className="items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                <span>
                  <img
                    src="/img/ppt.svg"
                    alt="N"
                    width="32"
                    height="32"
                    className="w-32 mx-auto"
                  />
                </span>
                <span>Media Pembelajaran</span>
              </a>
            </Link>
          </div>
          <div className="pt-2 text-gray-400 dark:text-gray-400">
            <Link href="/article">
              <a className="items-center space-x-2 text-2xl text-center font-medium text-indigo-500 dark:text-gray-100">
                <span>
                  <img
                    src="/img/article.svg"
                    alt="N"
                    width="32"
                    height="32"
                    className="w-32"
                  />
                </span>
                <span>Article</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
