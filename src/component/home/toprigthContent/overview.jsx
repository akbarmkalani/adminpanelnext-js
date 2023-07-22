


import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as Chartjs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

Chartjs.register(CategoryScale, LinearScale, BarElement, Title,  Legend);

const Overview = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'view %',
        data: [],
        backgroundColor: '#69b0ac',
        hoverBackgroundColor: '#8fdab8',
        borderColor: '#fff',
      }
    ]
  });

  const [chartOption, setChartOption] = useState({
    plugins: {
    
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: true
        },
        ticks: {
          callback: (value) => {
            return "%" + value.toLocaleString();
          }
        }
      }
    },
    layout: {
    
    },
    interaction: {
      intersect: false
    },
    plugins: {
      title: {
        display: true,
        text: "Campaign",
     
      }
    }
  });

  useEffect(() => {
    setChartData({
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
            label: 'view %',
          data: [100, 35, 60, 100, 93, 23,  37, 87, 75, 10, 50, 88],
          backgroundColor: '#267DFF',
          hoverBackgroundColor: '#5693DC',
          borderColor: '#28354A',
        }
      ]
    });
  }, []);
  return (
    <section className="w-[99%] md:w-[270px] m-1 bg-[#050C17] shadow-inset ring ring-offset-0 ring-indigo-300 ring-opacity-25 ring-offset-transparent ring-offset-inset sm:ring-offset-transparent sm:ring-offset-inset sm:ring-indigo-300 sm:ring-opacity-25 rounded-[10px]">
         <div className='p-3'>
                <p className='font-bold text-[23px]'>Visitors Overview</p>
                <span className='text-[#344258] font-semibold'>Aug 25- Sep 25 <svg width="20" height="20" class="inline-block" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.91895 10.337L9.69134 13.1959C9.86896 13.3791 10.1311 13.3791 10.3087 13.1959L15.6668 7.67055C16.0011 7.32577 15.7984 6.66666 15.3581 6.66666H10.5893L6.91895 10.337Z" fill="currentColor"></path>
                    <path opacity="0.5" d="M9.41073 6.66666H4.64191C4.20156 6.66666 3.9989 7.32577 4.33324 7.67055L6.33873 9.73866L9.41073 6.66666Z" fill="currentColor"></path>
                </svg>
                </span>
            
            </div>
      <div>
      <Bar data={chartData} options={chartOption} />
      </div>
    </section>
  );
};

export default Overview;
