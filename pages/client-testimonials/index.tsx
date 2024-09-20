import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";
import Testimonial from "../components/Testimonials";
import dynamic from "next/dynamic";
export default function Altcoin(props) {
  let { initialData } = props;
  const BlogSection = dynamic(() => import("../components/BlogSection"), {
    loading: () => <p>Loading...</p>,
  });
  const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
    loading: () => <p>Loading...</p>,
  });
  const Header = dynamic(() => import("../components/Header"), {
    loading: () => <p>Loading...</p>,
  });
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Client Testimonisal - Comfygen.com</title>
        <meta
          name="description"
          content="We aim to provide the best development services and our company is added with top designers who are experts in their field."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/client-testimonials"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Client Testimonisal - Comfygen.com"
        />
        <meta
          property="og:description"
          content=" We aim to provide the best development services and our company is added with top designers who are experts in their field."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/client-testimonials"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-12-26T08:12:32+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/client-testimonials"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
      </Head>
      <div className="overflow-hidden">
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Client Testimonial"
                ptag="A number of the great methods you can sincerely observe a company isnt always through what they say about themselves, but as an alternative what their clients say approximately them. And it is no one in all a kind for FPA. The long time relationships we expand with our customers advocate the whole lot to us"
                btnName="Discuss Now"
                btnLink="/contact-us"
                imgSrc="/images/client-testimonial.webp"
                Width={550}
                Height={660}
                altTag="Client Testimonial"
              />
            </div>
          </div>
        </div>
        <Testimonial />
        <BlogSection initialData={initialData} />
      </div>
    </>
  );
}
export async function getServerSideProps({ req, res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}
