import "@/styles/_reset.scss";
import "@/styles/_global.scss";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>YourTour</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
