import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Pizza Cart</title>
        <meta name="description" content="Pizza Cart" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/pizza-slice-solid.svg" />
      </Head>
      <div className="flex flex-col justify-between min-h-screen ">
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Layout;
