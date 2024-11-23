import React from "react";
import { LargeText, SmallText } from "./Text";
import { SecondaryButton } from "./Button";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center p-10 px-16 w-full">
      <div className="flex flex-col gap-y-12 w-2/5">
        <LargeText classname="font-bold text-[35px]">
          We use real estate to show our appreciation of the
        </LargeText>
        <SmallText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus amet voluptatem eaque. Facilis, mollitia est. Amet ea
          explicabo aut voluptate reiciendis veniam. Quibusdam quis expedita
          animi accusamus quas suscipit, excepturi dolore totam consectetur eos
          magni reiciendis maiores ut porro necessitatibus eaque. Perspiciatis,
          laboriosam maxime! Odit iusto rerum ex pariatur cumque!
        </SmallText>
        <div className="flex justify-between w-full">
          <div className="flex flex-col items-start">
            <LargeText>15k+</LargeText>
            <SmallText>Properties for sale</SmallText>
          </div>
          <div className="flex flex-col items-start">
            <LargeText>890</LargeText>
            <SmallText>Daily completed transactions</SmallText>
          </div>
        </div>
        <SecondaryButton classname="self-start rounded-xl">
          CONTACT US
        </SecondaryButton>
      </div>
      <div className="w-2/5">
        <Image
          src={"/aboutProperty.jpg"}
          alt="about-img"
          width={0}
          height={0}
          className="rounded-3xl w-full h-full"
          unoptimized
        />
      </div>
    </div>
  );
};

export default About;
