import Head from "next/head";

const styles = {
  container: `h-full w-full flex bg-[#fff]`,
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Momentix - Tickets That Become Memories</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* Navbar */}
      <h2>Navbar here</h2>
      {/* Main */}
      <h2>Main Here</h2>
    </div>
  );
}
