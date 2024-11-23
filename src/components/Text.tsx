import { afacad } from "@/app/layout";
import React from "react";

interface CustomText {
  classname?: string;
  children: React.ReactNode | string;
}

export const LargeText = ({ classname, children }: CustomText) => {
  return (
    <p
      className={`${classname} ${afacad.className} text-[27px] text-[#4A4947]`}
    >
      {children}
    </p>
  );
};

export const MediumText = ({ classname, children }: CustomText) => {
  return (
    <p
      className={`${classname} ${afacad.className} text-[18px] text-[#4A4947]`}
    >
      {children}
    </p>
  );
};

export const SmallText = ({ classname, children }: CustomText) => {
  return (
    <p
      className={`${classname} ${afacad.className} text-[16px] text-[#4A4947]`}
    >
      {children}
    </p>
  );
};

export const ExtraSmallText = ({ classname, children }: CustomText) => {
  return (
    <p
      className={`${classname} ${afacad.className} text-[13px] text-[#4A4947]`}
    >
      {children}
    </p>
  );
};
