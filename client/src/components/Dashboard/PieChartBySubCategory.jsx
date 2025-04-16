import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28FD0', '#FF6699'];

const getCategoryData = (data) => {
  const map = {};
  data.forEach(item => {
    const cat = item.Subcategory || 'Uncategorized';
    map[cat] = (map[cat] || 0) + 1;
  });

  return Object.entries(map).map(([key, value]) => ({
    name: key,
    value,
  }));
};

const PieChartBySubCategory = ({ data }) => {
  const chartData = getCategoryData(data);

  return (
    <PieChart width={450} height={400}>
      <Pie
        dataKey="value"
        data={chartData}
        cx="50%"
        cy="50%"
        outerRadius={120}
        label
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartBySubCategory;
