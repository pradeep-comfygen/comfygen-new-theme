import "../styles/globals.css";
import "../styles/style.scss";
import React, { useEffect, useState } from "react";
import type { AppProps, } from "next/app";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import Testimonial from "./components/Testimonial";
import { useRouter } from "next/router";

const blogPostSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.comfygen.com/',
  name: 'Mobile App and Web Development Company',
  image: 'https://www.comfygen.com/svg/comfygen-logo.svg',
  url: 'https://www.comfygen.com/',
  telephone: '+91 9587867258',
  review: {
    '@type': 'Review',
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.9',
    bestRating: '5',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'F-152, Dayanand Marg, Nemi Nagar',
    addressLocality: 'Vaishali Nagar',
    addressRegion: 'Jaipur',
    postalCode: '302021 ,',
    addressCountry: 'IN',
  },
  offers: {
    '@type': 'Offer',
    price: '20-25',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  author: {
    '@type': 'Person',
    name: 'Comfygen',
  },
};

const DreamProject = dynamic(() => import("./components/DreamProject"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const Talkchat = dynamic(() => import("./components/Talkchat"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const GoogleTagManagerScript = dynamic(() => import("./components/GoogleTagManagerScript"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const GoogleTagManagerNoScript = dynamic(() => import("./components/GoogleTagManagerNoScript"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const GetinTouch = dynamic(() => import("./components/Getintouch"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const ContactLinks = dynamic(() => import("./components/ContactLinks"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const GoogleAnalytics = dynamic(() => import("./GoogleAnalytics"), {
  loading: () => <p>Loading...</p>,
});

export const config = {
  unstable_runtimeJS: false,
};

function top() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function MyApp({ Component, pageProps }: AppProps, props: any) {
  // const [showComponents, setShowComponents] = React.useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowComponents(true);
  //   }, 2000);
  // }, []);

  const router = useRouter()
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="overflow-hidden">
      <NextSeo
        title="Comfygen"
        openGraph={{
          url: 'https://www.comfygen.com/',
          type: 'Website',
          images: [{ url: 'https://www.comfygen.com/svg/comfygen-logo.svg' }],
        }}
        additionalMetaTags={[
          { property: 'schema:type', content: 'LocalBusiness' },
          { property: 'schema:mainEntityOfPage', content: 'https://www.comfygen.com/' },
          { property: 'schema:telephone', content: '+91 9587867258' },
          // ... add more schema properties here
          { property: 'schema:LocalBusiness', content: JSON.stringify(blogPostSchema) },
        ]}
      />

      {/* <Head>
      <script  
        async
        src={`https://www.googletagmanager.com/gtag/js?id=UA-228613134-1`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-228613134-1', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head> */}
      <Component {...pageProps} />
      {/* {!router?.asPath?.includes("/quote") ? <DreamProject /> : null} */}
      {/* {(!router?.asPath?.includes("/de/") && !router?.asPath?.includes("/ca/")) ? <GetinTouch /> : null} */}
      {/* {!router?.asPath?.includes("/de/") ? <DreamProject /> : null} */}
      {/* {showComponents && ( */}
      {/* {!router?.asPath?.includes("/de/") ? <Testimonial /> : null} */}
      {/* {!router?.asPath?.includes("/de/") ? <Footer /> : null} */}
      {loaded &&
        <>
          <GoogleAnalytics />
          {!router?.asPath?.includes("/career") ? <Talkchat /> : null}
          {/* <Talkchat /> */}
          <GoogleTagManagerScript />
          <GoogleTagManagerNoScript />
          {/* <ContactLinks /> */}
        </>
      }
      {/* )} */}
    </main>
  );
}
