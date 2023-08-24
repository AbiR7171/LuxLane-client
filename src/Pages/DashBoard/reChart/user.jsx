
import React, { useEffect, useState } from "react";
import { PieChart, Pie } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 }
];

export default function User() {

    const[user, setUser]=useState()
    useEffect(()=>{
        fetch("http://localhost:5000/cart")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setUser(data)
        })
   },[])


      

  return (
    <PieChart width={700} height={800}>
      <Pie
        dataKey="totalPrice"
        startAngle={180}
        endAngle={0}
        data={user}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
    </PieChart>
  );
}
