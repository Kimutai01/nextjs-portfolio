import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kimutai | Full stack developer</title>
        <meta
          name="description"
          content="Portfolio website for Kimutai showcasing his skills in web development, software engineering, and project management."
        />
        <meta
          name="keywords"
          content="Kimutai, portfolio, web development, software engineering, project management"
        />
        <meta name="author" content="Kimutai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logodark.png" />
      </Head>
    </>
  );
}
