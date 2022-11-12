import Head from "next/head";
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";
import App from "../layouts/App";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Pilihan from "../components/pilihan";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionTitle
        id="pilihan"
        pretitle="Banyak pilihan cara pembelajaran"
        title=" Cihuy! Belajar Sejarah makin asik dengan variasi pembelajaran"
      >
        Pilih Koleksi Pembelajaran yang menarik untuk anda pelajari
      </SectionTitle>
      <Pilihan />
      <SectionTitle
        id="benefit"
        pretitle="Keuntungan Belajar di Easy Learn Historical"
        title=" Kenapa harus belajar di sini?"
      >
        Easy Learn Historical adalah platform pembelajran sejarah yang
        menyediakan materi pembelajaran sejarah yang lengkap dan mudah dipahami.
      </SectionTitle>
      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      <SectionTitle
        pretitle="Video Pembelajaran"
        title="Belajar jadi nggak bosen lagi."
      >
        Dengan menggunakan video pembelajaran, belajar jadi makin asik!🥳
      </SectionTitle>
      <Video />
      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers. */}
      {/* </SectionTitle> */}
      {/* <Testimonials /> */}
    </>
  );
}
Home.getLayout = (page) => <App children={page} />;
