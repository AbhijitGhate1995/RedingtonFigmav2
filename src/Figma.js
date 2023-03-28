import React,{useState} from "react";

import ReactECharts from 'echarts-for-react';



export default function RedingtonFigma(){
  const PieChartdemo1 = {
    tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
    },
    series: [
        {
          type: 'pie',
          radius: ['30', '35%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'center'
        },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
        },
          labelLine: {
            show: false
        },
          data: [
            { value: 38},
            { value: 62 },
     
        ]
        }
    ]

  };
    const BarLineChart1 = {
        tile :{
            Text  : 'Revenue Trend'
        },
        xAxis : {
            type : 'category',
            data:['FY 19-20','FY 20-21', 'FY 21-22', 'FY 22-23']
        },
        yAxis : {
            type : 'value'
        },
        series: [
            {
                name : 'Revenue',
                data : [2900,3800,3300,2100],
                type : 'bar',
                backgroundColor : ['var(--green-900)']
            
            },
            {
                name : 'Trend Line',
                data : [2200,3100,2600,3200],
                type : 'line',
            }
        ] 

    }

    return(
        <div className=" flex mt-4">
            <div className="flex flex-col w-6/12  border-2 rounded-md border-gray-400 m-4 bg-slate-100">
                <div className=" flex flex-row justify-between">
                  <div className="h-1/6  font-bold ml-2">Revenue</div>
                  <div className="font-bold mr-2">:</div>
                </div>
                <div className=" flex flex-row h-3/12 gap-2 m-4" >
                    <div className="w-4/12 border-slate-900 border-2 rounded-md ">
                        <div className=" text-sm ml-2"> Gross Sale </div>
                        <div className="text-xl ml-2 flex flex-row"> ₹ 199 Cr 
                        <span className="text-red-500 text-xs ml-2 mt-1"> ▼ 4%</span></div>
                    </div>
                    <div className="w-4/12 border-slate-900 border-2 rounded-md">
                        <div className="ml-2 text-sm"> Revenue </div>
                        <div className="text-xl ml-2 flex flex-row"> ₹ 197 Cr 
                          <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 4%</span>
                        </div>
                    </div>
                    <div className="w-4/12 border-slate-900 border-2 rounded-md">
                        <div className=" ml-2 text-sm"> Revenue/Group </div>
                        <div className="text-xl ml-2 flex flex-row"> ₹ 33 Cr 
                         <span className="text-green-500 text-xs ml-2 content-end mt-1"> ▲ 4%</span>
                        </div>
                    </div>
                </div>
              
                        <div className="text-xl ">Target vs. Actual <span className="text-green-500 border"> ▲ 2%</span>                        
                   
                         <ReactECharts  option ={PieChartdemo1}></ReactECharts> </div>
                                  
  
                        
                </div>
            <div className="flex flex-col w-6/12 h-72 m-4 border-2 rounded-md border-gray-400 bg-slate-100">
               <div className=" flex flex-row justify-between">
                  <div className="h-1/6  font-bold ml-2">Margin</div>
                  <div className="font-bold mr-2">:</div>
                </div>
                <div className=" flex flex-row h-3/12 gap-2 m-4" >
                    <div className="w-4/12 border-slate-900 border-2 rounded-md ">
                        <div className=" text-sm ml-2"> GM before Provision </div>
                        <div className="text-xl ml-2 flex flex-row"> ₹ 45 Cr 
                        <span className="text-green-500 text-xs ml-2 mt-1">  ▲ 4%</span></div>
                    </div>
                    <div className="w-4/12 border-slate-900 border-2 rounded-md">
                        <div className="ml-2 text-sm"> GM after Provision </div>
                        <div className="text-xl ml-2 flex flex-row"> ₹ 50 Cr 
                          <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 4%</span>
                        </div>
                    </div>
                    <div className="w-4/12 border-slate-900 border-2 rounded-md">
                        <div className=" ml-2 text-sm"> GM % </div>
                        <div className="text-xl ml-2 flex flex-row"> 4 % 
                         <span className="text-green-500 text-xs ml-2 content-end mt-1"> ▲ 4%</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                        <div className="text-xl  flex flex-row">Target vs. Actual <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 2%</span> </div>
                         
                                          
                </div>
            </div>            
        </div>
    )
}
