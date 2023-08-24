
import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import User from "./reChart/user";


const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function AdminHome() {

    const users = useLoaderData()
    console.log(users);
   

    
  return (
          <div className="w-full bg-zinc-200 h-full"> 
                      <div>
                      <p className="text-center fontPrimary text-3xl text-red-500 mb-3 mt-4">Product overview</p>
              <AreaChart
      width={1000}
      height={400}
      data={users}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="price"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="seller"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="ratings"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
                      </div> 
                      <hr  className="divider w-11/12 mx-auto"/>
                      <p className="text-start ms-32 fontPrimary text-3xl text-red-500 mt-20">Sell overview</p> 
                       <div className="flex items-start ">
                      
                             <div>
                                <User/>
                             </div> 
                              
                              <div>
                                
                              </div>
                       </div>
          </div>
  );
}
