import React from "react";
import { MediumText } from "./Text";
import { PrimaryButton } from "./Button";

const Navbar = () => {
  return (
    <div className="bg-[#F2F2F2] w-full py-4 px-4 flex md:justify-between">
      <div className="bg-[#be9267] w-40 h-fit"></div>
      <div className="hidden md:flex md:items-center md:space-x-8 md:px-4 justify-between w-2/4">
        <MediumText classname="text-[#343131] cursor-pointer">HOME</MediumText>
        <MediumText classname="text-[#343131] cursor-pointer">
          LOCATIONS
        </MediumText>
        <MediumText classname="text-[#343131] cursor-pointer">
          PROPERTY TYPE
        </MediumText>
        <PrimaryButton classname="p-3 px-8 tracking-widest">
          ENQUIRE NOW
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Navbar;
