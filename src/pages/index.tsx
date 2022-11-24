import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { trpc } from "../utils/trpc";
import Navbar from "../components/Navbar";



const Home: NextPage = () => {
/*   const hello = trpc.example.hello.useQuery({ text: "from ari tRPC" });
 */
  return (
    <>
      <Head>
        <title>Shared Memories</title>
        <meta name="keywords" content="Share memories"></meta>
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center bg-sky-400 p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          Shared Memories
        </h1>

        <div className="flex w-full items-center justify-center pt-6 text-2xl text-yellow-500">
{/*           {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
 */}        </div>
        <AuthShowcase />

        <Link href="./authentication/Register">
          <div className="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
            Register
          </div>
        </Link>
        <Navbar />
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
/*   const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery();
 */
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1>Home Page</h1>
     {sessionData? <div>
     <p className="text-2xl text-blue-500">
          Logged in as {sessionData?.user?.name}
        </p>
        <button
        className="border-black-500 rounded border bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-red"
        onClick={()=>(signOut())}>Log out</button>
        </div>:
          
        <button
        className="border-black-500 rounded border bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
        onClick={ () => signIn()}
      >
       Sign in
      </button>
        }
      
    </div>
  );
};



{/* <div className="flex flex-col items-center justify-center gap-2">
      {sessionData && (
        <p className="text-2xl text-blue-500">
          Logged in as {sessionData?.user?.name}
        </p>
      )}
      {/* {secretMessage && (
        <p className="text-2xl text-blue-500">{secretMessage}</p>
      )} */}
  /*     <button
        className="border-black-500 rounded border bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Login"}
      </button>
    </div> }*/