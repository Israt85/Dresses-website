'use client'
import { Pie, PieChart, Sector, Tooltip, Legend } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from 'keep-react'

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
    <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px]">
      <p className="flex justify-between">
        <p className="text-base font-Poppins my-6">Revenue by device</p>
        <p className="text-sm flex gap-1 items-center">
          More
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.58545 8.38949H12.2394M12.2394 8.38949L7.91244 4.0625M12.2394 8.38949L7.91244 12.7165"
              stroke="#8E95A9"
              strokeWidth="1.85443"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
      </p>
      <PieChart>
        {/* Tooltip from recharts */}
        <Tooltip
          contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #ddd' }}
          formatter={(value, name) => [`${value} visitors`, `Device: ${name}`]}
        />
        <Legend
  layout="horizontal" 
  align="center" 
  verticalAlign="bottom" 
  iconType="circle"
  wrapperStyle={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, auto)', 
    gap: '10px', 
    justifyContent: 'center', 
  }}
/>


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
