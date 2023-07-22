"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';

export function GroupedBarChart() {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      
      {
        color: 'white',
        label: 'Expenses',
        data: [10, 12, 8, 15, 12, 13, 9, 11],
        backgroundColor: '#464474',
      },
      {
        label: 'Income',
     
        data: [5, 9, 6, 11, 8, 7, 10, 14],
        backgroundColor: '#7B6AFE',
      },
    ],
  };

  const options = {
    responsive: true,
    indexAxis: 'x',
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white', // Change legend text color to white
        },
      },
      title: {
        display: true,
        text: 'Project vs Action',
        color: 'white', // Change the chart title text color to white
      },
    },
    scales: {
      x: {
        ticks: {
        
          color: 'white',
          font: {
            weight: 'bold', // Set title font weight to bold
          }, // Change x-axis tick color to white
        },
      },
      y: {
        ticks: {
          color: 'white', // Change y-axis tick color to white
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 10,
        backgroundColor: 'white', // Change bar background color to white
        // Change bar border color to white
        borderWidth: 1,
      },
    },
  };
  
  

  return <Bar data={data} options={options} />;
}

export default GroupedBarChart;
