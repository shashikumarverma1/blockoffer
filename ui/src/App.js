import React, { useState } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import data from './data.json'
import "./App.css";



defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

 const App = () => {

const [category , setCategory]=useState('Relevance') ;

  const [select , ]=useState([
    {
      label: "Relevance",
      data: data.map((data) => data.relevance),
      backgroundColor: "green",
      borderColor: "green",
    },
    
  
    {
      label: "Intensity",
      data: data.map((data) => data.intensity),
      backgroundColor: "#064FF1",
      borderColor: "#064FF1",
    },
    {
      label: "Likelihood",
      data: data.map((data) => data.likelihood),
      backgroundColor: "red",
      borderColor: "red",
    },
  
    {
      label: "Year",
      data: data.map((data) => data.intensity),
      backgroundColor: "aqua",
      borderColor: "aqua",
    },
    {
      label: "Country",
      data: data.map((data) => data.country),
      backgroundColor: "pink",
      borderColor: "pink",
    },
    {
      label: "Topics",
      data: data.map((data) => data.topic),
      backgroundColor: "orange",
      borderColor: "orange",
    },
    {
      label: "Region",
      data: data.map((data) => data.region),
      backgroundColor: "#ACE555",
      borderColor: "#ACE555",
    },
    {
      label: "City ",
      data: data.map((data) => data.intensity),
      backgroundColor: "grey",
      borderColor: "grey",
    },
   
  ])

  return (
    <div className="App">
      <div  style={{height:500}}>
        <Line
          data={{
            labels: new Array(40).fill(1).map((data , index) => index),
            datasets: [
              select.filter((e)=>e.label === category)[0]
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: category,
              },
            },
          }}
        />
      </div>

      {/* <div  style={{height:600}}>
        <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Revenue Source",
              },
            },
          }}
        />
      </div> */}

<h1 className="selectText"> Select variables to be visualized</h1>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="select"
            >
              {select.map((option) => (
                <option key={option} value={option.label} className="optionText">
                  {option.label}
                  
                </option>
              ))}
            </select>
    
    </div>
  );
};

export default App