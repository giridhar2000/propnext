"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { SmallText } from "./Text";
import { PrimaryButton } from "./Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  propertyType: string[];
}

const PropertyForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    propertyType: [],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => {
        const updatedPropertyType = checked
          ? [...prevData.propertyType, value]
          : prevData.propertyType.filter((item) => item !== value);

        return {
          ...prevData,
          propertyType: updatedPropertyType,
        };
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full mx-auto p-6 flex-1">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <SmallText classname="block text-sm font-semibold mb-2">
            Name
          </SmallText>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 px-2 py-1 text-[#4A4947]"
          />
        </div>

        <div className="mb-4">
          <SmallText classname="block text-sm font-semibold mb-2">
            Email
          </SmallText>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b-2 bg-transparent border-gray-300 focus:outline-none focus:border-blue-500 px-2 py-1 text-[#4A4947]"
          />
        </div>

        <div className="mb-4">
          <SmallText classname="block text-sm font-semibold mb-2">
            Phone
          </SmallText>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 px-2 py-1 text-[#4A4947]"
          />
        </div>

        <div className="mb-4">
          <SmallText classname="block text-sm font-semibold mb-2">
            Property Type
          </SmallText>
          <div className="space-y-2 flex items-center justify-between">
            {["villa", "plot", "apartment", "commercial"].map((property) => (
              <div key={property} className="flex items-center">
                <input
                  type="checkbox"
                  id={property}
                  name="propertyType"
                  value={property}
                  checked={formData.propertyType.includes(property)}
                  onChange={handleChange}
                  className="mr-2 text-[#4A4947]"
                />
                <label htmlFor={property} className="text-sm text-black">
                  {property.charAt(0).toUpperCase() + property.slice(1)}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <PrimaryButton classname="w-full font-semibold py-2 rounded-md outline-none">
            Submit
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default PropertyForm;
