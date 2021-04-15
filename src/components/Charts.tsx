import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

interface ChartProps {
  xAxisData: string[],
  yAxisData: number[]
  color: string,
}

const Charts = ({ xAxisData, yAxisData, color }: ChartProps) => {
  const chartConfig: ApexOptions = {
    chart: {
      toolbar: {
        show: false
      },
      animations: {
        enabled: true,
        easing: "linear",
        speed: 200,
        animateGradually: {
            enabled: true,
            delay: 50
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
      },
      fontFamily: 'Montserrat',
      foreColor: '#aaaaaa',
    },
    grid: {
      show: true,
      borderColor: '#363636',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
          lines: {
              show: false
          }
      },    
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      categories: xAxisData,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    fill: {
      colors: [color],
      opacity: 0.8,
    },
    yaxis: {
      show: true,
      labels: {
        show: true,
        style: {
          fontSize: '0.5rem',
          // fontWeight: 700,
        }
      }
    },  
  }

  return (
    <Chart 
    options={chartConfig}
    series={[{
      data: yAxisData
    }]}
    type='bar'
    height="100%"
    />
  )
}

export default Charts
