import React from "react";
import { LargeText, SmallText } from "./Text";
import Tabs from "./Tabs";
import {
  PropertyDetails,
  PropertyStatus,
  PropertyType,
} from "@/models/Property";

export const propertyData: PropertyDetails[] = [
  {
    id: "1a2b3c4d",
    name: "Sunny Villas",
    status: PropertyStatus.COMPLETED,
    image: "https://example.com/images/sunny_villas.jpg",
    type: PropertyType.VILLA,
    description: "A luxurious villa with modern amenities and spacious rooms.",
    location: "Chennai",
    info: {
      noOfBedRooms: 5,
      sqft: 4500,
      noOfBaths: 4,
    },
  },
  {
    id: "5f6g7h8i",
    name: "Greenfield Residential Complex",
    status: PropertyStatus.UPCOMING,
    image: "https://example.com/images/greenfield_residential.jpg",
    type: PropertyType.RESIDENTIAL,
    description:
      "A new residential development with eco-friendly features and parks.",
    location: "Chennai",
    info: {
      noOfBedRooms: 3,
      sqft: 1800,
      noOfBaths: 2,
    },
  },
  {
    id: "9j0k1l2m",
    name: "Cityscape Residential Towers",
    status: PropertyStatus.UPCOMING,
    image: "https://example.com/images/cityscape_residential.jpg",
    type: PropertyType.RESIDENTIAL,
    description:
      "Modern residential towers with state-of-the-art facilities and city views.",
    location: "Chennai",
    info: {
      noOfBedRooms: 2,
      sqft: 1200,
      noOfBaths: 2,
    },
  },
  {
    id: "3n4o5p6q",
    name: "Ocean View Plot",
    status: PropertyStatus.COMPLETED,
    image: "https://example.com/images/ocean_view_plot.jpg",
    type: PropertyType.PLOT,
    description:
      "A beautiful plot with a panoramic ocean view, ideal for construction.",
    location: "Chennai",
    info: {
      noOfBedRooms: 0,
      sqft: 10000,
      noOfBaths: 0,
    },
  },
  {
    id: "7r8s9t0u",
    name: "Downtown Commercial Space",
    status: PropertyStatus.UPCOMING,
    image: "https://example.com/images/downtown_commercial.jpg",
    type: PropertyType.COMMERCIAL,
    description:
      "A commercial property in the heart of downtown, perfect for offices or retail.",
    location: "Chennai",
    info: {
      noOfBedRooms: 0,
      sqft: 8000,
      noOfBaths: 4,
    },
  },
  {
    id: "1v2w3x4y",
    name: "Cityscape Residential Towers",
    status: PropertyStatus.UPCOMING,
    image: "https://example.com/images/cityscape_residential.jpg",
    type: PropertyType.RESIDENTIAL,
    description:
      "Modern residential towers with state-of-the-art facilities and city views.",
    location: "Coimbatore",
    info: {
      noOfBedRooms: 2,
      sqft: 1200,
      noOfBaths: 2,
    },
  },
  {
    id: "5z6a7b8c",
    name: "Lakeside Plot",
    status: PropertyStatus.COMPLETED,
    image: "https://example.com/images/lakeside_plot.jpg",
    type: PropertyType.PLOT,
    description:
      "A peaceful lakeside plot perfect for a dream home or vacation cabin.",
    location: "Coimbatore",
    info: {
      noOfBedRooms: 0,
      sqft: 7500,
      noOfBaths: 0,
    },
  },
  {
    id: "9d0e1f2g",
    name: "Lakeside Plot",
    status: PropertyStatus.COMPLETED,
    image: "https://example.com/images/lakeside_plot.jpg",
    type: PropertyType.PLOT,
    description:
      "A peaceful lakeside plot perfect for a dream home or vacation cabin.",
    location: "Coimbatore",
    info: {
      noOfBedRooms: 0,
      sqft: 7500,
      noOfBaths: 0,
    },
  },
  {
    id: "3h4i5j6k",
    name: "Lakeside Plot",
    status: PropertyStatus.COMPLETED,
    image: "https://example.com/images/lakeside_plot.jpg",
    type: PropertyType.PLOT,
    description:
      "A peaceful lakeside plot perfect for a dream home or vacation cabin.",
    location: "Coimbatore",
    info: {
      noOfBedRooms: 0,
      sqft: 7500,
      noOfBaths: 0,
    },
  },
  {
    id: "7l8m9n0o",
    name: "Lakeside Plot",
    status: PropertyStatus.COMPLETED,
    image: "https://example.com/images/lakeside_plot.jpg",
    type: PropertyType.PLOT,
    description:
      "A peaceful lakeside plot perfect for a dream home or vacation cabin.",
    location: "Trichy",
    info: {
      noOfBedRooms: 0,
      sqft: 7500,
      noOfBaths: 0,
    },
  },
  {
    id: "2p3q4r5s",
    name: "TechHub Commercial Center",
    status: PropertyStatus.COMPLETED,
    image: "https://example.com/images/techhub_commercial.jpg",
    type: PropertyType.COMMERCIAL,
    description:
      "A high-tech commercial center ideal for startups and tech companies.",
    location: "Trichy",
    info: {
      noOfBedRooms: 0,
      sqft: 10000,
      noOfBaths: 6,
    },
  },
  {
    id: "6t7u8v9w",
    name: "Riverside Luxury Villas",
    status: PropertyStatus.UPCOMING,
    image: "https://example.com/images/riverside_luxury_villas.jpg",
    type: PropertyType.VILLA,
    description:
      "Luxurious riverside villas with private pools and serene views.",
    location: "Trichy",
    info: {
      noOfBedRooms: 4,
      sqft: 3800,
      noOfBaths: 4,
    },
  },
  {
    id: "0x1y2z3a",
    name: "Sunny Villas",
    status: PropertyStatus.COMPLETED,
    image: "https://example.com/images/sunny_villas.jpg",
    type: PropertyType.VILLA,
    description: "A luxurious villa with modern amenities and spacious rooms.",
    location: "Trichy",
    info: {
      noOfBedRooms: 5,
      sqft: 4500,
      noOfBaths: 4,
    },
  },
  {
    id: "4b5c6d7e",
    name: "Sunny Villas",
    status: PropertyStatus.COMPLETED,
    image: "https://example.com/images/sunny_villas.jpg",
    type: PropertyType.VILLA,
    description: "A luxurious villa with modern amenities and spacious rooms.",
    location: "Trichy",
    info: {
      noOfBedRooms: 5,
      sqft: 4500,
      noOfBaths: 4,
    },
  },
];

const Listing = () => {
  return (
    <div className="my-8">
      <div className="flex flex-col items-center justify-center">
        <LargeText classname="font-extrabold text-[35px]">
          Lorem ipsum dolor sit amet
        </LargeText>
        <SmallText>
          we provide a complete service for the sale, purchase of rental of real
          estate
        </SmallText>
        <div className="w-full my-8">
          <Tabs
            tabHeaders={["Plot", "Residential", "Villa", "Commercial"]}
            data={propertyData}
          />
        </div>
      </div>
    </div>
  );
};

export default Listing;
