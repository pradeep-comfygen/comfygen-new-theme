import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const isProduction = process.env.NODE_ENV === "production";
export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* <script strategy="afterInteractive"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=UA-228613134-1`}
        />
        <script  id="gtag-init" strategy="afterInteractive"
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
        /> */}
        <meta name="msvalidate.01" content="88C9F762357EB27E860762AE43E1BDF7" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}