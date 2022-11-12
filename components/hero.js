import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/guru.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Easy Learn Historical
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Easy Learn Historical adalah platform pembelajran sejarah yang
              menyediakan materi pembelajaran sejarah yang lengkap dan mudah
              dipahami. Yang menyajikan koleksi buku informasi pembalajaran SMA,
              E-Module, Video pembelajran, Media Pembelajaran Interaktif serta
              Artikel Siswa dan Guru.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                Mulai Belajar
              </a>
            </div>
          </div>
        </div>
        <div className="md:flex items-center justify-center w-full lg:w-1/2 hidden">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Pilih Koleksi Pembelajaran yang menarik untuk anda pelajari
          </div>

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
              <Link href="/">
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
    </>
  );
}
