import React from 'react'
import { 
    LineChart, 
    ResponsiveContainer, 
    Legend, Tooltip, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid 
} from 'recharts';

const pdata = [ 
    { 
        name: 'march', 
        fuel: 99, 
        fees: 120 
    }, 
    { 
        name: 'april', 
        fuel: 15, 
        fees: 12 
    }, 
    { 
        name: 'may', 
        fuel: 5, 
        fees: 10 
    }, 
    { 
        name: 'june', 
        fuel: 10, 
        fees: 5 
    }, 
    { 
        name: 'july', 
        fuel: 9, 
        fees: 4 
    }, 
    { 
        name: 'aug', 
        fuel: 10, 
        fees: 8 
    }, 
]; 
const Graph = () => {

  return (
    <> 
    {/* <h1 className="text-heading"> 
        Fleet-Mangement Graph
    </h1>  */}
    <ResponsiveContainer width="100%" aspect={3}> 
        <LineChart data={pdata} margin={{ right: 300 }}> 
            <CartesianGrid /> 
            <XAxis dataKey="name" 
                interval={'preserveStartEnd'} /> 
            <YAxis></YAxis> 
            <Legend /> 
            <Tooltip /> 
            <Line dataKey="fuel"
                stroke="black" activeDot={{ r: 8 }} /> 
            <Line dataKey="service"
                stroke="red" activeDot={{ r: 8 }} /> 
        </LineChart> 
    </ResponsiveContainer> 
</> 
  )
}

export default Graph

