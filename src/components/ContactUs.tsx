import React from "react";
import { LargeText, SmallText } from "./Text";
import Image from "next/image";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="w-full flex justify-around">
      <div className="p-8 bg-primaryBtn w-[45%] rounded-2xl flex flex-col gap-8">
        <div>
          <LargeText classname="text-white font-bold">Contact Us</LargeText>
          <SmallText classname="text-white">
            We will be only a call away!
          </SmallText>
        </div>
        <div className="flex flex-col gap-12 mt-8">
          <div className="flex items-center gap-4">
            <Image
              src={"/PhoneIcon.svg"}
              alt="address-img"
              width={30}
              height={30}
              unoptimized
            />
            <SmallText classname="text-white">+91 - 98406 27688</SmallText>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={"/EmailIcon.svg"}
              alt="address-img"
              width={30}
              height={30}
              unoptimized
            />
            <SmallText classname="text-white">
              bala.propnext@gmail.com
            </SmallText>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={"/AddressIcon.svg"}
              alt="address-img"
              width={30}
              height={30}
              unoptimized
            />
            <SmallText classname="text-white">
              Jaganathanpuram, Velachery, Chennai - 600042
            </SmallText>
          </div>
        </div>
      </div>
      <div className="w-[45%]">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
