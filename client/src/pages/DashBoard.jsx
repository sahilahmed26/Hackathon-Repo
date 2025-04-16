import React, { useState } from 'react'
import MetricCard from '../components/Dashboard/MetricCard'
import BarChartComponent from '../components/Dashboard/BarChartComponent'
import TreeMapComponent from '../components/Dashboard/TreeMapComponent'
import { accuracyData, metrics, predictedCategories, trainingCategories } from '../data/dummyData'
import ModelSelector from '../components/Dashboard/ModelSelector'

export const DashBoard = () => {

    const [selectedModel, setSelectedModel] = useState("All");

    const models = [...new Set(accuracyData.map((item) => item.model))];
  
    const filteredData =
      selectedModel === "All"
        ? accuracyData
        : accuracyData.filter((d) => d.model === selectedModel);
  
    return (
      <div className="p-6 bg-[#0c1c3a] text-white min-h-screen font-sans">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Customer ticket classification model results
        </h1>
  
        <div className="grid grid-cols-3 gap-4 mb-6">
          <MetricCard title="Total Samples (CSR evaluated)" value={metrics.totalSamples} />
          <MetricCard title="CSRs used to train ML model (80% of total)" value={metrics.trainSamples} />
          <MetricCard title="CSRs used to test ML model (20% of total)" value={metrics.testSamples} />
        </div>

        <div className='flex justify-start' >
        <ModelSelector
          models={models}
          selectedModel={selectedModel}
          onChange={setSelectedModel}
        />
        </div>
  
        
  
      
  
        <div className="grid grid-cols-2 gap-6 mt-10">
          <div>
            <h2 className="text-lg font-medium mb-2">Training Category count by CategoryName</h2>
            <TreeMapComponent data={trainingCategories} />
          </div>
          <div>
            <h2 className="text-lg font-medium mb-2">Predicted Category count by CategoryName</h2>
            <TreeMapComponent data={predictedCategories} />
          </div>
        </div>

        <h2 className="text-xl font-semibold text-white mt-2 mb-3">
          Values by Model applied and Attribute (Accuracy)
        </h2>
        <BarChartComponent data={filteredData} />
      </div>
    );
}
