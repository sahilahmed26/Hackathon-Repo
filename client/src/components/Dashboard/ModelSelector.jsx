import React from "react";

const ModelSelector = ({ models, selectedModel, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="model-select" className="block mb-1 text-sm font-medium text-gray-300 text-left">
        Filter by Model
      </label>
      <select
        id="model-select"
        value={selectedModel}
        onChange={(e) => onChange(e.target.value)}
        className="bg-[#14294d] text-white border border-gray-600 p-2 px-8 rounded"
      >
        <option value="All">All</option>
        {models.map((model) => (
          <option key={model} value={model}>
            {model}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ModelSelector;
