
'use client'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from 'keep-react'

export const BarChartComponent = () => {
  const chartData = [
    { month: '20', desktop: 500 },
    { month: '22', desktop: 350 },
    { month: '24', desktop: 4000 },
    { month: '26', desktop: 8500 },
    { month: '28', desktop:350 },
    { month: '30', desktop:8500 },
    { month: '02', desktop: 500 },
    { month: '04', desktop: 350 },
    { month: '06', desktop: 4000 },
    { month: '08', desktop: 8500 },
    { month: '10', desktop: 500 },
    { month: '12', desktop: 350 },
    { month: '14', desktop: 4000 },
    { month: '16', desktop: 8500 },
  ]

  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: '#1B4DFF',
    },
  } 
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px]">
        <div className='flex m-6 justify-between'>
        <p className='text-base font-Poppins font-bold'>Dashboard</p>
        <p>Advanced Report</p>
        </div>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <YAxis dataKey="desktop" tickLine={false} tickMargin={24} axisLine={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend verticalAlign="top" align="right" content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="#FF8901" radius={[100, 100, 0, 0]} barSize={10} />
      </BarChart>
    </ChartContainer>
  )
}
