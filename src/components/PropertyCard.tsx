import { PropertyDetails } from "@/models/Property";
import Image from "next/image";
import React from "react";
import { ExtraSmallText, SmallText } from "./Text";
import { useRouter } from "next/navigation";

interface PropertyCardProps {
  property: PropertyDetails;
  className?: string;
}

const PropertyCard = ({ property, className }: PropertyCardProps) => {
  const router = useRouter();

  return (
    <div
      className={`bg-white rounded-2xl p-4 flex flex-col items-start gap-2 w-1/5 shadow-sm ${className}`}
    >
      <div
        className="w-full relative hover:cursor-pointer group"
        onClick={() => router.push(`/property/${property.id}`)}
      >
        <Image
          src={"/kitchenImage.jpg"}
          alt="property-img"
          width={0}
          height={0}
          className="w-full h-2/4 rounded-xl overflow-hidden"
          unoptimized
        />
        <div className="absolute bottom-0 rounded-xl flex items-end p-4 w-full h-full bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transform transition-opacity duration-300 ease-in-out">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-x-2 bg-primaryBtn rounded-2xl p-2 px-4">
              <Image
                src={"/bed.svg"}
                alt="bed-img"
                width={15}
                height={15}
                unoptimized
              />
              <ExtraSmallText classname="text-white">
                {property.info.noOfBedRooms}
              </ExtraSmallText>
            </div>
            <div className="flex items-center gap-x-2 bg-primaryBtn rounded-2xl p-2 px-4">
              <Image
                src={"/bath.svg"}
                alt="bath-img"
                width={15}
                height={15}
                unoptimized
              />
              <ExtraSmallText classname="text-white">
                {property.info.noOfBaths}
              </ExtraSmallText>
            </div>
            <div className="flex items-center gap-x-2 bg-primaryBtn rounded-2xl p-2 px-4">
              <Image
                src={"/sqft.svg"}
                alt="sqft-img"
                width={15}
                height={15}
                unoptimized
              />
              <ExtraSmallText classname="text-white">
                {property.info.sqft} sqft.
              </ExtraSmallText>
            </div>
          </div>
        </div>
        <ExtraSmallText classname="bg-secondaryBtn text-primaryBtn absolute top-2 left-2 rounded-2xl p-2 shadow-xl">
          {property.status}
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
        <SmallText classname="text-[#8F90A6]">{property.location}</SmallText>
      </div>
      <SmallText classname="text-[#4A4947]">{property.name}</SmallText>
    </div>
  );
};

export default PropertyCard;
