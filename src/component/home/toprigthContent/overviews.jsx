import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

Chart.register(Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const Overviews = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'view %',
        data: [],
        backgroundColor: '#69b0ac',
        hoverBackgroundColor: '#8fdab8',
        borderColor: '#fff',
      },
    ],
  });

  const [chartOption, setChartOption] = useState({
    plugins: {},
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
        ticks: {
          callback: (value) => {
            return 'K' + value.toLocaleString();
          },
        },
      },
    },
    layout: {},
    interaction: {
      intersect: false,
    },
    plugins: {
      title: {
        display: true,
        text: 'Photo Clicks',
      },
    },
  });

  useEffect(() => {
    setChartData({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'view %',
          data: [100, 35, 60, 100, 93, 23, 37, 87, 75, 10, 50, 88],
          backgroundColor: '#267DFF',
          hoverBackgroundColor: '#5693DC',
          borderColor: '#28354A',
        },
      ],
    });
  }, []);

  return (
    <section className=" w-[99%] max-sm:mt-3 md:w-[270px] m-1 bg-[#050C17] shadow-inset ring ring-offset-0 ring-indigo-300 ring-opacity-25 ring-offset-transparent ring-offset-inset sm:ring-offset-transparent sm:ring-offset-inset sm:ring-indigo-300 sm:ring-opacity-25 rounded-[10px]">
          <div className='p-3'>
          <p className='font-bold text-[23px]'>Visitors Overview</p>

        </div>
      <div>
        <Line data={chartData} options={chartOption} />
      </div>
    </section>
  );
};

export default Overviews;
