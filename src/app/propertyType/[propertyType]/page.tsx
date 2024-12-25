"use client";
import { propertyData } from "@/components/Listing";
import PropertyCard from "@/components/PropertyCard";
import { LargeText } from "@/components/Text";
import { useParams } from "next/navigation";
import React from "react";

const PropertyType = () => {
  const { propertyType } = useParams();
  return (
    <div className="m-4">
      <LargeText classname="font-bold">{propertyType}</LargeText>
      <div className="flex flex-wrap gap-4">
        {propertyData
          .filter((val) => val.type == propertyType)
          .map((property, index) => (
            <div key={index} className="w-[20%] my-4 ml-4">
              <PropertyCard property={property} className="!w-full" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PropertyType;
