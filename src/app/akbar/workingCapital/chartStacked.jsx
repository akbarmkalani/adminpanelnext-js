"use client";
import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const data = {
    labels: ['Jan 10', 'Jan 11', 'Jan 12', 'Jan 13', 'Jan 14', 'Jan 15'],
    datasets: [
      {
        label: 'Income',
        data: [1, 12, 5, 75, 9, 10, 15, 18, 19],
        fill: false,
        borderColor: '#00D085',
        tension: 0.1,
        yAxisID: 'income',
      },
      {
        label: 'Expenses',
        data: [1, 45, 5, 7, 91, 89, 15, 100, 100],
        fill: false,
        borderColor: '#267DFF',
        tension: 0.1,
        yAxisID: 'expenses',
      },
    ],
  };

  const options = {
    scales: {
      income: {
        position: 'left',
        beginAtZero: true,
        title: {
          display: true,
          text: 'Income ($)',
          color: 'white', // Set title text color to white
          font: {
            weight: 'bold', // Set title font weight to bold
          },
        },
        ticks: {
          stepSize: 20,
          callback: function (value) {
            return 'K' + value;
          },
          color: 'white', // Set tick text color to white
          font: {
            weight: 'bold', // Set tick font weight to bold
          },
        },
      },
      expenses: {
        position: 'right',
        beginAtZero: true,
        title: {
          display: true,
          text: 'Expenses ($)',
          color: 'white', // Set title text color to white
          font: {
            weight: 'bold', // Set title font weight to bold
          },
        },
        ticks: {
          stepSize: 20,
          callback: function (value) {
            return 'K' + value;
          },
          color: 'white', // Set tick text color to white
          font: {
            weight: 'bold', // Set tick font weight to bold
          },
        },
      },
      x: {
        title: {
          display: true,
          text: 'Date',
          color: 'white', // Set title text color to white
          font: {
            weight: 'bold', // Set title font weight to bold
          },
        },
        ticks: {
          maxRotation: 90,
          minRotation: 90,
          color: 'white', // Set tick text color to white
          font: {
            weight: 'bold', // Set tick font weight to bold
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white', // Set legend label text color to white
          font: {
            weight: 'bold', // Set legend label font weight to bold
          },
        },
      },
      title: {
        display: true,
        text: 'Income and Expenses',
        color: 'white', // Set chart title text color to white
        font: {
          weight: 'bold', // Set chart title font weight to bold
        },
      },
    },
    responsive: true,
  };

  return (
    <div style={{ color: 'white', fontWeight: 'bold' }}>
      <h2 className='p-4'>Income and Expenses</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
