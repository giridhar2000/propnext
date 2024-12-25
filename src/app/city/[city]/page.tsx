"use client";
import { propertyData } from "@/components/Listing";
import PropertyCard from "@/components/PropertyCard";
import { LargeText, SmallText } from "@/components/Text";
import { PropertyDetails, PropertyType } from "@/models/Property";
import { useParams } from "next/navigation";
import React, { useLayoutEffect, useState } from "react";

const City = () => {
  const { city } = useParams();
  const [cityDetails, setCityDetails] = useState<PropertyDetails[]>([]);
  
  useLayoutEffect(() => {
    setCityDetails(
      propertyData.filter((property) => property.location.toLowerCase() == city)
    );
  }, []);

  return (
    <div className="relative">
      <div className="absolute p-4">
        <LargeText classname="text-white text-[55px]">
          {city!.toString().charAt(0).toUpperCase() + city!.toString().slice(1)}
        </LargeText>
        <SmallText classname="text-white text-[20px]">
          {cityDetails.length} properties
        </SmallText>
      </div>
      <div className="w-full h-[500px] bg-primaryBtn"></div>
      <div className="p-8 flex flex-col gap-8">
        {cityDetails.filter((val) => val.type == PropertyType.PLOT).length >
          0 && (
          <div>
            <LargeText classname="font-bold">Plots</LargeText>
            <div className="flex items-center gap-8 flex-wrap ml-2 mt-1">
              {cityDetails
                .filter((val) => val.type == PropertyType.PLOT)
                .map((value, index) => {
                  return <PropertyCard key={index} property={value} />;
                })}
            </div>
          </div>
        )}
        {cityDetails.filter((val) => val.type == PropertyType.VILLA).length >
          0 && (
          <div>
            <LargeText classname="font-bold">Villas</LargeText>
            <div className="flex items-center gap-8 flex-wrap ml-2 mt-1">
              {cityDetails
                .filter((val) => val.type == PropertyType.VILLA)
                .map((value, index) => {
                  return <PropertyCard key={index} property={value} />;
                })}
            </div>
          </div>
        )}
        {cityDetails.filter((val) => val.type == PropertyType.COMMERCIAL)
          .length > 0 && (
          <div>
            <LargeText classname="font-bold">Commercials</LargeText>
            <div className="flex items-center gap-8 flex-wrap ml-2 mt-1">
              {cityDetails
                .filter((val) => val.type == PropertyType.COMMERCIAL)
                .map((value, index) => {
                  return <PropertyCard key={index} property={value} />;
                })}
            </div>
          </div>
        )}
        {cityDetails.filter((val) => val.type == PropertyType.RESIDENTIAL)
          .length > 0 && (
          <div>
            <LargeText classname="font-bold">Residential</LargeText>
            <div className="flex items-center gap-8 flex-wrap ml-2 mt-1">
              {cityDetails
                .filter((val) => val.type == PropertyType.RESIDENTIAL)
                .map((value, index) => {
                  return <PropertyCard key={index} property={value} />;
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default City;
