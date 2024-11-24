import React from "react";
import { LargeText, SmallText } from "./Text";
import Image from "next/image";

const Cities = () => {
  return (
    <div className="my-8">
      <div className="flex flex-col items-center justify-center">
        <LargeText classname="font-extrabold text-[35px]">
          Lorem ipsum dolor sit amet
        </LargeText>
        <SmallText>
          we provide a complete service for the sale, purchase of rental of real
          estate
        </SmallText>
      </div>
      <div className="flex justify-center items-center gap-x-20 my-8">
        <div className="w-1/5 rounded-2xl overflow-hidden relative">
          <Image
            src={"/chennai.jpg"}
            alt="chennai-img"
            width={0}
            height={0}
            className="w-full h-full"
            unoptimized
          />
          <div className="absolute bottom-0 w-full h-full bg-gradient-to-b from-transparent to-black">
            <div className="flex flex-col absolute left-4 bottom-4">
              <LargeText classname="font-extrabold text-[35px] text-white">
                Chennai
              </LargeText>
              <SmallText classname="text-white">2 property</SmallText>
            </div>
          </div>
        </div>
        <div className="w-1/5 rounded-2xl overflow-hidden self-stretch relative">
          <Image
            src={"/coimbatore.jpg"}
            alt="chennai-img"
            width={50}
            height={100}
            unoptimized
            className="w-full h-full"
          />
          <div className="absolute bottom-0 w-full h-full bg-gradient-to-b from-transparent to-black">
            <div className="flex flex-col absolute left-4 bottom-4">
              <LargeText classname="font-extrabold text-[35px] text-white">
                Coimbatore
              </LargeText>
              <SmallText classname="text-white">5 property</SmallText>
            </div>
          </div>
        </div>
        <div className="w-1/5 rounded-2xl overflow-hidden relative bg-gradient-to-b from-transparent to-black">
          <Image
            src={"/trichy.jpg"}
            alt="chennai-img"
            width={50}
            height={100}
            unoptimized
            className="w-full h-full"
          />
          <div className="absolute bottom-0 w-full h-full bg-gradient-to-b from-transparent to-black">
            <div className="flex flex-col absolute left-4 bottom-4">
              <LargeText classname="font-extrabold text-[35px] text-white">
                Trichy
              </LargeText>
              <SmallText classname="text-white">3 property</SmallText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
