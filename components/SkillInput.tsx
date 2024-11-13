import React from "react";

interface Props {
    title: string;
 }

const SKillInput = ({ title }: Props) => {
  return (
    <p className="border border-blue-800 px-6 py-2 text-lg tracking-wide bg-transparent text-gray-400 hover:text-white hover:border-blue-600 hober:bg-black rounded-lg">
      {" "}
      {title}{" "}
    </p>
  );
};

export default SKillInput;
