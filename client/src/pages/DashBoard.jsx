import React, { useState } from "react";
import MetricCard from "../components/Dashboard/MetricCard";
import BarChartComponent from "../components/Dashboard/BarChartComponent";
import TreeMapComponent from "../components/Dashboard/TreeMapComponent";
import {
  accuracyData,
  FinalData,
  finalMetrices,
  finalModelAccuracy,
  metrics,
  predictedCategories,
  trainingCategories,
} from "../data/dummyData";
import ModelSelector from "../components/Dashboard/ModelSelector";
import PieChartWithNeedle from "../components/Dashboard/PieChartWithNeedle";
import { useNavigate } from "react-router";
import PieChartByCategory from "../components/Dashboard/PieChartByCategory";
import PieChartBySubCategory from "../components/Dashboard/PieChartBySubCategory";

export const DashBoard = () => {
  const [selectedModel, setSelectedModel] = useState("All");
  const navigate = useNavigate();

  const models = [
    ...new Set(
      finalModelAccuracy
        .filter((item) => item && item.model)
        .map((item) => item.model)
    ),
  ];

  const filteredData =
    selectedModel === "All"
      ? finalModelAccuracy
      : finalModelAccuracy.filter((d) => d.model === selectedModel);

  return (
    <div className="p-6 bg-[#0c1c3a] text-white min-h-screen">
      <h1 className="text-md font-semibold mb-6 text-center">
        Data-Driven Product Management
      </h1>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div
          onClick={() => {
            navigate("/tickets");
          }}
        >
          <MetricCard
            title="Total Available Tickets"
            value={finalMetrices.totalTicket}
          />
        </div>

        <MetricCard
          title="Taxonomy Classification Categories"
          value={finalMetrices.totalTaxonomy}
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mt-10">
        <div className="mt-2">
          <h2 className="text-xl font-semibold mb-4">SubCategory Distribution</h2>
          <PieChartBySubCategory data={FinalData} />
        </div>

        <div className="mt-2">
            <h3 className="text-lg font-semibold mb-2">
              Category Breakdown
            </h3>
            <PieChartByCategory data={FinalData} />
          </div>

          <div className="mt-10 ">
            <h2 className="text-xl font-semibold mb-4">
              Sentiment Distribution
            </h2>
            <PieChartWithNeedle data={FinalData} />
          </div>
        {/* <div className="flex items-center justify-center flex-col">
         
        </div> */}
        {/* <div>
          <h2 className="text-lg font-medium mb-2">
            Predicted Category count by CategoryName
          </h2>
          <TreeMapComponent data={predictedCategories} />
        </div> */}
      </div>

      <div className="flex justify-end">
        <ModelSelector
          models={models}
          selectedModel={selectedModel}
          onChange={setSelectedModel}
        />
      </div>

      <h2 className="text-xl font-semibold text-white mt-2 mb-3">
        Values by Model applied and Attribute (Accuracy)
      </h2>
      <BarChartComponent data={filteredData} />
    </div>
  );
};
