'use client'
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const DoughNutChart = ({accounts}: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Total Balance',
                data: [1200, 2000, 3000],
                backgroundColor: ['#007bff', '#6f42c1', '#dc3545'],
            }
        ],
        labels: ['Checking', 'Savings', 'Investments'],
    }
  return (
    <Doughnut
     data={data}
     options={
        {
            cutout: '60%',
            plugins: {
                legend: {
                    display: false,
                }
            }
        }
     }
     />
  )
}

export default DoughNutChart
