import About from "@/components/About";
import Cities from "@/components/Cities";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import Listing from "@/components/Listing";
import React from "react";

export default function Home() {
  return (
    <div className="bg-[#F5F7F8]">
      <Hero />
      <About />
      <hr className="my-8" />
      <Listing />
      <hr className="my-8" />
      <Cities />
      <hr className="my-8" />
      <div id="contactus">
        <ContactUs />
      </div>
    </div>
  );
}
