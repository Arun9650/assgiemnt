import Image from "next/image";
import HeaderLink from "../../components/HeaderLink";
import Head from "next/head";
import { getProviders, signIn, useSession } from "next-auth/react";

import userImage from "../../public/user-setting.svg";
import Logo from "../../public/logo.svg";
import peopleIcon from "../../public/peopleIcon.svg";
import articleIcon from "../../public/articleIcon.svg";
import learning from "../../public/learning.svg";
import jobsIcon from "../../public/jobsIcon.svg";
import Link from "next/link";
import Component from "../../components/auth";

import HeroSecondary from '../../components/HeroScondry'

function Home({ data }) {
  const { data: session,status  } = useSession();
  return (
    <div className="space-y-10  ">
      <Head>
        <title>LinkedIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className=" flex justify-between px-10 sm:grid  grid-cols-2 items-center py-4 xs:px-4">
        <div className="relative left-0  w-36 h-10">
          <Image
            src={Logo}
           
            alt=""
            className="left-0"
          />
        </div>
        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4 items-center">
            <HeaderLink Icon={articleIcon} text="Articles" />
            <HeaderLink Icon={peopleIcon} text="People" />
            <HeaderLink Icon={learning} text="Learning" />
            <HeaderLink Icon={jobsIcon} text="Jobs" />
          </div>
          <Component />
        </div>
      </header>

      <main className="flex flex-col lg:flex-row items-center justify-center md:justify-start max-w-screen-xl  mx-4 ">
        <div className="space-y-6 xl:space-y-10">
          <h1 className="text-2xl xs:text-4xl font-light md:text-[56px] text-amber-800 max-w-xl text-center sm:text-start !leading-snug  xl:pl-0">
            Welcome to your professional community
          </h1>
          <div className="space-y-4 max-w-[400px] mx-auto sm:m-0">
            <div className="grid gap-2">
              <label htmlFor="password">Email or phone </label>
              <input
                type="email"
                className=" p-4  border-3 border rounded border-black"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="password">Password</label>
              <div className=" flex w-full">
                <input
                  type="password"
                  className="w-full p-4  border-3 border rounded border-black"
                />
                {/* <button className="relative inset-y-0 w-fit border right-12 flex text-[#0a66c2] font-semibold items-center">
                  Show
                </button> */}
              </div>
              <h4 className="my-3 text-[#0a66c2] font-semibold">
                Forget Password?
              </h4>
            </div>
            <button className="w-full border p-3 mb-4 rounded-full bg-[#0a66c2] hover:bg-[#004182] text-white font-semibold">
              Sign in
            </button>

            <div  className="w-full my-3">
              <button
                className="w-full border p-3 rounded-full  text-black font-semibold"
                onClick={() => {
                  signIn();
                }}
              >
                Continue with Google{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="relative xl:absolute w-80 h-80 md:w-[600px] md:h-[600px] xl:w-[650px] xl:h-[650px] top-14 right-5">
          <Image src={userImage}  priority alt="asd" />
        </div>
      </main>

      {status  === "authenticated" && <HeroSecondary user={data}/>}
    </div>
  );
}

export default Home;

export async function getServerSideProps() {
  // Simulate fetching data from an API or database
  // Replace this with your actual data fetching logic
  let data = await fetch("https://backend-assginment-python-f2be.vercel.app/");
   data = await data.json();


  return {
    props: {
      data,
    },
  };
}
