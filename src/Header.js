import React from 'react';
import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { Badge } from 'primereact/badge';
import ReactECharts from 'echarts-for-react';

function Header() {
    const [visible, setVisible] = useState(false);
    const [filter, setFilter] = useState(false);
    const [selectedYear, setSelectedYear] = useState(null);
    const Year = [
        { name: '2022-23', code: 'NY' },
        { name: '2021-22', code: 'RM' },
        { name: '2020-21', code: 'LDN' },
        { name: '2019-20', code: 'IST' },
    ];
    const [selectedSUB, setSelectedSUB] = useState(null);
    const SUB = [
        { name: 'All' },
        { name: 'Cloud' },
        { name: 'L&S' },
        { name: 'Software' },
    ];

    const items = [
        {
            icon: 'pi pi-user',
            label: 'Profile',
        },
        {
            icon: 'pi pi-user',
            label: 'logout',
        },

    ];
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

    const [open, setOpen] = useState(true);
    return (
        <div>
            <div class="min-h-screen flex fixed">
                <nav class={`grid w-16 flex-none bg-green-900 rounded-r-xl px-2 py-3 mt-1 mb-1 h-screen hover:w-44 group-hover:shadow-xl duration-500 z-10  group-hover:visible delay-150 `}>
                    <div>
                        <ul className=''>
                            <div className='justify-between h-[500px] flex-col justify-between '>
                                <div className='flex'>
                                    <img src='../assest/img/Redington (India) 1.png' />
                                    {/* <img src='../assest/img/' /> */}
                                </div>

                                <div className='text-white'>
                                    <li>
                                        <button className=' p-3 flex mt-7 px-2 hover:bg-green-500 hover:w-40  cursor-pointer text-white rounded-md'>
                                            <img src='../assest/img/Vector.png' width={"20px"} className='mr-5' />
                                            <div className='text-white opacity-0 hover:opacity-100'>Home</div>
                                        </button>
                                    </li>

                                    <div className='flex mt-4 px-1 cursor-pointer text-white btn btn-bg-gray-900'>
                                        <li>
                                            <button className='w-10 flex absolute  hover:bg-green-500 p-3 rounded-md px-1 hover:w-40 text-invisible '>
                                                <img src='../assest/img/Home.png' width={"30px"} className=' mr-4 ' />
                                                <spn className=' text-white opacity-0 hover:opacity-100 '>Dashboard</spn>
                                            </button>
                                        </li>
                                    </div>
                                </div>
                            </div>

                            <div className='sidebar-footer text-white'>
                                <li>
                                    <button className='flex hover:bg-green-500 p-3 rounded-md  hover:w-40'>
                                        <img src='../assest/img/setting.png' width={"25px"} />
                                        <spn className='ml-2 text-white opacity-0 hover:opacity-100'>Setting</spn>
                                    </button>
                                </li>
                                <li>
                                    <button className='w-10 flex p-2 hover:bg-green-500 rounded-md mb-5 hover:w-40'>
                                        <img src='../assest/img/export.png' width={"25px"} />
                                        <span className='ml-2 visible hover:visible text-white opacity-0 hover:opacity-100'>Logout</span>
                                    </button>
                                </li>
                            </div>
                        </ul>
                    </div>
                </nav>

                <main class="flex-1 min-w-0 overflow-auto fixed ml-20 mt-1 p-2 z-0">
                    <header class=" p-0 w-full h-28">
                        <div className='flex items-center justify-between px-5'>
                            <div className='object-left'>
                                <div className='flex lg:flex-1 text-sm'>Dashboard</div>
                                <div className='text-xl '>At a Glance</div>
                            </div>
                            <div className='object-right-top flex item-center p-0 gap-5 items-center'>
                                <div className='w-10 h-10 items-center rounded-full bg-gray-200'>
                                    <i className="pi pi-bell p-overlay-badge ml-2 mt-2" style={{ fontSize: '1.6rem' }}>
                                        <Badge value="2"></Badge>
                                    </i>
                                </div>
                                <div className='flex row center p-0 '>
                                    <div className='row flex'>
                                        <div className='flex'><img src='../assest/img/Ellipse 1.png' className='w-auto' />
                                            <img src='../assest/img/Frame 36835.png' className='w-auto m-2' /></div>
                                        <SplitButton model={items} severity="secondary" className=' ' text>

                                        </SplitButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex row justify-between absolute h-14 top-[60px] mx-10'>
                            <div className='grid grid-cols-2 flex justify-evenly'>
                                <div className='flex justify-between'>
                                    <Sidebar visible={filter} position="right" onHide={() => setFilter(false)} className="w-full md:w-20rem lg:w-30rem">
                                        <div>
                                            <header>Filter</header>
                                            <div className='container'>
                                                <div className='grid grid-cols-2'>
                                                    <div className='row'>
                                                        <label className='text-sm font-light'>SUB</label>
                                                        <Dropdown value={selectedSUB} onChange={(e) => setSelectedSUB(e.value)} options={SUB} optionLabel="name"
                                                            placeholder="Select a SUB" className="w-22 md:w-12rem text-sm h-7 items-center" />
                                                    </div>
                                                    <div className=''></div>
                                                </div>
                                            </div>
                                        </div>

                                    </Sidebar>
                                    <a className='' onClick={() => setVisible(true)}  ><img src='./assest/img/_button base.png' /></a>
                                    <div className='flex justify-between mx-5'>
                                        <div className="flex-1 mt-0 mx-0">
                                            <label className='text-sm font-light'>Fiancial Year</label>
                                            <Dropdown value={selectedYear} onChange={(e) => setSelectedYear(e.value)} options={Year} optionLabel="name"
                                                placeholder="2021-22" className="w-22 md:w-12rem text-sm h-7 items-center m-auto pt-0" />
                                        </div>
                                        {/* <div className="flex justify-between mx-5"> */}
                                        <label className='text-sm font-light'>SUB</label>
                                        <Dropdown value={selectedSUB} onChange={(e) => setSelectedSUB(e.value)} options={SUB} optionLabel="name"
                                            placeholder="Select a SUB" className="w-22 md:w-12rem text-sm h-7 items-center" />
                                        {/* </div> */}
                                    </div>
                                </div>


                                <div className='flex justify-end mt-3'>
                                    <Sidebar visible={visible} position="right" onHide={() => setVisible(false)} className="w-full md:w-20rem lg:w-30rem">
                                        {/* <h2>Sidebar</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p> */}
                                    </Sidebar>
                                    <Button onClick={() => setVisible(true)} severity="secondary" className='bg-surface-900 h-8'>Parent component</Button>
                                </div>

                            </div>

                        </div>
                    </header>
                    <div className='bg-slate-100 mt-2'>

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
            <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBIT</p>
                <div className="flex items-center gap-1"> <b>&#8377;32.63 Cr</b>
                    <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span><img src='Vector (1).png' /><img src='Green.png' /></span>
                    </div>
                </div>
            </div>
            <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBIT%</p>
                <div className="flex items-center gap-1"> <b>4.1%</b>
                    <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span><img src='Vector.png' /><img src='Pink.png' /></span>
                    </div>
                </div>
            </div>
            <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBITDA</p>
                <div className="flex items-center gap-1"> <b>&#8377;30 Cr</b>
                    <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span><img src='Vector (1).png' /><img src='Green.png' /></span>
                    </div>
                </div>
            </div>
            <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBITDA</p>
                <div className="flex items-center gap-1"> <b>&#8377;30 Cr</b>
                    <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span><img src='Vector (1).png' /><img src='Green.png' /></span>
                    </div>
                </div>
            </div>
            <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBITDA</p>
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



                </main>
            </div>
        </div>
    )
}

export default Header;
