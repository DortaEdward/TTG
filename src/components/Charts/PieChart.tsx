import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'

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
            responsive: true,
            resizeDelay:200,
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
  }, [backgroundColor, data, labels]);

  return <div className='w-[350px] sm:w-[500px]'>
    <canvas ref={chartRef} />
  </div>
};

export default PieChart;
