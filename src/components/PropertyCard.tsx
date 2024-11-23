import { PropertyStatus } from "@/models/Property";
import Image from "next/image";
import React from "react";
import { ExtraSmallText, LargeText, SmallText } from "./Text";

interface PropertyCardProps {
  imageUrl: string;
  status: PropertyStatus;
  location: string;
  name: string;
}

const PropertyCard = ({
  // imageUrl,
  name,
  status,
  location,
}: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col items-start gap-2 w-1/5 shadow-sm">
      <div className="w-full relative">
        <Image
          src={"/kitchenImage.jpg"}
          alt="property-img"
          width={0}
          height={0}
          className="w-full h-2/4 rounded-xl"
          unoptimized
        />
        <ExtraSmallText classname="bg-secondaryBtn text-primaryBtn absolute top-2 left-2 rounded-2xl p-2 shadow-xl">
          {status}
        </ExtraSmallText>
      </div>
      <div className="flex items-center">
        <Image
          src={"/location.svg"}
          alt="location-img"
          width={15}
          height={15}
        />
        &nbsp;
        <SmallText classname="text-[#8F90A6]">{location}</SmallText>
      </div>
      <SmallText classname="text-[#4A4947]">{name}</SmallText>
    </div>
  );
};

export default PropertyCard;
