"use client";
import React, { useEffect, useState } from "react";
import { SmallText } from "./Text";
import { PropertyDetails } from "@/models/Property";
import PropertyCard from "./PropertyCard";

interface TabsProps {
  tabHeaders: string[];
  data: PropertyDetails[];
}

const Tabs = ({ tabHeaders, data }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState<string>(tabHeaders[0]);
  const [filteredProperty, setFilteredProperty] = useState<PropertyDetails[]>(
    []
  );

  useEffect(() => {
    setFilteredProperty(data.filter((val) => val.type == data[0].type));
  }, []);

  const selectTab = (selectedTabName: string) => {
    setSelectedTab(selectedTabName);
    setFilteredProperty(data.filter((val) => val.type == selectedTabName));
  };
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="bg-primaryBtn/20 p-2 flex items-center rounded-2xl justify-between w-[40%]">
        {tabHeaders.map((header, index) => (
          <div
            key={index}
            className={`${
              selectedTab == header ? "bg-white shadow-md" : "bg-transparent"
            } px-4 p-3 rounded-xl cursor-pointer text-center w-1/5`}
            onClick={() => selectTab(header)}
          >
            <SmallText classname={`text-primaryBtn font-extrabold`}>
              {header}
            </SmallText>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center w-full mt-12 gap-8">
        {filteredProperty.map((property, index) => (
          <PropertyCard property={property} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
