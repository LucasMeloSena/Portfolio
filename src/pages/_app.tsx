import { AppProps } from "next/app";
import { GlobalStyle } from "src/styles/GlobalStyle";
import { Helmet } from "react-helmet";
import { Favicon } from "src/assets/img/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Helmet>
        <title>Dev. Lucas Sena</title>
        <link rel="icon" type="image/x-icon" href={Favicon.src}></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
    </>
  );
}

export default MyApp;
