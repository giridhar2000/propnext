import { LargeText, MediumText, SmallText } from "@/components/Text";
import VerticalSpacer from "@/components/VerticalSpacer";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#F5F7F8] relative">
      <Image
        src={"/bg.jpg"}
        alt="landing-background"
        width={0}
        height={0}
        className="w-screen h-[90vh]"
        objectFit="contain"
        unoptimized
      />
      <div className="absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">
        <LargeText classname="text-[55px] text-center text-[#4A4947] font-extrabold drop-shadow-2xl text-shadow">
          Easy way to find a <br /> perfect property
        </LargeText>
        <MediumText classname="text-center text-[#4A4947]">
          We provide a complete service for the sale,
          <br />
          purchase or rental of real estate
        </MediumText>
      </div>
      <div className="flex gap-x-6 w-3/5 justify-between items-center absolute bottom-0 left-2/4 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm p-6 bg-white/70 rounded-2xl">
        <div className="flex items-center justify-between flex-1">
          <div className="flex flex-col gap-y-4">
            <MediumText classname="font-bold">Location</MediumText>
            <SmallText classname="text-[#343131]/50">
              Select Your City
            </SmallText>
          </div>
          <VerticalSpacer classname="bg-green-800" />
        </div>

        <div className="flex items-center justify-between flex-1">
          <div className="flex flex-col gap-y-4">
            <MediumText classname="font-bold">Property Type</MediumText>
            <SmallText classname="text-[#343131]/50">
              Choose Property Type
            </SmallText>
          </div>
          <VerticalSpacer classname="bg-green-800" />
        </div>

        <div className="flex flex-col gap-y-4 flex-1">
          <MediumText classname="font-bold">Choose one</MediumText>
          <SmallText classname="text-[#343131]/50">Select one</SmallText>
        </div>

        <div className="bg-primaryBtn p-3 rounded-2xl">
          <Image src={"/search.svg"} width={30} height={30} alt="search-icon" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
