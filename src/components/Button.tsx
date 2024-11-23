import React from "react";

interface CustomButtonProps {
  classname?: string;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  children: React.ReactNode | string;
}

export const PrimaryButton = ({
  classname,
  buttonProps,
  children,
}: CustomButtonProps) => {
  return (
    <button
      className={`${classname} px-4 p-2 rounded-2xl text-secondaryBtn bg-primaryBtn border-none outline-none active:scale-95 duration-75`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({
  classname,
  buttonProps,
  children,
}: CustomButtonProps) => {
  return (
    <button
      className={`${classname} px-4 p-2 rounded-2xl text-primaryBtn bg-secondaryBtn border-none outline-none active:scale-95 duration-75`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
