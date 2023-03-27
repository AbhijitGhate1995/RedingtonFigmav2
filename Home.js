import React from 'react'
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/dist/echarts.js';
export default function Home() {
    const Circle = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center',
            show: false
        },
        series: [
            {
                type: 'pie',
                radius: ['50', '50%'],
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'center',
                    itemStyle: {
                        color: "black"
                    }
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: true
                },
                data: [
                    { value: 40, name: "38%", itemStyle: { color: '#E73369' } },
                    { value: 60, itemStyle: { color: '#E4E7EC' }, },

                ]
            }
        ]
    };
    const Bar = {

        tile: {
            Text: 'Revenue Trend'
        },
        legend: {
            top: '1%',
            left: 'right',
            show: true
        },
        xAxis: {
            type: 'category',
            data: ['FY 19-20', 'FY 20-21', 'FY 21-22', 'FY 22-23']
        },

        yAxis: {
            type: 'value'
        },
        grid: {
            left: "50",
            top: "40",
            bottom: "8"
        },

        series: [

            {
                itemStyle: { normal: { color: '#526652' } },
                name: 'Revenue',
                data: [2900, 4000, 3300, 3000],
                type: 'bar',

            },
            {
                itemStyle: { normal: { color: '#FDB022' } },
                name: 'Trend Line',
                data: [2200, 3100, 2600, 3200],
                type: 'line',
            }
        ]

    };
    const Circle2 = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center',
            show: false
        },
        series: [
            {
                type: 'pie',
                radius: ['50', '50%'],
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'center',
                    itemStyle: {
                        color: "black"
                    }
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: true
                },
                data: [
                    { value: 52, name: "52%", itemStyle: { color: '#B9B062' } },
                    { value: 48, itemStyle: { color: '#E4E7EC' }, },

                ]
            }
        ]

    };
    const Bar2 = {

        tile: {
            Text: 'Margin Trend'
        },
        legend: {
            top: '1%',
            left: 'right',
            fontSize: '1px',
            show: true
        },
        xAxis: {
            type: 'category',
            data: ['FY 19-20', 'FY 20-21', 'FY 21-22', 'FY 22-23']
        },

        yAxis: {
            type: 'value'
        },
        grid: {
            left: "50",
            top: "20",
            bottom: "8"
        },

        series: [

            {
                itemStyle: { normal: { color: '#526652' } },
                name: 'Margin',
                data: [40, 55, 70, 75],
                type: 'bar',

            },
            {
                itemStyle: { normal: { color: '#FDB022' } },
                name: 'Trend Line',
                data: [45, 70, 50, 75],
                type: 'line',
            }
        ]

    };
    const circle3 = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center',
            show: false
        },
        series: [
            {
                type: 'pie',
                radius: ['50', '50%'],
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'center',
                    itemStyle: {
                        color: "black"
                    }
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: true
                },
                data: [
                    { value: 70, name: "70%", itemStyle: { color: '#029046' } },
                    { value: 30, itemStyle: { color: '#E4E7EC' }, },

                ]
            }
        ]

    };
    const Bar3 = {

        tile: {
            Text: 'Profitability Trend'
        },
        legend: {
            top: '5%',
            left: 'right',
            show: true
        },
        xAxis: {
            type: 'category',
            data: ['FY 19-20', 'FY 20-21', 'FY 21-22', 'FY 22-23']
        },

        yAxis: {
            type: 'value'
        },
        grid: {
            left: "50",
            top: "40",
            bottom: "8"
        },

        series: [

            {
                itemStyle: { normal: { color: '#526652' } },
                name: 'Revenue',
                data: [350, 550, 400, 700],
                type: 'bar',

            },
            {
                itemStyle: { normal: { color: '#FDB022' } },
                name: 'Trend Line',
                data: [770, 540, 740, 510],
                type: 'line',
            }
        ]

    };
    const horizontal4 = {

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
       
        legend: {
            top: '1%',
            left: 'right',
            
        },
        grid: {
            left: '23%',
            right: '2%',
            bottom: '3%',
            top:'7%',

        },
        xAxis: {
            type: 'value',

        },
        yAxis: {
            type: 'category',
            data: ['Opening', 'Average', 'Closing']
        },
        series: [

            {
                itemStyle: { normal: { color: '#526652' } },
                type: 'bar',
                data: [2500, 4300, 3500]
            },
            {
                name: 'Revenue',
                data: [2900, 3800, 3300, 2100],
                type: 'bar',
                backgroundColor: ['var(--green-900)']

            },
            {
                name: 'Trend Line',
                data: [2200, 3100, 2600, 3200],
                type: 'line'
            }
        ]


    };
    const Circle4 = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center',
            show: false
        },
        series: [
            {
                type: 'pie',
                radius: ['50', '50%'],
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'center',
                    itemStyle: {
                        color: "black"
                    }
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: true
                },
                data: [
                    { value: 70, name: "70%", itemStyle: { color: '#B9B062' } },
                    { value: 30, itemStyle: { color: '#E4E7EC' }, },

                ]
            }
        ]

    };
   

    return (

        < div className='bg-slate-100 mt-2'>

            <div className="grid flex-row gap-3 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 overallstatus">
                <div className='hover:drop-shadow-lg'>
                    <div className='shadow border rounded-md ' >
                        <div className='hover:bg-slate-200 flex items-center pl-7 h-12 p-9 space-x-4 bg-[#EDF2F0]'>
                            <img src='Group.png' className='w-11 pt-7 pb-7' />
                            <div><h2 className='pb-1'>Compensation</h2>
                                <h1 className='text-xl font-medium '><b> &#8377; 58.53 Cr.</b></h1>
                            </div>
                        </div>
                        <div className='bg-white rounded-md flex  flex-row place-content-center space-x-4 pb-2 pt-1'>
                            <div className='ml-2'><h2 className="text-[12px] font-normal text-[#344054] text-center">LY Value</h2>
                                <h1 className="text- font-[500] text-[#262D29]">&#8377;46.37 Cr</h1>
                            </div>
                            <img src='Rect.png' className='pt-3 h-8' />
                            <div className='ml-2'><h2 className="text-[12px] font-normal text-[#344054] text-center">LY Var% </h2>
                                <h1 className="text- font-[500] text-[#262D29]">26% </h1>
                            </div>
                            <img src='Rect.png' className='pt-3 h-8' />

                            <div className='ml-2'><h2 className="text-[12px] font-normal text-[#344054] text-center">3 Yr CAGR</h2>
                                <h1 className="text- font-[500] text-[#262D29]">12%</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hover:drop-shadow-lg'>
                    <div className='shadow border rounded-md ' >
                        <div className='hover:bg-slate-200 flex items-center pl-7 h-12 p-9  space-x-4 bg-[#EDF2F0]'>
                            <img src='Rs.png' className='w-11 pt-8 pb-7 ' /> <div><h2 className='pb-1 light-300'>Other Cost</h2>
                                <h1 className='text-xl font-medium'><b> &#8377;61.18 Cr.</b></h1>
                            </div>
                        </div>
                        <div className='bg-white rounded-md flex  flex-row place-content-center space-x-4 pb-2 pt-1'>
                            <div className='ml-2'><h2 className="text-[12px] font-normal text-[#344054] text-center">LY Value</h2>
                                <h1 className="text- font-[500] text-[#262D29]" >&#8377;54.40 Cr</h1>

                            </div><img src='Rect.png' className='pt-3 h-8' />
                            <div className='ml-2'><h2 className="text-[12px] font-normal text-[#344054] text-center">LY Var% </h2>
                                <h1 className="text- font-[500] text-[#262D29]">11%</h1>

                            </div><img src='Rect.png' className='pt-3 h-8' />
                            <div className='ml-2'><h2 className="text-[12px] font-normal text-[#334056] text-center">3 Yr CAGR</h2>
                                <h1 className="text- font-[500] text-[#262D29]">12% </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hover:drop-shadow-lg'>
                    <div className='shadow border rounded-md' >
                        <div className='hover:bg-slate-200 flex items-center pl-7 h-12 p-9  space-x-4 bg-[#EDF2F0]'>
                            <img src='pep.png' className='w-11 pt-8 pb-7' />
                            <div>
                                <h2 className='pb-1'>Opex</h2>
                                <h1 className='text-xl font-medium'><b> &#8377;120.71 Cr</b></h1>
                            </div>
                        </div>
                        <div className='bg-white rounded-md flex  flex-row place-content-center space-x-4 pb-2 pt-1'>
                            <div className='ml-2'><h2 className="text-[12px] font-normal text-[#344054] text-center">LY Value</h2>
                                <h1 className="text- font-[500] text-[#262D29]">&#8377;10.76 Cr</h1>

                            </div><img src='Rect.png' className='pt-3 h-8' />
                            <div className='ml-2'><h2 className="text-[12px] font-normal text-[#344054] text-center">LY Var% </h2>
                                <h1 className="text- font-[500] text-[#262D29]">20%</h1>

                            </div><img src='Rect.png' className='pt-3 h-8' />
                            <div className='ml-2'><h2 className="text-[12px] font-normal text-[#344054] text-center">3 Yr CAGR</h2>
                                <h1 className="text- font-[500] text-[#262D29]">20% </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hover:drop-shadow-lg'>
                    <div className='shadow border rounded-md' >
                        <div className='hover:bg-slate-200 flex items-center pl-7 h-12 p-9 space-x-4 bg-[#EDF2F0]'>
                            <img src='Rs.png' className='w-11 pt-8 pb-7 ' /> <div><h2 className='pb-1'>WC Intrest</h2>

                                <h1 className='text-xl font-medium' ><b> &#8377;-1.81 Cr</b></h1></div>
                        </div>
                        <div className='bg-white rounded-md flex  flex-row place-content-center space-x-4 pb-2 pt-1'>
                            <div className='ml-2'><h2 className="text-[12px] font-normal text-[#344054] text-center">LY Value</h2>
                                <h1 className="text- font-[500] text-[#262D29]">&#8377;19.63 Cr</h1>

                            </div><img src='Rect.png' className='pt-3 h-8' />
                            <div className='ml-2'><h2 className="text-[12px] font-normal text-[#344054] text-center">LY Var% </h2>
                                <h1 className="text- font-[500] text-[#ff3e3e]">-109%</h1>

                            </div><img src='Rect.png' className='pt-3 h-8' />
                            <div className='ml-2'><h2 className="text-[12px] font-normal text-[#344054] text-center">3 Yr CAGR</h2>
                                <h1 className="text- font-[500] text-[#ff3e3e]">-131% </h1>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className=" mt-3 grid flex-row gap-3 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                <div className="bg-white py-3 rounded-xl border  border-[#E1E6E3] px-4">
                    <div className="flex justify-between mb-4">
                        <span className="font-semibold">Revenue</span>
                        <i className="pi pi-ellipsis-v pt-1" />

                    </div>
                    <div className="flex gap-2 mb-3 justify-evenly">
                        <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">Gross Sale</p>
                            <div className="flex items-center gap-1"> <b>&#8377;199.63 Cr</b>
                                <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span><img src='Vector (1).png' /><img src='Green.png' /></span>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">Revenue</p>
                            <div className="flex items-center gap-1"> <b>&#8377;197 Cr</b>
                                <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span><img src='Vector (1).png' /><img src='Green.png' /></span>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">Revenue/Group</p>
                            <div className="flex items-center gap-1"> <b>&#8377;17 Cr</b>
                                <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span><img src='Vector.png' /><img src='Pink.png' /></span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="grid flex-row gap-2 mb-2 2xl:grid-cols-8 xl:grid-cols-8 lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-1">
                        <div className="col-span-3">
                            <div className="bg-[#F9FAFB] rounded-md h-36 w-42 p-2">
                                <p className="text-[16px] font-semibold text-[#344054] text-center">Target vs. Actual</p>

                                <div>
                                    <ReactECharts style={{ height: "100px", width: "140px" }} option={Circle}></ReactECharts>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="bg-[#F9FAFB] rounded-md p-2 h-36 w-72">

                                <p className="text-[13px] font-semibold text-[#344054]">Revenue Trend</p>
                                <div >
                                    <ReactECharts style={{ height: "111px", width: "270px" }} option={Bar}></ReactECharts>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg-white py-3 rounded-xl border  border-[#E1E6E3] px-4">
                    <div className="flex justify-between mb-4">
                        <span className="font-semibold">Margin</span>
                        <i className="pi pi-ellipsis-v pt-1" />

                    </div>
                    <div className="flex gap-2 mb-3 justify-evenly">
                        <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">GM before Provision</p>
                            <div className="flex items-center gap-1"> <b>&#8377;45 Cr</b>
                                <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span><img src='Vector (1).png' /><img src='Green.png' /></span>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">GM after Provision</p>
                            <div className="flex items-center gap-1"> <b>&#8377;50 Cr</b>
                                <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span><img src='Vector.png' /><img src='Pink.png' /></span>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">GM%</p>
                            <div className="flex items-center gap-1"> <b>4%</b>
                                <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span><img src='Vector.png' /><img src='Pink.png' /></span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="grid flex-row gap-2 mb-2 2xl:grid-cols-8 xl:grid-cols-8 lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-1">
                        <div className="col-span-3">
                            <div className="bg-[#F9FAFB] rounded-md h-36 w-42 p-2">
                                <p className="text-[16px] font-semibold text-[#344054] text-center">Target vs. Actual</p>

                                <div>
                                    <ReactECharts style={{ height: "100px", width: "140px" }} option={Circle2}></ReactECharts>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="bg-[#F9FAFB] rounded-md p-2 h-36 w-72">
                                <p className="text-[13px] font-semibold text-[#344054]">Margin Trend</p>

                                <div>

                                    <ReactECharts style={{ height: "111px", width: "270px" }} option={Bar2}></ReactECharts>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg-white py-3 rounded-xl border  border-[#E1E6E3] px-4">
                    <div className="flex justify-between mb-4">
                        <span className="font-semibold">Cost/Expence</span>
                        <i className="pi pi-ellipsis-v pt-1" />

                    </div>
                    <div className="flex gap-2 mb-3 justify-evenly">
                        <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">Expence</p>
                            <div className="flex items-center gap-1"> <b>&#8377;17 Cr</b>
                                <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span><img src='Vector (1).png' /><img src='Green.png' /></span>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">Expence Under Managment</p>
                            <div className="flex items-center gap-1"> <b>&#8377;10 Cr</b>
                                <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span><img src='Vector (1).png' /><img src='Green.png' /></span>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EUM</p>
                            <div className="flex items-center gap-1"> <b>4%</b>
                                <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span><img src='Vector.png' /><img src='Pink.png' /></span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="grid flex-row gap-2 mb-2 2xl:grid-cols-8 xl:grid-cols-8 lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-1">
                        <div className="col-span-3">
                            <div className="bg-[#F9FAFB] rounded-md h-36 w-42 p-2">
                                <p className="text-[16px] font-semibold text-[#344054] text-center">Target vs. Actual</p>

                                <div >
                                    <ReactECharts style={{ height: "100px", width: "140px" }} option={circle3}></ReactECharts>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="bg-[#F9FAFB] rounded-md p-2 h-36 w-72">
                                <p className="text-[13px] font-semibold text-[#344054]">Expence Trend</p>

                                <div >
                                    <ReactECharts style={{ height: "111px", width: "270px" }} option={Bar3}></ReactECharts>
                                </div>
                            </div>
                        </div>

                    </div>
                  
                </div>
                <div className="bg-white py-3 rounded-xl border  border-[#E1E6E3] px-4">
                    <div className="flex justify-between mb-4">
                        <span className="font-semibold">Income</span>
                        <i className="pi pi-ellipsis-v pt-1" />

                    </div>
                    <div className="flex gap-2 mb-3 justify-evenly">
                        <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBIT</p>
                            <div className="flex items-center gap-1"> <b>&#8377;32.63 Cr</b>
                                <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span><img src='Vector (1).png' /><img src='Green.png' /></span>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBIT%</p>
                            <div className="flex items-center gap-1"> <b>4.1%</b>
                                <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span><img src='Vector.png' /><img src='Pink.png' /></span>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBITDA</p>
                            <div className="flex items-center gap-1"> <b>&#8377;30 Cr</b>
                                <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span><img src='Vector (1).png' /><img src='Green.png' /></span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="grid flex-row gap-2 mb-2 2xl:grid-cols-8 xl:grid-cols-8 lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-1">
                        <div className="col-span-3">
                            <div className="bg-[#F9FAFB] rounded-md h-36 w-42 p-2">
                                <p className="text-[16px] font-semibold text-[#344054] text-center">Target vs. Actual</p>

                                <div>
                                    <ReactECharts style={{ height: "120px", width: "140px" }} option={Circle4}></ReactECharts>

                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="bg-[#F9FAFB] rounded-md p-2 h-36 w-72">
                                <p className="text-[13px] font-semibold text-[#344054]">Income Trend</p>

                                <div>
                                    <ReactECharts style={{ height: "110px", width: "270px" }} option={horizontal4}></ReactECharts>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div>Rohan malavi </div>

            </div>


        </div>
    )
}
