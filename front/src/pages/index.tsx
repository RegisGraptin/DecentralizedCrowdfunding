import type { NextPage } from "next";
import Head from "next/head";

import Campaigns from "../components/Campaigns";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>RainbowKit App</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Header />

      <main>
        <Campaigns />
      </main>
    </div>
  );
};

export default Home;
