import { useSelector } from "react-redux";
import { Store } from "../../redux/store";
import { useTranslation } from 'react-i18next';

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

interface DataGraphProps {}
const DataGraph: React.FC<DataGraphProps> = () => {
  
  const { t } = useTranslation();

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
    scales: {
      x: {
        ticks: { color: "#797070" },
      },
      y: {
       min:0,
       max:700
      },
    },
  };
  const days: string[]= ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  const traductorDays = days.map((day) => t(`main.week.${day}`));
  
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
    labels: traductorDays,
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
