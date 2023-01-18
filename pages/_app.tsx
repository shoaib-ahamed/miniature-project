import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import NavigationBar from "../components/NavigationBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <NavigationBar />
    </>
  );
}

export default MyApp;
