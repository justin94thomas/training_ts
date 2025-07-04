
import React from 'react';
import ReactECharts from 'echarts-for-react';
import { EChartsOption } from 'echarts';

interface CustomChartProps {
  option: EChartsOption;
  height?: string;
  width?: string;
}

const ECharts: React.FC<CustomChartProps> = ({ option, height = '400px', width = '100%' }) => {
  return <ReactECharts option={option} style={{ height, width }} />;
};

export default ECharts;
