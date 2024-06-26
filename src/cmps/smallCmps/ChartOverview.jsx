import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



export function ChartOverview() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                // position: 'top' as const,
            },
            title: {
                // display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Sales',
                data: labels.map(() => faker.datatype.number({ min: 500, max: 1000 })),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'New Orders',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Completed',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
            },
        ],
    };

    return (<section className='chart-container'>
        <span className='title'>Overview</span>
        <div className='chart'>
            < Bar options = { options } data = { data } />
        </div>

    </section>)

        
}
