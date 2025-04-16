import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const BarChartComponent = ({ data }) =>{

    console.log("BarChart Data", data[0].model)

    return (
        <div className="bg-[#14294d] p-4 rounded-lg">
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#555" />
        <XAxis dataKey="model" stroke="#ccc" />
        <YAxis domain={[0, 100]} stroke="#ccc" />
        <Tooltip />
        <Bar dataKey="value" fill="#38bdf8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
    )
}

export default BarChartComponent;
