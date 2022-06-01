import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

/* eslint-disable-next-line */
export interface ChartProps {
  type:string;
}

export function Chart(props: ChartProps) {
  if(props.type == "Bar")
  {
    const data = {
      labels: [
        "Apples",
        "Pears",
        "Oranges",
        "Grapes"
      ],
      datasets:[
        {
          label:"Week1",
          borderRadius:5,
          data:[1,5,7,2],
          backgroundColor: [
            "rgba(255,50,50,0.5)",
            "rgba(50,255,50,0.5)",
            "rgba(255,156,43,0.5)",
            "rgba(107,53,255,0.5)",
          ],
          borderColor: [
            'rgb(255, 0, 0,1)',
            'rgb(0, 255, 0,1)',
            'rgb(255, 137, 0,1)',
            'rgb(102, 0, 255,1)'
          ],
          barThickness:50,
          borderWidth: 1
        },{
          label:"Week2",
          borderRadius:5,
          data:[3,2,9,0],
          backgroundColor: [
            "rgba(255,50,50,0.5)",
            "rgba(50,255,50,0.5)",
            "rgba(255,156,43,0.5)",
            "rgba(107,53,255,0.5)",
          ],
          borderColor: [
            'rgb(255, 0, 0,1)',
            'rgb(0, 255, 0,1)',
            'rgb(255, 137, 0,1)',
            'rgb(102, 0, 255,1)'
          ],
          barThickness:50,
          borderWidth: 1
        },{
          label:"Week3",
          borderRadius:5,
          data:[7,2,4,5],
          backgroundColor: [
            "rgba(255,50,50,0.5)",
            "rgba(50,255,50,0.5)",
            "rgba(255,156,43,0.5)",
            "rgba(107,53,255,0.5)",
          ],
          borderColor: [
            'rgb(255, 0, 0,1)',
            'rgb(0, 255, 0,1)',
            'rgb(255, 137, 0,1)',
            'rgb(102, 0, 255,1)'
          ],
          barThickness:50,
          borderWidth: 1
        },{
          label:"Week4",
          borderRadius:5,
          data:[1,8,3,3],
          backgroundColor: [
            "rgba(255,50,50,0.5)",
            "rgba(50,255,50,0.5)",
            "rgba(255,156,43,0.5)",
            "rgba(107,53,255,0.5)",
          ],
          borderColor: [
            'rgb(255, 0, 0,1)',
            'rgb(0, 255, 0,1)',
            'rgb(255, 137, 0,1)',
            'rgb(102, 0, 255,1)'
          ],
          barThickness:50,
          borderWidth: 1
        }
      ]
    }

    return (
      <div>
        <Bar data={data}></Bar>
      </div>
    );
  }
  else
  {
    return (
      <div>
        <h1>Welcome to Chart!</h1>
        {props.type};
      </div>
    );
  }
}

export default Chart;