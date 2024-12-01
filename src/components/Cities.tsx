"use client";
import React from "react";
import { LargeText, SmallText } from "./Text";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { propertyData } from "./Listing";

const Cities = () => {
  const router = useRouter();
  const redirectToCityPage = (cityName: string) => {
    router.push(`/city/${cityName}`);
  };
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
        <div
          className="w-1/5 rounded-2xl overflow-hidden relative  cursor-pointer"
          onClick={() => redirectToCityPage("chennai")}
        >
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
              <SmallText classname="text-white">
                {propertyData.filter((val) => val.location == "Chennai").length}
                &nbsp;properties
              </SmallText>
            </div>
          </div>
        </div>
        <div
          className="w-1/5 rounded-2xl overflow-hidden self-stretch relative cursor-pointer"
          onClick={() => redirectToCityPage("coimbatore")}
        >
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
              <SmallText classname="text-white">
                {
                  propertyData.filter((val) => val.location == "Coimbatore")
                    .length
                }
                &nbsp;properties
              </SmallText>
            </div>
          </div>
        </div>
        <div
          className="w-1/5 rounded-2xl overflow-hidden relative bg-gradient-to-b from-transparent to-black cursor-pointer"
          onClick={() => redirectToCityPage("trichy")}
        >
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
              <SmallText classname="text-white">
                {propertyData.filter((val) => val.location == "Trichy").length}
                &nbsp;properties
              </SmallText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
