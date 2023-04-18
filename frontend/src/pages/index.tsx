import WelcomeCard from "@/components/WelcomeCard";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meyd.it - Home</title>
      </Head>
      <main className="flex h-screen flex-col items-center justify-between p-24 pt-36">
        <WelcomeCard />
      </main>
    </>
  );
}
