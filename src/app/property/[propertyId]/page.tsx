"use client";
import { propertyData } from "@/components/Listing";
import {
  ExtraSmallText,
  LargeText,
  MediumText,
  SmallText,
} from "@/components/Text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const Property = () => {
  const { propertyId } = useParams();
  return (
    <div>
      {propertyData
        .filter((property) => property.id == propertyId)
        .map((value, index) => (
          <div key={index} className="flex flex-col gap-8 p-8">
            <div className="flex items-center justify-between">
              <div className="flex-col items-start">
                <LargeText classname="!text-3xl font-bold">
                  {value.name}
                </LargeText>
                <div className="flex items-center gap-2">
                  <Image
                    src={"/AddressIcon.svg"}
                    alt="address-img"
                    width={30}
                    height={30}
                    unoptimized
                    className="bg-black"
                  />
                  <SmallText>{value.location}</SmallText>
                </div>
              </div>
              <div className="p-2 px-4 bg-primaryBtn rounded-lg">
                <LargeText classname="text-white">₹ 28,33,232</LargeText>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <Carousel className="w-full max-w-screen-xl">
                <CarouselContent className="-ml-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-1 md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1">
                        <Image
                          src={"/chennai.jpg"}
                          alt="property-img"
                          width={0}
                          height={0}
                          className="w-full h-full mx-auto my-0 rounded-xl"
                          unoptimized
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div className="flex justify-center items-center m-4 mt-2 gap-8">
              <div className="flex items-center gap-x-2 bg-primaryBtn rounded-2xl p-2 px-4">
                <Image
                  src={"/bed.svg"}
                  alt="bed-img"
                  width={15}
                  height={15}
                  unoptimized
                />
                <ExtraSmallText classname="text-white">
                  {value.info.noOfBedRooms}
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
                  {value.info.noOfBaths}
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
                  {value.info.sqft} sqft.
                </ExtraSmallText>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <LargeText classname="font-bold">Description</LargeText>
              <MediumText classname="ml-2">{value.description}</MediumText>
            </div>

            <div className="flex items-start justify-between w-full mt-4">
              <div className="flex flex-col w-1/2">
                <LargeText classname="font-bold mb-4">
                  Property Details
                </LargeText>
                <div className="flex flex-wrap gap-4 w-full ml-2">
                  <div className="basis-5/12 my-2">
                    <MediumText classname="text-black/35">Label</MediumText>
                    <MediumText>12232</MediumText>
                  </div>
                  <div className="basis-5/12 my-2">
                    <MediumText classname="text-black/35">Type</MediumText>
                    <MediumText>{value.type}</MediumText>
                  </div>
                  <div className="basis-5/12 my-2">
                    <MediumText classname="text-black/35">Status</MediumText>
                    <MediumText>{value.status}</MediumText>
                  </div>
                  <div className="basis-5/12 my-2">
                    <MediumText classname="text-black/35">Land Area</MediumText>
                    <MediumText>{value.info.sqft} Sqft.</MediumText>
                  </div>
                  <div className="basis-5/12 my-2">
                    <MediumText classname="text-black/35">
                      Year Built
                    </MediumText>
                    <MediumText>2024</MediumText>
                  </div>
                  <div className="basis-5/12 my-2">
                    <MediumText classname="text-black/35">Price</MediumText>
                    <MediumText>₹ 28,33,232</MediumText>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-1/2">
                <LargeText classname="font-bold mb-4">Amenities</LargeText>
                <div className="flex flex-wrap gap-4 w-full ml-2">
                  <div className="basis-5/12 my-2">
                    <MediumText>Balcony</MediumText>
                  </div>
                  <div className="basis-5/12 my-2">
                    <MediumText>Car Parking</MediumText>
                  </div>
                  <div className="basis-5/12 my-2">
                    <MediumText>Dining Room</MediumText>
                  </div>
                  <div className="basis-5/12 my-2">
                    <MediumText>Kitchen</MediumText>
                  </div>
                  <div className="basis-5/12 my-2">
                    <MediumText>Lawn</MediumText>
                  </div>
                  <div className="basis-5/12 my-2">
                    <MediumText>TV Cable</MediumText>
                  </div>
                  <div className="basis-5/12 my-2">
                    <MediumText>3 Bedroom</MediumText>
                  </div>
                  <div className="basis-5/12 my-2">
                    <MediumText>Living Room</MediumText>
                  </div>
                  <div className="basis-5/12 my-2">
                    <MediumText>Air Conditioning</MediumText>
                  </div>
                  <div className="basis-5/12 my-2">
                    <MediumText>Study Room</MediumText>
                  </div>
                  <div className="basis-5/12 my-2">
                    <MediumText>Area</MediumText>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="w-1/2">
                <LargeText classname="font-bold">Address</LargeText>
                <MediumText>{value.location}</MediumText>
              </div>
              <div className="w-1/2">
                <LargeText classname="font-bold">Find here</LargeText>
                <div className="google-map-code">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30374.11288108923!2d80.21977195!3d12.979113899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d9ff2065a3b%3A0x66435015604038cc!2sVelachery%2C%20Chennai%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1735132838184!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Property;
