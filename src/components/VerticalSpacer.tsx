import React from "react";

interface VerticalSpacerProps {
  classname: string;
}

const VerticalSpacer = ({ classname }: VerticalSpacerProps) => {
  return <div className={`${classname} h-14 w-[2px]`}></div>;
};

export default VerticalSpacer;
