import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import React from "react";
ChartJS.register(ArcElement, Tooltip);
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};
const labels = [
  "Comedy",
  "Fantasy",
  "Family",
  "Fiction",
  "Romance",
  "Family Story",
  "History",
];
const CategoriesData = {
  labels: labels,
  datasets: [
    {
      label: "Categories (14)",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
    },
  ],
};

const options = { maintainAspectRatio: true };
export const Categoryoptions = {
  indexAxis: "y" as const,
  maintainAspectRatio: true,
};
export default function Dashboard() {
  return (
    <section className="w-full  px-12">
      <div className="flex justify-start">
        <div className="stat w-1/3">
          <div className="flex gap-6 items-center ">
            <div className="bg-yellow-200 w-8 aspect-square rounded-full"></div>
            <p>Total income</p>
          </div>
          <div className="stat-value text-lg">3142.37$</div>
        </div>

        <div className="stat w-1/3">
          <div className="flex gap-6 items-center">
            <div className="bg-blue-200 w-8 aspect-square rounded-full"></div>
            <p>Total Orders</p>
          </div>
          <div className="stat-value text-lg">56</div>
        </div>

        <div className="stat w-1/3 ">
          <div className="flex gap-6 items-center">
            <div className="bg-orange-200 w-8 aspect-square rounded-full"></div>
            <p>Total Stock</p>
          </div>
          <div className="stat-value text-lg">4115</div>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="stat w-1/3">
          <div className="flex gap-6 items-center">
            <div className="bg-red-200 w-8 aspect-square rounded-full"></div>
            <p>Total Reviews</p>
          </div>
          <div className="stat-value text-lg">44</div>
        </div>

        <div className="stat w-1/3">
          <div className="flex gap-6 items-center">
            <div className="bg-green-200 w-8 aspect-square rounded-full"></div>
            <p>Successful Orders</p>
          </div>
          <div className="stat-value text-lg">12</div>
        </div>

        <div className="stat w-1/3">
          <div className="flex gap-6 items-center">
            <div className="bg-purple-200 w-8 aspect-square rounded-full"></div>
            <p>Average Rating</p>
          </div>
          <div className="stat-value text-lg">3.77</div>
        </div>
      </div>
      <div className="flex w-full flex-wrap">
        <div className="w-1/3 grid gap-4">
          <p className="text-lg font-bold">Authors (11)</p>
          <Pie data={data} options={options} />
        </div>
        <div className="w-2/3 grid gap-4">
          <p className="text-lg font-bold">Categories (14)</p>
          <Bar data={CategoriesData} options={Categoryoptions} />
        </div>
      </div>
    </section>
  );
}
