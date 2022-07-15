const optionsBarChart = {
  responsive: true,
  plugins: {
    legend: {
      position: 'left' as const
    },
    labels: {
      fontSize: window.innerWidth > 350 ? 20 : 10
    },
    title: {
      position: 'left' as const,
      display: false,
      text: 'Chart.js Bar Chart'
    }
  }
}

const optionsAreaChart = {
  responsive: true,
  plugins: {
    legend: {
      position: 'left' as const
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart'
    }
  }
}

const optionsLineChart = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    }
  }
}
export { optionsBarChart, optionsAreaChart, optionsLineChart }
