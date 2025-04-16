import React from "react";

const MetricCard = ({ title, value }) => (
  <div className="bg-[#14294d] rounded-lg shadow-md p-4 text-center">
    <h2 className="text-sm font-medium text-gray-300">{title}</h2>
    <p className="text-2xl font-bold text-blue-400 mt-2">{value}</p>
  </div>
);

export default MetricCard;
