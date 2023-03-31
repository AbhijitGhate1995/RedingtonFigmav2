import React, { useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/dist/echarts.js';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import Header from './Header';
import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Dropdown } from 'primereact/dropdown';
import { Link } from 'react-router-dom';


export default function Home() {
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
    const [selectedYear, setSelectedYear] = useState(null);
    const Year = [
        { name: "2018-19", code: "2018-19" },
        { name: "2019-20", code: "2019-20" },
        { name: "2020-21", code: "2020-21" },
        { name: "2021-22", code: "2021-22" },
    ];
    const SimpleBar = {
        xAxis: {
            type: "category",
            data: ["Dell", "Cisco", "HPE", "Microsoft", "EMC", "AutoDesk", "IBM HW"],
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                itemStyle: { normal: { color: "#029046" } },
                data: [5200, 2200, 1800, 1400, 1450, 1200, 900],

                type: "bar",
            },
        ],
    };

    const upsideBar = {
        xAxis: {
            type: "category",
            data: [
                "Teja",
                "Checkpoint",
                "Volon",
                "EPACTS",
                "Nuance",
                "Time Doctor",
                "Smart",
            ],
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                itemStyle: { normal: { color: "#029046" } },
                data: [1.3, 0.7, 0.6, 0.4, 0.3, 0.2, -2.3],
                type: "bar",
            },
        ],
    };


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
                    { value: 72, name: "72%", itemStyle: { color: '#db2777' } },
                    { value: 28, itemStyle: { color: '#E4E7EC' }, },

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
            left: '40%',
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
            left: '40%',
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
            left: '40%',
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
            left: '40%',

        },
        grid: {
            left: '23%',
            right: '2%',
            bottom: '1%',
            top: '19%',

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
                    { value: 70, name: "70%", itemStyle: { color: '#06b6d4' } },
                    { value: 30, itemStyle: { color: '#E4E7EC' }, },

                ]
            }
        ]

    };
    const menu = useRef(null);
    const revenuelist = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Metrics',
                    url: '/header/matrics'

                },
                {
                    label: 'Business',
                    url: '/header/business'
                }, {
                    label: 'Comparison',
                    url: '/header/comparison'
                },
                {
                    label: 'Detailed',
                    url: '/header/detailed'
                },
                {
                    label: 'Projections',
                    url: '/header/projections'

                },

            ]

        }
    ];
<<<<<<< Updated upstream

=======
    const line1 = {
        xAxis: {
            type: 'category',
            splitLine: {
                show: false
            },
        },
        grid: {
            height: "85%",
            top: '8%',
            right: '5%',
            left: '10%',
            bottom: '70%',
            containLabel: false,
            borderRadius: 15
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            },
        },
        series: [
            {
              data: [200, 30, 50, 96, 60, 76, 221],
                type: 'line',
                symbol: 'circle',
                symbolSize: 30,
                label: {
                    show: true,
                    fontSize: 12,
                    position: ['22%', '30%'],
                    color: '#fff',
                  },
                lineStyle: {
                    color: '#f87171',
                    width: 2,
                    type: 'line'
                },
                itemStyle: {
    
                    color: '#526652',
                    borderWidth: 2,
                    borderColor: '#526652',
                    shadowBlur: 4,
                    shadowColor: "rgba(0, 0, 0, 0.25)"
    
                }
    
    
            }
        ]
    };
    const line2 = {
        xAxis: {
            type: 'category',
            splitLine: {
                show: false
            },
        },
        grid: {
            height: "85%",
            top: '8%',
            right: '5%',
            left: '10%',
            bottom: '70%',
            containLabel: false,
            borderRadius: 15
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            },
        },
        series: [
            {
              data: [200, 30, 50, 96, 60, 76, 221],
                type: 'line',
                symbol: 'circle',
                symbolSize: 30,
                label: {
                    show: true,
                    fontSize: 12,
                    position: ['22%', '30%'],
                    color: '#fff',
                  },
                lineStyle: {
                    color: '#526652',
                    width: 2,
                    type: 'line'
                },
                itemStyle: {
    
                    color: '#526652',
                    borderWidth: 2,
                    borderColor: '#526652',
                    shadowBlur: 4,
                    shadowColor: "rgba(0, 0, 0, 0.25)"
    
                }
    
    
            }
        ]
    };
    const Circle5 = {
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
                    { value: 70, name: "70%", itemStyle: { color: '#dc2626' } },
                    { value: 30, itemStyle: { color: '#E4E7EC' }, },

                ]
            }
        ]

    };
    const Circle6 = {
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
                    { value: 70, name: "70%", itemStyle: { color: '#065f46' } },
                    { value: 30, itemStyle: { color: '#E4E7EC' }, },

                ]
            }
        ]

    };
   
>>>>>>> Stashed changes

    return (
        <><div className='scrollbar-hide'>
            <div className='w-full p-4'>
                <div className='grid grid-cols-2 justify-between'>
                    <div className='flex gap-5'>
                        <div className='text-center items-center' >
                            <Sidebar
                                visible={filter}
                                position="right"
                                onHide={() => setFilter(false)}
                                className=" md:w-20rem lg:w-30rem"
                                style={{ width: 700 }}
                            >
                                <div>
                                    <div class="absolute top-0 left-0 right-0 w-full text-white h-14 bg-[url('../assest/img/business-people.png')]">
                                        <div class="flex justify-between px-6 py-3">
                                            <div class="text-md">
                                                <h6 class="text-[white]">View Performance</h6>
                                            </div>
                                            <div>
                                                <a onClick={() => setFilter(false)} class="text-2xl leading-none closebtn removeClass">X</a>
                                            </div>
                                        </div>
                                    </div>
                                    <header>Filter</header>
                                    <div className='container'>
                                        <div className='grid grid-cols-2'>
                                            <div className='gap-3 mr-2'>
                                                <div className="grid w-full mb-5">
                                                    <label className="text-[12px] font-normal text-[#344054]">Fiancial Year</label>
                                                    <Dropdown
                                                        value={selectedYear}
                                                        onChange={(e) => setSelectedYear(e.value)}
                                                        options={Year}
                                                        optionLabel="name"
                                                        placeholder="--Select Year --"
                                                        className="w-full md:w-12rem text-sm pt-0"
                                                    />
                                                </div>
                                                <div className=" grid ">
                                                    <label className="text-[12px] font-normal text-[#344054]">SUB</label>
                                                    <Dropdown
                                                        value={selectedSUB}
                                                        onChange={(e) => setSelectedSUB(e.value)}
                                                        options={SUB}
                                                        optionLabel="name"
                                                        placeholder="--Select  --"
                                                        className="w-full md:w-12rem text-sm pt-0"
                                                    />
                                                </div>
                                            </div>
                                            <div className='gap-3 ml-2'>
                                                <div className=" grid ">
                                                    <label className="text-[12px] font-normal text-[#344054]">Owner</label>
                                                    <Dropdown
                                                        value={selectedOwner}
                                                        onChange={(e) => setSelectedOwner(e.value)}
                                                        options={Owner}
                                                        optionLabel="name"
                                                        placeholder="--Select  --"
                                                        className="w-full md:w-12rem text-sm pt-0"
                                                    />
                                                </div>
                                                <div className=" grid mt-5 mb-5">
                                                    <label className="text-[12px] font-normal text-[#344054]">Vendor</label>
                                                    <Dropdown
                                                        value={selectedVendor}
                                                        onChange={(e) => setSelectedVendor(e.value)}
                                                        options={Vendor}
                                                        optionLabel="name"
                                                        placeholder="--Select  --"
                                                        className="w-full md:w-12rem text-sm pt-0"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" grid">
                                            <label className="text-[12px] font-normal text-[#344054]">Profit Center</label>
                                            <Dropdown
                                                value={selectedProfit}
                                                onChange={(e) => setSelectedProfit(e.value)}
                                                options={Profit}
                                                optionLabel="name"
                                                placeholder="--Select  --"
                                                className=" md:w-12rem text-sm pt-0 w-1/2"
                                            />
                                        </div>

                                    </div>
                                </div>
                                {/* Footer Buttons of sideBar */}
                                <div>
                                    <footer className='mt-52'>
                                        <div className='w-full rounded-md bg-green-100 text-right'>
                                            <div className='text-right py-3 justify-evenly'>
                                                <button onClick={() => setFilter(false)} className='bg-white text-black rounded-md px-2 py-2 mx-2 border-2 h-10 w-15'>Cancel</button>
                                                <button className=' bg-green-500  text-white rounded-md px-2 py-2 mx-2 boder-2'>Apply Filter</button>
                                            </div>
                                        </div>
                                    </footer>

                                </div>

                            </Sidebar>
                            {/* No Changes here */}
                            <a onClick={() => setFilter(true)}  ><img src='./assest/img/_button base.png' className='mt-6' /></a>
                        </div>
                        <div className="flex ">
                            <div className="">
                                <div>
                                    <label className="text-[12px] font-normal text-[#344054]">Fiancial Year</label>
                                </div>
                                <Dropdown
                                    value={selectedYear}
                                    onChange={(e) => setSelectedYear(e.value)}
                                    options={Year}
                                    optionLabel="name"
                                    placeholder="2021-22"
                                    className="w-22 md:w-12rem text-sm h-7 items-center m-auto pt-0"
                                />
                            </div>
                            <div className='ml-2'>
                                <div className='block '>
                                    <label className="text-[12px] font-normal text-[#344054]">SUB   </label>
                                </div >
                                <Dropdown
                                    value={selectedSUB}
                                    onChange={(e) => setSelectedSUB(e.value)}
                                    options={SUB}
                                    optionLabel="name"
                                    placeholder="Select a SUB"
                                    className="w-22 md:w-12rem text-sm h-7 items-center"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-end mt-3">
                            <Sidebar
                                visible={visible}
                                position="right"
                                onHide={() => setVisible(false)}
                                className=" md:w-20rem lg:w-30rem"
                                style={{ width: 700 }}
                            >
                                <div className="grid grid-cols-4 ">
                                    <div class="absolute top-0 left-0 right-0 w-full text-white h-14 bg-[url('../assest/img/business-people.png')]">
                                        <div class="flex justify-between px-6 py-3">
                                            <div class="text-md">
                                                <h6 class="text-[white]">View Performance</h6>
                                            </div>
                                            <div>
                                                <a onClick={() => setVisible(false)} class="text-2xl leading-none closebtn removeClass">×</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" gap-4">
                                        <span >Fiancial Year</span>
                                        <span className="p-float-label">
                                            <Dropdown
                                                inputId="dd-city"
                                                value={selectedCity}
                                                onChange={(e) => setSelectedCity(e.value)}
                                                options={cities}
                                                optionLabel="name"
                                                className=" md:w-14rem"
                                            />
                                            <label htmlFor="dd-city">2018-19</label>
                                        </span>
                                    </div>

                                    <div>
                                        <span>KPI</span>
                                        <span className="p-float-label">
                                            <Dropdown
                                                inputId="dd-kpi"
                                                value={selectedKPI}
                                                onChange={(e) => setSelectedKpi(e.value)}
                                                options={Kpi}
                                                optionLabel="name"
                                                className=" md:w-14"
                                                style={{ width: 150 }}
                                            />
                                            <label htmlFor="dd-kpi">Revenue</label>
                                        </span>
                                    </div>
                                    <div>
                                        <span>Dimension</span>
                                        <span className="p-float-label">
                                            <Dropdown
                                                inputId="dd-Dimension"
                                                value={selectedDimension}
                                                onChange={(e) => setSelectedDimension(e.value)}
                                                options={Dimension}
                                                optionLabel="name"
                                                className=" md:w-14"
                                                style={{ width: 150 }}
                                            />
                                            <label htmlFor="dd-Dimension">Vendor</label>
                                        </span>
                                    </div>

                                    <div>
                                        <span>Count of Dimension</span>
                                        <span className="p-float-label">
                                            <Dropdown
                                                inputId="dd-Count"
                                                value={selectedCount}
                                                onChange={(e) => setSelectedCount(e.value)}
                                                options={Count}
                                                optionLabel="name"
                                                className=" md:w-14"
                                                style={{ width: 150 }}
                                            />
                                            <label htmlFor="dd-Count">5</label>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <ReactECharts
                                        option={SimpleBar}
                                        itemStyle={{ backgroundColor: "green" }}
                                    />
                                </div>
                                <div className="grid">
                                    <div className="flex gap-3 bg-slate-100">
                                        <img src="../Insight.png" alt="Insight" />
                                        Key Insights
                                    </div>
                                    <div className="flex gap-2 mt-2">
                                        <img src="../Right.png" style={{ height: 30 }} />
                                        <p>
                                            Dell has earned ₹ 1983 Cr which is highest revenue
                                            earned among our vendors.It has increased 41% YoY has
                                            increased by 73% compared to last year followed by Cisco
                                            and HPE with ₹791 Cr and ₹746 Cr respectively.HPE has
                                            grown with 222% YoY grown by 28% YoY,however the growth
                                            of Cisco compared to last year is 0%{" "}
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <img src="../Right.png" style={{ height: 30 }} />
                                        <p>
                                            Oracle HW, Commscope and Fortinet are last 3 in top
                                            vendor list. with the revenue of ₹202 Cr, ₹200 Cr and ₹
                                            191 Cr with an YoY growth of 10%,11% and 5%
                                            respectively.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <ReactECharts option={upsideBar} />
                                </div>
                                <div>
                                    <div className='w-full rounded-md bg-blue-100 text-right'>
                                        <div className='text-right px-2 py-2'>
                                            <button onClick={() => setVisible(false)} className='bg-white border-4 text-black rounded-md px-2 py-2'>Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </Sidebar>
                            <Button
                                onClick={() => setVisible(true)}
                                severity="secondary"
                                className="bg-surface-900 h-8 w-auto">
                                View Performance
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className='mt-7'>
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
                            {/* <i className="pi pi-ellipsis-v pt-1" /> */}
                            <div className="card flex justify-content-center text-black">
                                <Menu model={revenuelist} popup ref={menu} />
                                <Button icon="pi pi-ellipsis-v" style={{ width: 10, height: 10 }} severity="secondary" onClick={(e) => menu.current.toggle(e)} text />
                            </div>
                        </div>
                        <div className="flex gap-2 mb-3 justify-evenly">
                            <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">Gross Sale</p>
                                <div className="flex items-center gap-1"> <b>&#8377;199.63 Cr</b>
                                    <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">Revenue</p>
                                <div className="flex items-center gap-1"> <b>&#8377;197 Cr</b>
                                    <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">Revenue/Group</p>
                                <div className="flex items-center gap-1"> <b>&#8377;17 Cr</b>
                                    <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector.png' /><img src='Pink.png' /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid flex-row gap-2 mb-2 2xl:grid-cols-8 xl:grid-cols-8 lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-1">
                            <div className="col-span-3">
                                <div className="bg-[#F9FAFB] rounded-md h-36 w-42 p-2">
                                    <p className="text-[16px] font-semibold text-[#344054] text-center">Target vs. Actual</p>
                                    <div>
                                        <ReactECharts style={{ height: "100px", width: "180px" }} option={Circle}></ReactECharts>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <div className="bg-[#F9FAFB] rounded-md p-2 h-36 w-80" style={{ width: '338px' }}>
                                    <p className="text-[13px] font-semibold text-[#344054]">Revenue Trend</p>
                                    <div >
                                        <ReactECharts style={{ height: "111px", width: "350px" }} option={Bar}></ReactECharts>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white py-3 rounded-xl border  border-[#E1E6E3] px-4">
                        <div className="flex justify-between mb-4">
                            <span className="font-semibold">Margin</span>
                            <div className="card flex justify-content-center text-black">
                                <Menu model={revenuelist} popup ref={menu} />
                                <Button icon="pi pi-ellipsis-v" style={{ width: 10, height: 10 }} severity="secondary" onClick={(e) => menu.current.toggle(e)} text />
                            </div>
                        </div>
                        <div className="flex gap-2 mb-3 justify-evenly">
                            <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">GM before Provision</p>
                                <div className="flex items-center gap-1"> <b>&#8377;45 Cr</b>
                                    <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">GM after Provision</p>
                                <div className="flex items-center gap-1"> <b>&#8377;50 Cr</b>
                                    <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector.png' /><img src='Pink.png' /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">GM%</p>
                                <div className="flex items-center gap-1"> <b>4%</b>
                                    <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector.png' /><img src='Pink.png' /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid flex-row gap-2 mb-2 2xl:grid-cols-8 xl:grid-cols-8 lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-1">
                            <div className="col-span-3">
                                <div className="bg-[#F9FAFB] rounded-md h-36 w-42 p-2">
                                    <p className="text-[16px] font-semibold text-[#344054] text-center">Target vs. Actual</p>
                                    <div>
                                        <ReactECharts style={{ height: "100px", width: "180px" }} option={Circle2}></ReactECharts>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <div className="bg-[#F9FAFB] rounded-md p-2 h-36 w-80" style={{ width: '338px' }}>
                                    <p className="text-[13px] font-semibold text-[#344054]">Margin Trend</p>
                                    <div>
                                        <ReactECharts style={{ height: "111px", width: "350px" }} option={Bar2}></ReactECharts>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white py-3 rounded-xl border  border-[#E1E6E3] px-4">
                        <div className="flex justify-between mb-4">
                            <span className="font-semibold">Cost/Expence</span>
                            <div className="card flex justify-content-center text-black">
                                <Menu model={revenuelist} popup ref={menu} />
                                <Button icon="pi pi-ellipsis-v" style={{ width: 10, height: 10 }} severity="secondary" onClick={(e) => menu.current.toggle(e)} text />
                            </div>
                        </div>
                        <div className="flex gap-2 mb-3 justify-evenly">
                            <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">Expence</p>
                                <div className="flex items-center gap-1"> <b>&#8377;17 Cr</b>
                                    <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">Expence Under Managment</p>
                                <div className="flex items-center gap-1"> <b>&#8377;10 Cr</b>
                                    <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EUM</p>
                                <div className="flex items-center gap-1"> <b>4%</b>
                                    <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector.png' /><img src='Pink.png' /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
<<<<<<< Updated upstream
                        <div className="grid flex-row gap-2 mb-2 2xl:grid-cols-8 xl:grid-cols-8 lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-1">
                            <div className="col-span-3">
                                <div className="bg-[#F9FAFB] rounded-md h-36 w-42 p-2">
                                    <p className="text-[16px] font-semibold text-[#344054] text-center">Target vs. Actual</p>

                                    <div >
                                        <ReactECharts style={{ height: "100px", width: "180px" }} option={circle3}></ReactECharts>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <div className="bg-[#F9FAFB] rounded-md p-2 h-36 w-80" style={{ width: '338px' }}>
                                    <p className="text-[13px] font-semibold text-[#344054]">Expence Trend</p>

                                    <div >
                                        <ReactECharts style={{ height: "111px", width: "350px" }} option={Bar3}></ReactECharts>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white py-3 rounded-xl border  border-[#E1E6E3] px-4">
                        <div className="flex justify-between mb-4">
                            <span className="font-semibold">Income</span>
                            <div className="card flex justify-content-center text-black">
                                <Menu model={revenuelist} popup ref={menu} />
                                <Button icon="pi pi-ellipsis-v" style={{ width: 10, height: 10 }} severity="secondary" onClick={(e) => menu.current.toggle(e)} text />
                            </div>
                        </div>
                        <div className="flex gap-2 mb-3 justify-evenly">
                            <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBIT</p>
                                <div className="flex items-center gap-1"> <b>&#8377;32.63 Cr</b>
                                    <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBIT%</p>
                                <div className="flex items-center gap-1"> <b>4.1%</b>
                                    <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector.png' /><img src='Pink.png' /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBITDA</p>
                                <div className="flex items-center gap-1"> <b>&#8377;30 Cr</b>
                                    <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBITDA</p>
                                <div className="flex items-center gap-1"> <b>&#8377;30 Cr</b>
                                    <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBITDA</p>
                                <div className="flex items-center gap-1"> <b>&#8377;30 Cr</b>
                                    <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid flex-row gap-2 mb-2 2xl:grid-cols-8 xl:grid-cols-8 lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-1">
                            <div className="col-span-3">
                                <div className="bg-[#F9FAFB] rounded-md h-36 w-42 p-2">
                                    <p className="text-[16px] font-semibold text-[#344054] text-center">Target vs. Actual</p>
                                    <div>
                                        <ReactECharts style={{ height: "120px", width: "180px" }} option={Circle4}></ReactECharts>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <div className="bg-[#F9FAFB] rounded-md p-2 h-36 w-80" style={{ width: '338px' }}>
                                    <p className="text-[13px] font-semibold text-[#344054]">Income Trend</p>

                                    <div>
                                        <ReactECharts style={{ height: "110px", width: "320px" }} option={horizontal4}></ReactECharts>
                                    </div>
                                </div>
=======
                    </div>
                    <div className="col-span-3">
                        <div className="bg-[#F9FAFB] rounded-md p-2 h-36 w-80"style={{width:'338px'}}>
                            <p className="text-[13px] font-semibold text-[#344054]">Revenue Trend</p>
                            <div >
                                <ReactECharts style={{ height: "111px", width: "350px" }} option={Bar}></ReactECharts>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
            <div className="bg-white py-3 rounded-xl border  border-[#E1E6E3] px-4">
                <div className="flex justify-between mb-4">
                    <span className="font-semibold">Margin</span>
                    <div className="card flex justify-content-center text-black">
                        <Menu model={revenuelist} popup ref={menu} />
                        <Button icon="pi pi-ellipsis-v" style={{width:10, height:10}} severity="secondary" onClick={(e) => menu.current.toggle(e)} text/>
                    </div>
                </div>
                <div className="flex gap-2 mb-3 justify-evenly">
                    <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">GM before Provision</p>
                        <div className="flex items-center gap-1"> <b>&#8377;45 Cr</b>
                            <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">GM after Provision</p>
                        <div className="flex items-center gap-1"> <b>&#8377;50 Cr</b>
                            <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector.png' /><img src='Pink.png' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">GM%</p>
                        <div className="flex items-center gap-1"> <b>4%</b>
                            <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector.png' /><img src='Pink.png' /></span>
                            </div>
                        </div>
                    </div>
                </div>
               <div className="grid flex-row gap-2 mb-2 2xl:grid-cols-8 xl:grid-cols-8 lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-1">
                    <div className="col-span-3">
                        <div className="bg-[#F9FAFB] rounded-md h-36 w-42 p-2">
                            <p className="text-[16px] font-semibold text-[#344054] text-center">Target vs. Actual</p>
                            <div>
                                <ReactECharts style={{ height: "100px", width: "180px" }} option={Circle2}></ReactECharts>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="bg-[#F9FAFB] rounded-md p-2 h-36 w-80" style={{width:'338px'}}>
                            <p className="text-[13px] font-semibold text-[#344054]">Margin Trend</p>
                            <div>
                                <ReactECharts style={{ height: "111px", width: "350px" }} option={Bar2}></ReactECharts>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-3 rounded-xl border  border-[#E1E6E3] px-4">
                <div className="flex justify-between mb-4">
                    <span className="font-semibold">Cost/Expence</span>
                    <div className="card flex justify-content-center text-black">
                        <Menu model={revenuelist} popup ref={menu} />
                        <Button icon="pi pi-ellipsis-v" style={{width:10, height:10}} severity="secondary" onClick={(e) => menu.current.toggle(e)} text/>
                    </div>
                </div>
                <div className="flex gap-2 mb-3 justify-evenly">
                    <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">Expence</p>
                        <div className="flex items-center gap-1"> <b>&#8377;17 Cr</b>
                            <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">Expence Under Managment</p>
                        <div className="flex items-center gap-1"> <b>&#8377;10 Cr</b>
                            <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector.png' /><img src='Pink.png' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EUM</p>
                        <div className="flex items-center gap-1"> <b>4%</b>
                            <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector.png' /><img src='Pink.png' /></span>
                            </div>
                        </div>
                    </div>
                    
                </div>
               <div className="grid flex-row gap-2 2xl:grid-cols-8 xl:grid-cols-8 lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-1">
                    <div className="col-span-3">
                        <div className="bg-[#F9FAFB] rounded-md h-40 w-42 p-2">
                            <p className="text-[16px] font-semibold text-[#344054] text-center">Target vs. Actual</p>
                            <div>
                                <ReactECharts style={{ height: "100px", width: "180px" }} option={circle3}></ReactECharts>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="bg-[#F9FAFB] rounded-md p-2 h-40 w-80" style={{width:'338px'}}>
                            <p className="text-[13px] font-semibold text-[#344054]">Expence Trend</p>
                            <div>
                                <ReactECharts style={{ height: "111px", width: "350px" }} option={Bar3}></ReactECharts>
>>>>>>> Stashed changes
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< Updated upstream
        </>
=======
            <div className="bg-white py-3 rounded-xl border  border-[#E1E6E3] px-4">
                <div className="flex justify-between mb-4">
                    <span className="font-semibold">Income</span>
                    <div className="card flex justify-content-center text-black">
                        <Menu model={revenuelist} popup ref={menu} />
                        <Button icon="pi pi-ellipsis-v" style={{width:10, height:10}} severity="secondary" onClick={(e) => menu.current.toggle(e)} text/>
                    </div>
                </div>
                <div className="flex gap-2 mb-3 justify-evenly">
                    <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBIT</p>
                        <div className="flex items-center gap-1"> <b>&#8377;32.63 Cr</b>
                            <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBIT%</p>
                        <div className="flex items-center gap-1"> <b>4.1%</b>
                            <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector.png' /><img src='Pink.png' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBITDA</p>
                        <div className="flex items-center gap-1"> <b>&#8377;30 Cr</b>
                            <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBITDA</p>
                        <div className="flex items-center gap-1"> <b>&#8377;30 Cr</b>
                            <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBITDA</p>
                        <div className="flex items-center gap-1"> <b>&#8377;30 Cr</b>
                            <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid flex-row gap-2 mb-2 2xl:grid-cols-8 xl:grid-cols-8 lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-1">
                    <div className="col-span-3">
                        <div className="bg-[#F9FAFB] rounded-md h-36 w-42 p-2">
                            <p className="text-[16px] font-semibold text-[#344054] text-center">Target vs. Actual</p>
                            <div>
                                <ReactECharts style={{ height: "100px", width: "180px" }} option={Circle4}></ReactECharts>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="bg-[#F9FAFB] rounded-md p-2 h-36 w-80" style={{width:'338px'}}>
                            <p className="text-[13px] font-semibold text-[#344054]">Income Trend</p>

                            <div>
                                <ReactECharts style={{ height: "110px", width: "320px" }} option={horizontal4}></ReactECharts>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-3 rounded-xl border  border-[#E1E6E3] px-4">
                <div className="flex justify-between mb-4">
                    <span className="font-semibold">Income</span>
                    <div className="card flex justify-content-center text-black">
                        <Menu model={revenuelist} popup ref={menu} />
                        <Button icon="pi pi-ellipsis-v" style={{width:10, height:10}} severity="secondary" onClick={(e) => menu.current.toggle(e)} text/>
                    </div>
                </div>
                <div className="flex gap-2 mb-3 justify-evenly">
                    <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBIT</p>
                        <div className="flex items-center gap-1"> <b>&#8377;32.63 Cr</b>
                            <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBIT%</p>
                        <div className="flex items-center gap-1"> <b>4.1%</b>
                            <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector.png' /><img src='Pink.png' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBITDA</p>
                        <div className="flex items-center gap-1"> <b>&#8377;30 Cr</b>
                            <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBITDA</p>
                        <div className="flex items-center gap-1"> <b>&#8377;30 Cr</b>
                            <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBITDA</p>
                        <div className="flex items-center gap-1"> <b>&#8377;30 Cr</b>
                            <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid flex-row gap-2 mb-2 2xl:grid-cols-8 xl:grid-cols-8 lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-1">
                    <div className="col-span-3">
                        <div className="bg-[#F9FAFB] rounded-md h-36 w-42 p-2">
                            <p className="text-[16px] font-semibold text-[#344054] text-center">Target vs. Actual</p>
                            <div>
                                <ReactECharts style={{ height: "100px", width: "180px" }} option={Circle5}></ReactECharts>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="bg-[#F9FAFB] rounded-md p-2 h-36 w-80" style={{width:'338px'}}>
                            <p className="text-[13px] font-semibold text-[#344054]">Income Trend</p>

                            <div>
                                <ReactECharts style={{ height: "100px", width: "320px" }} option={line1}></ReactECharts>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-3 rounded-xl border  border-[#E1E6E3] px-4">
                <div className="flex justify-between mb-4">
                    <span className="font-semibold">Income</span>
                    <div className="card flex justify-content-center text-black">
                        <Menu model={revenuelist} popup ref={menu} />
                        <Button icon="pi pi-ellipsis-v" style={{width:10, height:10}} severity="secondary" onClick={(e) => menu.current.toggle(e)} text/>
                    </div>
                </div>
                <div className="flex gap-2 mb-3 justify-evenly">
                    <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBIT</p>
                        <div className="flex items-center gap-1"> <b>&#8377;32.63 Cr</b>
                            <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBIT%</p>
                        <div className="flex items-center gap-1"> <b>4.1%</b>
                            <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector.png' /><img src='Pink.png' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBITDA</p>
                        <div className="flex items-center gap-1"> <b>&#8377;30 Cr</b>
                            <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBITDA</p>
                        <div className="flex items-center gap-1"> <b>&#8377;30 Cr</b>
                            <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 w-2.4/12 border border-[#E1E6E3] rounded-[5px] grow"><p className="text-[12px] font-normal text-[#344054]">EBITDA</p>
                        <div className="flex items-center gap-1"> <b>&#8377;30 Cr</b>
                            <div class="arrowicon text-[#86909C] text-[14px] font-meduim "> <span className='flex'><img src='Vector (1).png' /><img src='Green.png' /></span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="grid flex-row gap-2 mb-2 2xl:grid-cols-8 xl:grid-cols-8 lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-1">
                    <div className="col-span-3">
                        <div className="bg-[#F9FAFB] rounded-md h-36 w-42 p-2">
                            <p className="text-[16px] font-semibold text-[#344054] text-center">Target vs. Actual</p>
                            <div>
                                <ReactECharts style={{ height: "100px", width: "180px" }} option={Circle6}></ReactECharts>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="bg-[#F9FAFB] rounded-md p-2 h-36 w-80" style={{width:'338px'}}>
                            <p className="text-[13px] font-semibold text-[#344054]">Income Trend</p>

                            <div>
                                <ReactECharts style={{ height: "120px", width: "320px" }} option={line2}></ReactECharts>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
    </>
>>>>>>> Stashed changes
    )
}
