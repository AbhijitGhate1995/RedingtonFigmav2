import React, { useEffect } from 'react';
import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import ReactECharts from 'echarts-for-react';
import {Link, Outlet, useLocation} from 'react-router-dom';

function Content() {
    const [filter, setFilter] = useState(false);
    const [selectedYear, setSelectedYear] = useState(null);
    const Year = [
        { name: "2018-19", code: "NY" },
        { name: "2019-20", code: "RM" },
        { name: "2020-21", code: "LDN" },
        { name: "2021-22", code: "IST" },
        { name: "2022-2023", code: "PRS" },
    ];
    const [selectedSUB, setSelectedSUB] = useState(null);
    const SUB = [
        { name: "Networking", code: "All" },
        { name: "Cloud", code: "Cloud" },
        { name: "L&S", code: "L & S" },
        { name: "Software", code: "Sofware" },
        { name: "ESS", code: "Sofware" },
        { name: "Security", code: "Sofware" },
        { name: "Dell EMC", code: "Sofware" },
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
    const [visible, setVisible] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null); 
    const cities = [
        { name: "2018-19", code: "NY" },
        { name: "2019-20", code: "RM" },
        { name: "2020-21", code: "LDN" },
        { name: "2021-22", code: "IST" },
        { name: "2022-2023", code: "PRS" },
    ]; const [selectedKPI, setSelectedKpi] = useState(null);
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

    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState(null);
    useEffect(() => {
      setUrl(location.pathname);
    }, [location]);



    return (
        <div className=''>
        <div className='w-full m-2 mt-10 top-0 z-0'>
            <div className='flex'>
               
                    <div className='ml-6 w-36'>
                        <div className='text-sm'><Link to='/'>Go Back</Link> </div>
                        <div className='font-semibold text-2xl'>Revenue</div>
                    </div>
                     <div className='grid grid-cols-2 justify-between ml-28'>
                    <div className='w-auto'>
                        <div class="w-full border-b-4 border-green-200 Justify-center " >

                            <ul class="flex flex-col p-4 mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
                                <li>
                                    <Link to='/header/matrics'  className={"text-green-600" + (url === "/header/matrics" ?" active" : "text-black")}  >Metrics</Link>
                                </li>
                                <li>
                                    <Link to='/header/business' className={"text-green-600" + (url === "/header/business" ?" active" : "text-black")}  >Buisness</Link>
                                </li>
                                <li>
                                    <Link to='/header/comparison' className={"text-green-600" + (url === "/header/comparison" ?" active" : "text-black")} >Comparison</Link>
                                </li>
                                <li>
                                    <Link to='/header/detailed' className={"text-green-600" + (url === "/header/detailed" ?" active" : "text-black")} >Detailed</Link>
                                </li>
                                <li>
                                    <Link to='/header/projections' className={"text-green-600" + (url === "/header/projections" ?" active" : "text-black")} >Projections</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className=''>
                        <div className="flex justify-end">
                            <div className="items-end">
                                <div>
                                    <label className="text-sm font-light">Fiancial Year</label>
                                </div>
                                <Dropdown
                                    value={selectedYear}
                                    onChange={(e) => setSelectedYear(e.value)}
                                    options={Year}
                                    optionLabel="name"
                                    placeholder="Fiancial Year"
                                    className="w-auto md:w-12rem text-sm h-10 items-center m-auto pt-0"
                                />
                            </div>
                            <div className='ml-2'>
                                <div className='block '>
                                    <label className="text-sm font-light">KPIs </label>
                                </div >
                                <Dropdown
                                    value={selectedSUB}
                                    onChange={(e) => setSelectedSUB(e.value)}
                                    options={SUB}
                                    optionLabel="name"
                                    placeholder="Software"
                                    className="w-auto md:w-12rem text-sm h-10 items-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Outlet>

        </Outlet>
        </div>
    )
}

export default Content;
