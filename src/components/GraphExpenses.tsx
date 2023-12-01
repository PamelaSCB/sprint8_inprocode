import { useSelector } from "react-redux";
import { Store } from "../redux/store";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function DataGraph(): JSX.Element {
  const graphExpenses = useSelector((state: Store) => state.graphExpenses);
  const myOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
    },
  };
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const expenses = [
    graphExpenses.monday,
    graphExpenses.tuesday,
    graphExpenses.wednesday,
    graphExpenses.thursday,
    graphExpenses.friday,
    graphExpenses.saturday,
    graphExpenses.sunday,
  ];
  const data = {
    labels,
    datasets: [
      {
        data: expenses,
        backgroundColor: "#ec765c",
        hoverBackgroundColor: "#75B5BE",
        borderRadius: 5,
      },
    ],
  };
  return (
    <div>
      <Bar options={myOptions} data={data} />
    </div>
  );
}

export default DataGraph;
