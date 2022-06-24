import Head from "next/head";
import React from "react";
import Header from "../Components/Header";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Facebook-Clone</title>
      </Head>

      <Header />

      <main></main>
    </React.Fragment>
  );
}
