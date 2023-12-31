import Document, { Html, Head, Main, NextScript } from "next/document";

const pageTitle = "Warp";
const description = "Warp - Voice chat with Anyone, Anywhere, Anytime";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content={
              "connecting the gap between the virtual and the real world"
            }
          />
          <meta property="og:title" content={pageTitle} key="ogtitle" />
          <meta property="og:description" content={description} key="ogdesc" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary" key="twcard" />
          <meta name="twitter:creator" content={"sagredd"} key="twhandle" />

          {/* Open Graph */}
          <meta
            property="og:url"
            content={"https://warp.sag17.tech/"}
            key="ogurl"
          />
          <meta
            property="og:image"
            content={
              "https://gtrvjdtwdfnbjeytdjvv.supabase.co/storage/v1/object/public/warp/public/new.png"
            }
            key="ogimage"
          />
          <meta
            property="og:site_name"
            content={"Warp Portal"}
            key="ogsitename"
          />
          <meta property="og:title" content={pageTitle} key="ogtitle" />
          <meta property="og:description" content={description} key="ogdesc" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
