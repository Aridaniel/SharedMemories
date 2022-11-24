import { FC } from "react";
import Navbar from "../../components/Navbar";
import Head from "next/head"

interface MemoriesProps {}

const Memories: FC<MemoriesProps> = ({}) => {
  return (
    <>
     <Head>
        <title>Shared Memories</title>
        <meta name="keywords" content="Share memories"></meta>
      </Head>
      <div>Settings</div>
    </>
  );
};

export default Memories;
