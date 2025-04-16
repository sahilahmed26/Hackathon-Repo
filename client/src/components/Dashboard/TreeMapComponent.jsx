import React from "react";
import { Treemap, Tooltip, ResponsiveContainer } from "recharts";

const TreeMapComponent = ({ data }) => (
  <div className="bg-[#14294d] p-4 rounded-lg">
    <ResponsiveContainer width="100%" height={250}>
      <Treemap
        data={data}
        dataKey="value"
        stroke="#fff"
        fill="#3b82f6"
        content={<CustomTreeContent />}
      >
        <Tooltip />
      </Treemap>
    </ResponsiveContainer>
  </div>
);

const CustomTreeContent = ({ x, y, width, height, name, value }) => {
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill="#2563eb" />
      {width > 60 && height > 20 && (
        <text x={x + 4} y={y + 18} fill="#fff" fontSize="12">
          {name} ({value})
        </text>
      )}
    </g>
  );
};

export default TreeMapComponent;
