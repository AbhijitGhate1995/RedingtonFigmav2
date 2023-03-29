import React from 'react';
import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { Badge } from 'primereact/badge';
import ReactECharts from 'echarts-for-react';
import Table from './Table';
import Content from './Content';

function Main() {
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
    const [selectedYear, setSelectedYear] = useState(null);
    const Year = [
        { name: "2018-19", code: "2018-19" },
        { name: "2019-20", code: "2019-20" },
        { name: "2020-21", code: "2020-21" },
        { name: "2021-22", code: "2021-22" },
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
    
    return (
        <div className="bg-[url('../assest/img/Background.png')]">
            <div class="min-h-screen flex flex-col">
                <header class=" p-0 w-full h-auto m-0 p-0 sticky top-0 bg-[url('../assest/img/Background.png')]">
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
                    </header>
                <div class="flex-1 flex flex-col sm:flex-row">
                    <main class="flex-1">
                        <div className='sticky top-1'>
                            <Content/>
                        </div>
                        <br/>
                        <div className='container m-auto px-5' >
                        <Table/>
                        </div>
                       
                    </main>

                    <nav class="order-first sm:w-20">
                    <nav class={`grid w-16 flex-none bg-green-900 rounded-r-xl px-2 py-3 mt-1 mb-1 h-screen hover:w-44 group-hover:shadow-xl duration-500 z-10 fixed group-hover:visible delay-150 max-h-full`}>
                    <div>
                        <ul>
                            <div className='justify-between h-[500px] flex-col justify-between '>
                                <div className='flex'>
                                    <img src='../assest/img/Redington (India) 1.png' />
                                    {/* <img src='../assest/img/' /> */}
                                </div>

                                <div className='text-white'>
                                    <li>
                                        <button className='flex mt-7 px-2 hover:bg-green-500 hover:w-40  cursor-pointer text-white rounded-md'>
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
                    </nav>

                    
                </div>

            </div>
        </div>
    )
}

export default Main;
