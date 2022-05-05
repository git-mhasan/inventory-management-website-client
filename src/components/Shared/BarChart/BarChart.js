import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



// const labels = ['January', 'February', 'March'];



const BarChart = ({ products }) => {
    const labels = products.map(product => product.name);


    const data = {
        labels,
        datasets: [
            {
                label: 'Stock',
                data: products.map(product => product.quantity),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                xAxisID: "Products"
            },
            {
                label: 'Sold',
                data: products.map(product => product.sold),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                xAxisID: "Products"
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Total Quantity-Sale',

            },
            // scales: {
            //     xAxis: [
            //         {
            //             id: 'Products'
            //         }
            //     ]
            // }

        },
    };

    return (
        <div>
            <Bar options={options} data={data} />;
        </div>
    );
};

export default BarChart;