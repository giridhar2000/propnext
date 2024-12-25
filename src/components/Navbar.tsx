"use client";
import React from "react";
import { MediumText, SmallText } from "./Text";
import { PrimaryButton } from "./Button";
import Image from "next/image";
import Link from "next/link";
import { propertyData } from "./Listing";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const allCities = propertyData.map((val) => {
    return val.location;
  });
  const cities = [...new Set(allCities)];
  const allTypes = propertyData.map((val) => {
    return val.type;
  });
  const propertyType = [...new Set(allTypes)];
  const router = useRouter();
  return (
    <div className="bg-[#F2F2F2] w-full py-4 px-4 flex md:justify-between">
      <div className="bg-[#be9267] w-40 h-fit"></div>
      <div className="hidden md:flex md:items-center md:space-x-8 md:px-4 justify-between w-2/4">
        <Link href={"/"}>
          <MediumText classname="text-[#343131] cursor-pointer">
            HOME
          </MediumText>
        </Link>
        <div className="relative group">
          <MediumText classname="text-[#343131] cursor-pointer flex items-center gap-2">
            LOCATIONS
            <Image
              src={"/LocationsIcon.svg"}
              alt="downArrow"
              width={10}
              height={10}
              unoptimized
            />
          </MediumText>
          <div className="bg-white hidden rounded-xl p-2 absolute top-full z-50 group-hover:block">
            {cities.map((city, index) => {
              return (
                <div
                  key={index}
                  onClick={() => router.push(`/city/${city.toLowerCase()}`)}
                >
                  <SmallText classname="cursor-pointer hover:bg-primaryBtn hover:text-secondaryBtn rounded-lg p-2">
                    {city}
                  </SmallText>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative group">
          <MediumText classname="text-[#343131] cursor-pointer flex items-center gap-2">
            PROPERTY TYPE
            <Image
              src={"/LocationsIcon.svg"}
              alt="downArrow"
              width={10}
              height={10}
              unoptimized
            />
          </MediumText>
          <div className="bg-white hidden rounded-xl p-2 absolute top-full z-50 group-hover:block">
            {propertyType.map((property, index) => {
              return (
                <div
                  key={index}
                  onClick={() => router.push(`/propertyType/${property}`)}
                >
                  <SmallText classname="cursor-pointer hover:bg-primaryBtn hover:text-secondaryBtn rounded-lg p-2">
                    {property}
                  </SmallText>
                </div>
              );
            })}
          </div>
        </div>
        <Link href={"#contactus"}>
          <PrimaryButton classname="p-3 px-8 tracking-widest">
            ENQUIRE NOW
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
