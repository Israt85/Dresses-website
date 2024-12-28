'use client'
import { Pie, PieChart, Sector } from 'recharts'
import {  ChartContainer, ChartTooltip, ChartTooltipContent } from 'keep-react'

export const PieChartComponent = () => {
  const chartData = [
    { browser: 'unknown', visitors: 830.03, fill: '#FF392B' },
    { browser: 'Mobile', visitors: 755.5, fill: '#00C3F8' },
    { browser: 'Tablet', visitors: 550.51, fill: '#2F80ED' },
    { browser: 'Desktop', visitors: 1500, fill: '#FF8901' },
  
  ]

  const chartConfig = {

    visitors: {
      label: 'Visitors',
    },
    chrome: {
      label: 'Chrome',
      color: '#3CAAFA',
    },
    safari: {
      label: 'Safari',
      color: '#9631F5',
    },
    firefox: {
      label: 'Firefox',
      color: '#38D6EF',
    },
    edge: {
      label: 'Edge',
      color: '#D638EE',
    },
    other: {
      label: 'Other',
      color: '#afbaca',
    },
  }

  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
        <p>
            <p className='text-base font-Poppins my-6'>Revenue by device</p>

        </p>
      <PieChart>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Pie
          data={chartData}
          dataKey="visitors"
          nameKey="browser"
          innerRadius={60}
          strokeWidth={5}
          activeIndex={0}
          activeShape={(props) => {
            const { outerRadius, ...rest } = props;
            return <Sector {...rest} outerRadius={(outerRadius || 0) + 10} />;
          }}
          
        />
      </PieChart>
    </ChartContainer>
  )
}
