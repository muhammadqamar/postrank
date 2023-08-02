/* eslint-disable prettier/prettier */
import React, { ReactNode } from "react";

interface IndexProps {
  label: string;
  placeholder: string;
  EyeIcon?: ReactNode;
}

const Index: React.FC<IndexProps> = ({ label, placeholder, EyeIcon }) => {
  return (
    <div className="relative">
      <label className="block text-xs font-normal text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          type="email"
          name="email"
          placeholder={placeholder}
          className="max-w-xs w-full border border-solid rounded-[7px] focus-visible:outline-1 focus-visible:outline focus-visible:outline-blue-500 py-[10px] px-3 pr-9" // Added pr-10 for padding on the right to accommodate the icon
          style={{
            backgroundImage: `url(${EyeIcon})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 12px center",
            backgroundSize: "20px 20px",
          }} // Adjust backgroundPosition and backgroundSize as needed
        />
      </div>
    </div>
  );
};

export default Index;
