import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'
import { useState } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import { RiBarChartFill, RiLineChartLine, RiPieChartLine } from 'react-icons/ri'
import type { Chart, GroupButtonChart } from '../Interface'
import Styles from './ChartBox.module.scss'
import { optionsBarChart, optionsLineChart } from './OptionChart'

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const dataLine = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 2, 3, 4, 5, 6, 6, 10],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
    {
      label: 'Dataset 2',
      data: [1, 2, 3, 4, 5, 6, 6, 10],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    }
  ]
}

const buttonsChangeChart: Array<GroupButtonChart> = [
  {
    icon: <RiLineChartLine size={20} />,
    tooltip: '',
    name: 'line'
  },
  {
    icon: <RiBarChartFill size={20} />,
    tooltip: '',
    name: 'bar'
  },

  {
    icon: <RiPieChartLine size={20} />,
    tooltip: '',
    name: 'dou'
  }
]
function ChartBox(props: Chart): JSX.Element {
  const { size, type } = props
  const [currentType, setCurrentType] = useState(type)

  const renderChartByType = {
    line: (
      <Line
        options={optionsLineChart}
        data={dataLine}
        style={{ transform: `scale(${size})` }}
        className={Styles.chart}
      />
    ),
    bar: (
      <Bar
        options={optionsBarChart}
        data={dataLine}
        style={{ transform: `scale(${size})` }}
        className={Styles.chart}
      />
    ),
    dou: (
      <Pie
        options={optionsBarChart}
        data={dataLine}
        style={{ transform: `scale(${size * (3 / 5)})` }}
        className={Styles.chart}
      />
    )
  }

  // set type chart to render another chart
  const changeChart = (type: 'bar' | 'line' | 'dou') => {
    setCurrentType(type)
  }

  return (
    <div className={Styles.chartCart}>
      <div className={Styles.groupButtonChart}>
        {buttonsChangeChart.map((item) => (
          <div
            className={`${Styles.btnChange} ${currentType == item.name && Styles.active}`}
            key={item.name}
            onClick={() => changeChart(item.name)}
          >
            {item.icon}
          </div>
        ))}
      </div>
      <div className={Styles.titleChart}>
        <p>Name</p>
      </div>
      <div className={Styles.boxChart}>{renderChartByType[currentType]}</div>
    </div>
  )
}

export default ChartBox
