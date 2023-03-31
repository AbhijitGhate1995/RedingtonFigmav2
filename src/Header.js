import React, { useRef } from 'react';
import { useState } from 'react';

import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { Badge } from 'primereact/badge';
import ReactECharts from 'echarts-for-react';
import Home from './Home';
import { Outlet } from 'react-router-dom';
import { Menu } from 'primereact/menu';



function Header() {


    const [visible, setVisible] = useState(false);
    const [filter, setFilter] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: "2018-19", code: "NY" },
        { name: "2019-20", code: "RM" },
        { name: "2020-21", code: "LDN" },
        { name: "2021-22", code: "IST" },
        { name: "2022-2023", code: "PRS" },
    ];

    const [selectedSUB, setSelectedSUB] = useState(null);
    const SUB = [
        { name: "All", code: "All" },
        { name: "Cloud", code: "Cloud" },
        { name: "L&S", code: "L & S" },
        { name: "Software", code: "Sofware" },
    ];

    const [selectedKPI, setSelectedKpi] = useState(null);
    const Kpi = [
        { name: "All", code: "All" },
        { name: "Revenue", code: "Revenue" },
        { name: "Margin", code: "Margin" },
        { name: "Opex", code: "Opex" },
        { name: "Income", code: "Income" },
        { name: "Working Capital", code: "Working Capital" },
        { name: "Profitability", code: "Profitability" },
    ];
    const [selectedDimension, setSelectedDimension] = useState(null);
    const Dimension = [
        { name: "SBU" },
        { name: "Business Manager" },
        { name: "Vendor" },
        { name: "Cost Center" },
    ];
    const [selectedCount, setSelectedCount] = useState(null);
    const Count = [{ name: "5" }, { name: "10" }, { name: "15" }, { name: "20" }];

    const [selectedOwner, setSelectedOwner] = useState(null);
    const Owner = [
        { name: "Dinesh", code: "All" },
        { name: "Mayur", code: "Cloud" },
        { name: "Others", code: "L & S" },
        { name: "Sufiyan", code: "Sofware" },
        { name: "Shivam", code: "Sofware" },
        { name: "Inactive", code: "Sofware" },
        { name: "Giridhar", code: "Sofware" },
        { name: "Vardharajan", code: "Sofware" },
        { name: "Krishnaprasad", code: "Sofware" },
        { name: "Swapna", code: "Sofware" },
        { name: "BUCODE", code: "Sofware" },
        { name: "Rajmolkan", code: "Sofware" },
        { name: "ALok", code: "Sofware" },
        { name: "Ram", code: "Sofware" },
    ];
    const [selectedVendor, setSelectedVendor] = useState(null);
    const Vendor = [
        { name: "Networking", code: "All" },
        { name: "Cloud", code: "Cloud" },
        { name: "L&S", code: "L & S" },
        { name: "Software", code: "Sofware" },
        { name: "ESS", code: "Sofware" },
        { name: "Security", code: "Sofware" },
        { name: "Dell EMC", code: "Sofware" },
    ];
    const [selectedProfit, setSelectedProfit] = useState(null);
    const Profit = [
        { name: "LSCL", code: "All" },
        { name: "MSOF", code: "Cloud" },
        { name: "CACL", code: "L & S" },
        { name: "AMFG", code: "Sofware" },
        { name: "MSIN", code: "Sofware" },
        { name: "IBSL", code: "Sofware" },
        { name: "MSID", code: "Sofware" },
        { name: "IBTS", code: "Sofware" },
        { name: "VSCL", code: "Sofware" },
        { name: "AUSW", code: "Sofware" },
        { name: "ICMS", code: "Sofware" },
        { name: "KFCL", code: "Sofware" },
        { name: "TRCL", code: "Sofware" },
        { name: "AWSC", code: "Sofware" },
        { name: "VLCL", code: "Sofware" },
        { name: "BUCL", code: "Sofware" },
        { name: "MSCL", code: "Sofware" },
        { name: "MSDN", code: "Sofware" },

    ];

    const itemsdemo = [
        {
            icon: "pi pi-user",
            label: "Profile",
        },
        {
            icon: "pi pi-user",
            label: "logout",
        },
    ];
   

    const menu = useRef(null);
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
            top: '7%',
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
        <div className='bg-slate-100 '>
            <div class="min-h-screen flex">
                <nav class={`grid w-16 flex-none bg-green-900 rounded-r-xl px-2 py-3 mt-1 mb-1 h-screen hover:w-44 group-hover:shadow-xl duration-500 z-10 fixed group-hover:visible delay-150 `}>
                    <div>
                        <ul>
                            <div className='justify-between h-[500px] flex-col '>
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
                <main class="flex-1 min-w-0  ml-20 mt-1 p-2 z-0">
                    <header class=" p-0 w-full h-15 sticky fixed">
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
                                            <div className="card flex justify-content-center text-black items-center ml-4">
                                                <Menu model={items} popup ref={menu} />
                                                <Button icon="pi pi-angle-down" style={{width:10, height:10}} severity="secondary" className='mt-5' onClick={(e) => menu.current.toggle(e)} text/>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </header>
                    <Outlet>
                        
                    </Outlet>
                </main>
            </div>
        </div>
    )
}

export default Header;
