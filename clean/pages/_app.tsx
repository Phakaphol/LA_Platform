import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from "react";
import "../styles/home_1.css";
import "../styles/login.css";

function MyApp({ Component, pageProps }: AppProps) {
+

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  


  return <Component {...pageProps} />
}

export default MyApp
