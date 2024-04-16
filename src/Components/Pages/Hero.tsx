import React from "react";
import Image from "next/image";
import cycleImage from "../../../public/images/cycle-2.png";

import helmet1 from "../../../public/images/helment-1.png";
import helmet2 from "../../../public/images/helment-2.png";
import helmet3 from "../../../public/images/helmet-3.png";

import { Button } from "antd";

export default function Hero() {
  return (
    <div>
      {" "}
      <div className="p-[5rem] ">
        <div className="text-center text-9xl font-semibold mt-[4rem] relative tracking-widest">
          <div className="pl-[20rem]">
            <Image
              src={helmet1}
              alt=""
              className="w-[10rem] absolute pt-[1rem] "
            />
          </div>
          <div className="flex justify-end pr-[19rem]">
            <Image
              src={helmet2}
              alt=""
              className="w-[10rem] absolute pt-[1rem] "
            />
          </div>
          CYCLE
          <br /> HELMETS
          <div className="flex justify-center items-center pr-[5rem]">
            <div className="text-base text-left  w-[12rem] tracking-normal ">
              <div>A MOUNTAIN BIKE HELMET COVERS MORE OF THE BACK OF HEAD</div>
              <div className="mt-[3rem]">
                <div>
                  <Image src={helmet3} alt="" className="w-[7rem] relative " />
                </div>
                <div className="flex ">
                  <div className="border w-[10rem] border-black rounded-full text-center h-[2.5rem] flex justify-center items-center">
                    MOUNTAIN
                  </div>
                  <div className="border w-[7rem] border-black rounded-full text-center h-[2.5rem] flex justify-center items-center mt-[0.65rem]">
                    CYCLING
                  </div>
                </div>
                <div className="border w-[10rem] border-black rounded-full text-center h-[2.5rem] flex justify-center items-center">
                  CYCLE HELMET
                </div>
              </div>
            </div>
            <Image
              src={cycleImage}
              alt=""
              className="w-[52rem] relative bottom-[3rem] "
            />
            <div className="text-base text-left  w-[17rem] tracking-normal">
              <div className="font-semibold text-lg">SINCE IT&apos;S MORE</div>
              <div className="text-xs">
                In general, mountain bike helmet provide more significate
                protection
              </div>
              <div className="mt-[1rem]">
                <Button className="bg-black text-white text-xs font-semibold rounded-full h-[2.5rem]">
                  EXPLORE ALL
                </Button>
              </div>

              <div className="mt-[3rem] flex gap-4">
                <div className="border-black border-t w-[5rem] mt-[1rem]"></div>
                <div>
                  <div>PROTECTION</div>
                  <div className="text-xs">
                    Mountain cycle helmets typically have more.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
