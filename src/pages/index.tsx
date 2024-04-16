import React from "react";
import Layout from "@/Components/Layout";
import Image from "next/image";

import { Button } from "antd";
import Hero from "@/Components/Pages/Hero";

import helmet5 from "../../public/images/helmet-4.png";
import helmet6 from "../../public/images/helmet-5.png";

export default function Home() {
  return (
    <Layout>
      <Hero />

      <div className="px-[5rem]">
        <div className="flex justify-between items-center">
          <div className="text-7xl">VITAL PROTECTION</div>
          <div className="flex justify-center items-center gap-4">
            <div className="font-semibold">PREV</div>
            <div className="border-black border-t w-[5rem] "></div>
            <div className="font-semibold">NEXT</div>
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="w-[20%] mt-[4rem]">
            <div className="font-semibold">
              TO ONE&apos;S FRAGILE
              <br /> SKULL AND CAN
              <br /> SAVE LIVES
            </div>
            <div className="font-bold text-lg mt-[7rem]">
              Live and <br />
              significantly
            </div>
          </div>
          <div className=" w-[40%] flex justify-center items-center mt-[5rem]">
            <div className="bg-slate-100 rounded-[6rem] h-[15rem] w-[18rem] flex justify-center items-center">
              <Image
                src={helmet5}
                alt=""
                className="w-[10rem] absolute pt-[1rem] "
              />
            </div>
          </div>
          <div className="w-[40%] flex justify-center items-center mt-[5rem]">
            <div className="bg-slate-100 rounded-[6rem] h-[15rem] w-[18rem] flex justify-center items-center">
              <Image
                src={helmet6}
                alt=""
                className="w-[10rem] absolute pt-[1rem] "
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="w-[20%] mt-[4rem]">
            <div className="font-semibold">SUMMARY</div>
            <div className="text-xs">U.S requiring helmet</div>
          </div>
          <div className=" w-[40%] font-bold text-5xl flex justify-center items-center mt-[5rem]">
            THE STATES AND LOCALITIES BELOW
          </div>
          <div className=" w-[40%] flex font-semibold text-sm justify-center items-center mt-[5rem]">
            <div className="w-[20rem] flex justify-start items-center">
              Begen adopting laws in 1998. Most are limited to children under
              18, but there are 49 all-ages laws,
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
