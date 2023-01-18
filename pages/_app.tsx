import type { AppProps } from "next/app";
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <BottomBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
