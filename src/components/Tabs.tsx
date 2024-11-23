"use client";
import React, { useState } from "react";
import { SmallText } from "./Text";
import { PropertyDetails } from "@/models/Property";
import PropertyCard from "./PropertyCard";

interface TabsProps {
  tabHeaders: string[];
  data: PropertyDetails[];
}

const Tabs = ({ tabHeaders, data }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState<string>(tabHeaders[0]);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="bg-primaryBtn/20 p-2 flex items-center rounded-2xl justify-between w-[40%]">
        {tabHeaders.map((header, index) => (
          <div
            key={index}
            className={`${
              selectedTab == header ? "bg-white shadow-md" : "bg-transparent"
            } px-4 p-3 rounded-xl cursor-pointer text-center w-1/5`}
            onClick={() => setSelectedTab(header)}
          >
            <SmallText classname={`text-primaryBtn font-extrabold`}>
              {header}
            </SmallText>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-around w-full px-8 mt-12 gap-8">
        {data.map((property, index) => (
          <PropertyCard
            imageUrl={property.image}
            name={property.name}
            status={property.status}
            location={property.location}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
