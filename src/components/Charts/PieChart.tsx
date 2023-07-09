import React, { useEffect, useRef } from 'react';
import Chart, { ChartTypeRegistry, ChartType } from 'chart.js/auto'

type Props = {
  labels: string[];
  data: number[];
  backgroundColor: string[]
}

const PieChart = ({ labels, data, backgroundColor }: Props) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          options: {
            normalized: true,
          },
          type: 'pie',
          data: {
            labels: labels,
            datasets: [
              {
                data: data,
                backgroundColor: backgroundColor,
              },
            ],
          },
        });
      }
    }
    return () => {
      chartRef.current = null;
    }
  }, []);

  return <canvas ref={chartRef} />;
};

export default PieChart;
