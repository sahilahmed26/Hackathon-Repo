/* eslint-disable no-shadow */
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const RADIAN = Math.PI / 180;
const cx = 200;
const cy = 200;
const iR = 60;
const oR = 100;

const COLORS = {
  Positive: '#00C49F',
  Neutral: '#FFBB28',
  Negative: '#FF4C4C',
};

const needle = (value, data, cx, cy, iR, oR, color) => {
  const total = data.reduce((acc, curr) => acc + curr.value, 0);
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx;
  const y0 = cy;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle key="needle-center" cx={x0} cy={y0} r={r} fill={color} />,
    <path key="needle" d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} Z`} fill={color} />,
  ];
};

const getSentimentData = (data) => {
  const sentimentMap = { Positive: 0, Neutral: 0, Negative: 0 };
  data.forEach(item => {
    const sentiment = item.Sentiment || 'Neutral';
    sentimentMap[sentiment]++;
  });

  return Object.entries(sentimentMap).map(([key, value]) => ({
    name: key,
    value,
    color: COLORS[key],
  }));
};

const getNeedleValue = (data, sentiment) => {
  const match = data.find(d => d.name === sentiment);
  return match ? match.value : 0;
};

const PieChartWithNeedle = ({ data, needleSentiment = 'Negative' }) => {
  const sentimentData = getSentimentData(data);
  const needleValue = getNeedleValue(sentimentData, needleSentiment);

  return (
    <PieChart width={450} height={400}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={sentimentData}
        cx={cx}
        cy={cy}
        innerRadius={iR}
        outerRadius={oR}
        label={({ name }) => name}
      >
        {sentimentData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
      {needle(needleValue, sentimentData, cx, cy, iR, oR, '#222')}
    </PieChart>
  );
};

export default PieChartWithNeedle;
