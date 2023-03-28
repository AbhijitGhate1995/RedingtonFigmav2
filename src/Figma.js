import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import ReactECharts from "echarts-for-react";
import { color } from "echarts";
import { SplitButton } from "primereact/splitbutton";
import { Dropdown } from "primereact/dropdown";

export default function RedingtonFigma() {
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

  // ToolBar

  const items = [
    {
      label: "Metrics",
    },
    {
      label: "Business",
    },
    {
      label: "Comparison",
    },
    { label: "Detailed" },
    {
      label: "Projections",
    },
  ];

  //  PieChart & BarLine Chart Number 1

  const PieChartdemo1 = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
      show: false,
    },
    series: [
      {
        type: "pie",
        radius: ["50", "50%"],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "center",
          itemStyle: {
            color: "black",
          },
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
        },
        data: [
          { value: 40, name: "38%", itemStyle: { color: "#E73369" } },
          { value: 60, itemStyle: { color: "#E4E7EC" } },
        ],
      },
    ],
  };
  const BarLineChart1 = {
    tile: {
      Text: "Revenue Trend",
    },
    legend: {
      top: "5%",
      left: "right",
      show: true,
    },
    xAxis: {
      type: "category",
      data: ["FY 19-20", "FY 20-21", "FY 21-22", "FY 22-23"],
    },

    yAxis: {
      type: "value",
    },
    grid: {
      left: "50",
      top: "40",
      bottom: "8",
    },

    series: [
      {
        itemStyle: { normal: { color: "#526652" } },
        name: "Revenue",
        data: [2900, 3800, 3300, 2100],
        type: "bar",
      },
      {
        itemStyle: { normal: { color: "#FDB022" } },
        name: "Trend Line",
        data: [2200, 3100, 2600, 3200],
        type: "line",
      },
    ],
  };

  // PieChart & BarLine Chart Number 2

  const PieChartdemo2 = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
      show: false,
    },
    series: [
      {
        type: "pie",
        radius: ["50", "50%"],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "center",
          itemStyle: {
            color: "black",
          },
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
        },
        data: [
          { value: 52, name: "52%", itemStyle: { color: "#B9B062" } },
          { value: 48, itemStyle: { color: "#E4E7EC" } },
        ],
      },
    ],
  };
  const BarLineChart2 = {
    tile: {
      Text: "Margin Trend",
    },
    legend: {
      top: "5%",
      left: "right",
      show: true,
    },
    xAxis: {
      type: "category",
      data: ["FY 19-20", "FY 20-21", "FY 21-22", "FY 22-23"],
    },

    yAxis: {
      type: "value",
    },
    grid: {
      left: "50",
      top: "40",
      bottom: "8",
    },

    series: [
      {
        itemStyle: { normal: { color: "#526652" } },
        name: "Margin",
        data: [30, 55, 90, 80],
        type: "bar",
      },
      {
        itemStyle: { normal: { color: "#FDB022" } },
        name: "Trend Line",
        data: [45, 70, 50, 75],
        type: "line",
      },
    ],
  };

  // PieChart & BarLine Chart Number 3

  const PieChartdemo3 = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
      show: false,
    },
    series: [
      {
        type: "pie",
        radius: ["50", "50%"],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "center",
          itemStyle: {
            color: "black",
          },
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
        },
        data: [
          { value: 80, name: "82%", itemStyle: { color: "#029046" } },
          { value: 20, itemStyle: { color: "#E4E7EC" } },
        ],
      },
    ],
  };
  const BarLineChart3 = {
    tile: {
      Text: "Expense Trend",
    },
    legend: {
      top: "5%",
      left: "right",
      show: true,
    },
    xAxis: {
      type: "category",
      data: ["FY 19-20", "FY 20-21", "FY 21-22", "FY 22-23"],
    },

    yAxis: {
      type: "value",
    },
    grid: {
      left: "50",
      top: "40",
      bottom: "8",
    },

    series: [
      {
        itemStyle: { normal: { color: "#978d88" } },
        name: "Expense",
        data: [7, 12, 17, 13],
        type: "bar",
      },
      {
        itemStyle: { normal: { color: "#FDB022" } },
        name: "Trend Line",
        data: [9, 14, 10, 14],
        type: "line",
      },
    ],
  };

  // PieChart & BarLine Chart Number 4

  const PieChartdemo4 = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
      show: false,
    },
    series: [
      {
        type: "pie",
        radius: ["50", "50%"],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "center",
          itemStyle: {
            color: "black",
          },
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
        },
        data: [
          { value: 70, name: "70%", itemStyle: { color: "#b9b062" } },
          { value: 30, itemStyle: { color: "#E4E7EC" } },
        ],
      },
    ],
  };
  const BarLineChart4 = {
    tile: {
      Text: "Income Trend",
    },
    legend: {
      top: "5%",
      left: "right",
      show: true,
    },
    xAxis: {
      type: "category",
      data: ["FY 19-20", "FY 20-21", "FY 21-22", "FY 22-23"],
    },

    yAxis: {
      type: "value",
    },
    grid: {
      left: "50",
      top: "40",
      bottom: "8",
    },

    series: [
      {
        itemStyle: { normal: { color: "#978d88" } },
        name: "Income",
        data: [720, 700, 800, 1000],
        type: "bar",
      },
      {
        itemStyle: { normal: { color: "#FDB022" } },
        name: "Trend Line",
        data: [780, 600, 500, 500],
        type: "line",
      },
    ],
  };

  // Pie chart & Bar Line Chart number 5

  const PieChartdemo5 = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
      show: false,
    },
    series: [
      {
        type: "pie",
        radius: ["50", "50%"],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "center",
          itemStyle: {
            color: "black",
          },
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
        },
        data: [
          { value: 70, name: "70%", itemStyle: { color: "#029046" } },
          { value: 30, itemStyle: { color: "#E4E7EC" } },
        ],
      },
    ],
  };
  const BarLineChart5 = {
    tile: {
      Text: "Profitability Trend",
    },
    legend: {
      top: "5%",
      left: "right",
      show: true,
    },
    xAxis: {
      type: "category",
      data: ["FY 19-20", "FY 20-21", "FY 21-22", "FY 22-23"],
    },

    yAxis: {
      type: "value",
    },
    grid: {
      left: "50",
      top: "40",
      bottom: "8",
    },

    series: [
      {
        itemStyle: { normal: { color: "#526652" } },
        name: "Revenue",
        data: [350, 550, 400, 700],
        type: "bar",
      },
      {
        itemStyle: { normal: { color: "#FDB022" } },
        name: "Trend Line",
        data: [770, 540, 740, 510],
        type: "line",
      },
    ],
  };
  // Horizontal bar & Bar Line Chart number 6

  const horizontalChart = {
    title: {
      text: "Working Capital Status",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: ["Opening", "Average", "Closing"],
    },
    series: [
      {
        itemStyle: { normal: { color: "#526652" } },
        type: "bar",
        data: [2500, 4300, 3500],
      },
    ],
  };
  const triplebar = {
    title: {
      text: "Working Capital Trend",
    },
    grid: {
      left: "60",
      top: "70",
      bottom: "20",
      right: "0",
    },
    legend: {
      top: 20,
    },
    tooltip: {},
    dataset: {
      source: [
        ["product", "Opening", "Closing", "Average", "Trend Line"],
        ["FY 19-20", 900, 1300, 1200, 1000],
        ["FY 20-21", 900, 1300, 1200, 1000],
        ["FY 21-22", 900, 1300, 1200, 1000],
        ["Fy 22-23", 900, 1300, 1200, 1000],
      ],
    },
    xAxis: { type: "category" },
    yAxis: {},
    series: [
      { type: "bar", itemStyle: { normal: { color: "#029046" } } },
      { type: "bar", itemStyle: { normal: { color: "#E73369" } } },
      { type: "bar", itemStyle: { normal: { color: "#526652" } } },
      { type: "line", itemStyle: { normal: { color: "#FDB022" } } },
    ],
  };

  return (
    <div>
      <div className="h-96">

        {/* Left SideBar start */}

        <nav className="grid w-16 flex-none bg-green-900 rounded-r-xl px-2 py-3 mt-1 mb-1 h-screen hover:w-44 group-hover:shadow-xl duration-500 z-10 group-hover:visible delay-150">
          <div className="justify-between h-[500px] flex-col">
            <img src="../Redington.png" alt="Redington" />
            <div className="">
              <button className="flex mt-7 px-2  cursor-pointer text-white origin-left">
                <img src="../Home.png" width={"20px"} className="mr-5" />
                <spn className="absolute opacity-0 invisible group-hover:animate-tooltip_show ml-2">
                  Home
                </spn>
              </button>
              <div className="flex mt-4 px-1 cursor-pointer text-white btn btn-bg-gray-900">
                <img src="../Bar.png" width={"30px"} className="mr-4" />
                <spn className="hidden">Dashboard</spn>
              </div>
            </div>
          </div>

          <div className="sidebar-footer">
            <span className="block mb-5 px-3">
              <img src="../Setting.png" width={"20px"} />
            </span>
            <span className="block px-3">
              <img src="../export.png" width={"20px"} />
            </span>
          </div>
        </nav>

        <header class=" p-0 w-full h-28 ml-24">
          <div className="flex items-center justify-between px-5">
            <div className="object-left">
              <div className="flex lg:flex-1 text-sm">Dashboard</div>
              <div className="text-xl ">At a Glance</div>
            </div>
            <div className="object-right-top flex item-center p-0 gap-5 items-center">
              <div className="w-6 h-6 items-center rounded-full bg-gray-200">
                <img
                  className="ml-1 mt-1"
                  src="../assest/img/notification.png"
                />
              </div>
              <div className="flex row center p-0 ">
                <Button
                  model={itemsdemo}
                  severity="secondary"
                  className=" hover:bg-white-900 z-10 h-12"
                  text
                >
                  <img src="../assest/img/Ellipse 1.png" className="w-auto" />
                  <img
                    src="../assest/img/Frame 36835.png"
                    className="w-auto m-2"
                  />
                  <img src="../assest/img/Arrow.png" />
                </Button>
              </div>
            </div>
          </div>

          {/* Left SideBar end */}

          {/* Right SideBar start */}


          <div className="flex row justify-between absolute h-14 top-[60px] mx-10">
            <div className="grid grid-cols-2 justify-evenly">
              <div className="flex justify-between">
                <Sidebar
                  visible={filter}
                  position="right"
                  onHide={() => setFilter(false)}
                  className="w-full md:w-20rem lg:w-30rem"
                >
                  <h2>Sidebar</h2>
                </Sidebar>
                <a className="" onClick={() => setVisible(true)}>
                  <img src="../Filter.png" />
                </a>
                <div className="flex justify-between mx-5">
                  <div className="flex-1 mt-0 mx-0">
                    <label className="text-sm font-light">Fiancial Year</label>
                    <Dropdown
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.value)}
                      options={Year}
                      optionLabel="name"
                      placeholder="2021-22"
                      className="w-22 md:w-12rem text-sm h-7 items-center m-auto pt-0"
                    />
                  </div>
                  {/* <div className="flex justify-between mx-5"> */}
                  <label className="text-sm font-light">SUB</label>
                  <Dropdown
                    value={selectedSUB}
                    onChange={(e) => setSelectedSUB(e.value)}
                    options={SUB}
                    optionLabel="name"
                    placeholder="Select a SUB"
                    className="w-22 md:w-12rem text-sm h-7 items-center"
                  />
                  {/* </div> */}
                </div>
              </div>

              <div className="flex justify-end mt-3">
                <Sidebar
                  visible={visible}
                  position="right"
                  onHide={() => setVisible(false)}
                  className=" md:w-20rem lg:w-30rem"
                  style={{ width: 700 }}
                >
                  <div className="grid grid-cols-4">
                    <div className=" gap-4">
                      <span >Finantial year</span>
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
                </Sidebar>
                <Button
                  onClick={() => setVisible(true)}
                  severity="secondary"
                  className="bg-surface-900 h-8"
                >
                  View Performance
                </Button>
              </div>
            </div>
          </div>
        </header>
      </div>

       {/* Right SideBar end */}

      {/* 6 Card Components */}

      <div className=" sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 mt-4 z-0 ">
        {/* 1st card of revenue */}
        <div className="flex justify-evenly">
          <div className="flex flex-col h-72 w-1/2 border-2 rounded-md border-gray-400 m-4">
            <div className=" flex flex-row justify-between">
              <div className="h-1/6  font-bold ml-2">Revenue</div>
              <div className="font-bold mr-2">
                <i className="pi pi-ellipsis-v"></i>
              </div>
            </div>
            <div className=" flex flex-row h-3/12 gap-2 m-4 sm:grid-cols-1 md:grid-cols-2">
              <div className="w-4/12 border-slate-900 border-2 rounded-md ">
                <div className=" text-sm ml-2"> Gross Sale </div>
                <div className="text-xl ml-2 flex flex-row">
                  {" "}
                  &#8377; 199 Cr
                  <span className="text-red-500 text-xs ml-2 mt-1"> ▼ 4%</span>
                </div>
              </div>
              <div className="w-4/12 border-slate-900 border-2 rounded-md">
                <div className="ml-2 text-sm"> Revenue </div>
                <div className="text-xl ml-2 flex flex-row">
                  {" "}
                  &#8377; 197 Cr
                  <span className="text-green-500 text-xs ml-2 mt-1">
                    {" "}
                    ▲ 4%
                  </span>
                </div>
              </div>
              <div className="w-4/12 border-slate-900 border-2 rounded-md">
                <div className=" ml-2 text-sm"> Revenue/Group </div>
                <div className="text-xl ml-2 flex flex-row">
                  {" "}
                  &#8377; 33 Cr
                  <span className="text-green-500 text-xs ml-2 content-end mt-1">
                    {" "}
                    ▲ 4%
                  </span>
                </div>
              </div>
            </div>
            <div className="grid ">
              <div className="text-xl ml-2 flex ">
                Target vs. Actual{" "}
                <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 2%</span>
              </div>
              <div className="flex " style={{ width: "500px" }}>
                <ReactECharts
                  style={{ height: "140px", width: "300px" }}
                  option={PieChartdemo1}
                />
                <ReactECharts
                  style={{ height: "140px", width: "350px" }}
                  option={BarLineChart1}
                />
              </div>
            </div>
          </div>

          {/* 2nd card */}

          <div className="flex flex-col h-72 m-4 border-2 rounded-md border-gray-400 w-1/2">
            <div className=" flex flex-row justify-between">
              <div className="h-1/6  font-bold ml-2">Margin</div>
              <div className="font-bold mr-2">
                <i className="pi pi-ellipsis-v"></i>
              </div>
            </div>
            <div className=" flex flex-row h-3/12 gap-2 m-4 md:grid-cols-2">
              <div className="w-4/12 border-slate-900 border-2 rounded-md ">
                <div className=" text-sm ml-2"> GM before Provision </div>
                <div className="text-xl ml-2 flex flex-row">
                  {" "}
                  &#8377; 45 Cr
                  <span className="text-green-500 text-xs ml-2 mt-1">
                    {" "}
                    ▲ 4%
                  </span>
                </div>
              </div>
              <div className="w-4/12 border-slate-900 border-2 rounded-md">
                <div className="ml-2 text-sm"> GM after Provision </div>
                <div className="text-xl ml-2 flex flex-row">
                  {" "}
                  &#8377; 50 Cr
                  <span className="text-green-500 text-xs ml-2 mt-1">
                    {" "}
                    ▲ 4%
                  </span>
                </div>
              </div>
              <div className="w-4/12 border-slate-900 border-2 rounded-md">
                <div className=" ml-2 text-sm"> GM % </div>
                <div className="text-xl ml-2 flex flex-row">
                  {" "}
                  4 %
                  <span className=" text-green-500 text-xs ml-2 content-end mt-1">
                    {" "}
                    ▲ 4%
                  </span>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="text-xl ml-2 flex ">
                Target vs. Actual{" "}
                <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 2%</span>
              </div>
              <div className="flex " style={{ width: "500px" }}>
                <ReactECharts
                  style={{ height: "140px", width: "300px" }}
                  option={PieChartdemo2}
                />
                <ReactECharts
                  style={{ height: "140px", width: "350px" }}
                  option={BarLineChart2}
                />
              </div>
            </div>
          </div>
        </div>
        {/* 3rd & 4th Card */}
        <div className="flex justify-evenly">
          <div className="flex flex-col h-72 w-1/2 border-2 rounded-md border-gray-400 m-4">
            <div className=" flex flex-row justify-between">
              <div className="h-1/6  font-bold ml-2">Cost/Expense</div>
              <div className="font-bold mr-2">
                <i className="pi pi-ellipsis-v"></i>
              </div>
            </div>
            <div className=" flex flex-row h-3/12 gap-2 m-4 sm:grid-cols-1 md:grid-cols-2">
              <div className="w-4/12 border-slate-900 border-2 rounded-md ">
                <div className=" text-sm ml-2"> Expense </div>
                <div className="text-xl ml-2 flex flex-row">
                  {" "}
                  &#8377; 17 Cr
                  <span className="text-red-500 text-xs ml-2 mt-1"> ▲ 4%</span>
                </div>
              </div>
              <div className="w-4/12 border-slate-900 border-2 rounded-md">
                <div className="ml-2 text-sm"> Expense Under Management </div>
                <div className="text-xl ml-2 flex flex-row">
                  {" "}
                  &#8377; 10 Cr
                  <span className="text-green-500 text-xs ml-2 mt-1">
                    {" "}
                    ▲ 4%
                  </span>
                </div>
              </div>
              <div className="w-4/12 border-slate-900 border-2 rounded-md">
                <div className=" ml-2 text-sm"> EUM % </div>
                <div className="text-xl ml-2 flex flex-row">
                  {" "}
                  59%
                  <span className="text-green-500 text-xs ml-2 content-end mt-1">
                    {" "}
                    ▲ 4%
                  </span>
                </div>
              </div>
            </div>
            <div className="grid ">
              <div className="text-xl ml-2 flex ">
                Target vs. Actual{" "}
                <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 2%</span>
              </div>
              <div className="flex " style={{ width: "500px" }}>
                <ReactECharts
                  style={{ height: "140px", width: "300px" }}
                  option={PieChartdemo3}
                />
                <ReactECharts
                  style={{ height: "140px", width: "350px" }}
                  option={BarLineChart3}
                />
              </div>
            </div>
          </div>

          {/* 4th card  */}

          <div className="flex flex-col h-72 m-4 border-2 rounded-md border-gray-400 w-1/2">
            <div className=" flex flex-row justify-between">
              <div className="h-1/6  font-bold ml-2"> Income </div>
              <div className="font-bold mr-2">
                <i className="pi pi-ellipsis-v"></i>
              </div>
            </div>
            <div className=" flex justify-evenly h-3/12 gap-2 m-4 md:grid-cols-2">
              <div className="w-2.4/12 border-slate-900 border-2 rounded-md ">
                <div className=" text-sm ml-2"> EBIT </div>
                <div className="text-xl ml-2 flex flex-row">
                  {" "}
                  &#8377; 32.6 Cr
                  <span className="text-green-500 text-xs ml-2 mt-1">
                    {" "}
                    ▲ 4%
                  </span>
                </div>
              </div>
              <div className="w-2.4/12 border-slate-900 border-2 rounded-md">
                <div className="ml-2 text-sm"> EBIT % </div>
                <div className="text-xl ml-2 flex flex-row">
                  {" "}
                  4.1%
                  <span className="text-green-500 text-xs ml-2 mt-1">
                    {" "}
                    ▲ 4%
                  </span>
                </div>
              </div>
              <div className="w-2.4/12 border-slate-900 border-2 rounded-md">
                <div className=" ml-2 text-sm"> EBITDA </div>
                <div className="text-xl ml-2 flex flex-row">
                &#8377; 30 Cr
                  <span className=" text-green-500 text-xs ml-2 content-end mt-1">
                    {" "}
                    ▲ 4%
                  </span>
                </div>
              </div>
              <div className="w-2.4/12 border-slate-900 border-2 rounded-md">
                <div className="ml-2 text-sm"> EBITDA/ Unit </div>
                <div className="text-xl ml-2 flex flex-row">
                  {" "}
                  2.23
                  <span className="text-green-500 text-xs ml-2 mt-1">
                    {" "}
                    ▲ 4%
                  </span>
                </div>
              </div>
              <div className="w-2.4/12 border-slate-900 border-2 rounded-md">
                <div className="ml-2 text-sm"> EBITDA % </div>
                <div className="text-xl ml-2 flex flex-row">
                  {" "}
                  2%
                  <span className="text-green-500 text-xs ml-2 mt-1">
                    {" "}
                    ▲ 1%
                  </span>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="text-xl ml-2 flex ">
                Target vs. Actual{" "}
                <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 2%</span>
              </div>
              <div className="flex " style={{ width: "500px" }}>
                <ReactECharts
                  style={{ height: "140px", width: "300px" }}
                  option={PieChartdemo4}
                />
                <ReactECharts
                  style={{ height: "140px", width: "350px" }}
                  option={BarLineChart4}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 5rd & 6th card  */}
        <div className="flex justify-evenly">
          <div className="flex flex-col h-72 w-1/2 border-2 rounded-md border-gray-400 m-4">
            <div className=" flex flex-row justify-between">
              <div className="h-1/6  font-bold ml-2"> Profitability </div>
              <div className="font-bold mr-2">
                <i className="pi pi-ellipsis-v"></i>
              </div>
            </div>
            <div className=" flex flex-row h-3/12 gap-2 m-4 sm:grid-cols-1 md:grid-cols-2">
              <div className="w-4/12 border-slate-900 border-2 rounded-md ">
                <div className=" text-sm ml-2"> PBT </div>
                <div className="text-xl ml-2 flex flex-row">
                  {" "}
                  &#8377; 32.6 Cr
                  <span className="text-red-500 text-xs ml-2 mt-1"> ▲ 4%</span>
                </div>
              </div>
              <div className="w-4/12 border-slate-900 border-2 rounded-md">
                <div className="ml-2 text-sm"> PAT </div>
                <div className="text-xl ml-2 flex flex-row">
                  {" "}
                  &#8377; 23.8 Cr
                  <span className="text-green-500 text-xs ml-2 mt-1">
                    {" "}
                    ▲ 4%
                  </span>
                </div>
              </div>
              <div className="w-4/12 border-slate-900 border-2 rounded-md">
                <div className=" ml-2 text-sm"> PAT % </div>
                <div className="text-xl ml-2 flex flex-row">
                  {" "}
                  3.00%
                  <span className="text-green-500 text-xs ml-2 content-end mt-1">
                    {" "}
                    ▲ 4%
                  </span>
                </div>
              </div>
            </div>
            <div className="grid ">
              <div className="text-xl ml-2 flex ">
                Target vs. Actual{" "}
                <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 2%</span>
              </div>
              <div className="flex " style={{ width: "500px" }}>
                <ReactECharts
                  style={{ height: "140px", width: "300px" }}
                  option={PieChartdemo5}
                />
                <ReactECharts
                  style={{ height: "140px", width: "350px" }}
                  option={BarLineChart5}
                />
              </div>
            </div>
          </div>  

          {/* 6th card of Margin */}

          <div className="flex flex-col h-72 m-4 border-2 rounded-md border-gray-400 w-1/2">
            <div className=" flex flex-row justify-between">
              <div className="h-1/6  font-bold ml-2">
                {" "}
                Working Capital Trend{" "}
              </div>
              
            </div>
            <div className=" flex justify-evenly h-3/12 gap-2 m-4 md:grid-cols-2">
              <div className="w-4/12 border-slate-900 border-2 rounded-md ">
                <div className=" text-sm ml-2"> WC Turns </div>
                <div className="text-xl ml-2 flex flex-row">
                  {" "}
                  15
                  <span className="text-green-500 text-xs ml-2 mt-1">
                    {" "}
                    ▲ 114%
                  </span>
                </div>
              </div>
              <div className="w-4/12 border-slate-900 border-2 rounded-md">
                <div className="ml-2 text-sm"> ROWC </div>
                <div className="text-xl ml-2 flex flex-row">
                  {" "}
                  54
                  <span className="text-green-500 text-xs ml-2 mt-1">
                    {" "}
                    ▲ 30%
                  </span>
                </div>
              </div>
              <div className="w-4/12 border-slate-900 border-2 rounded-md">
                <div className=" ml-2 text-sm"> WC Days </div>
                <div className="text-xl ml-2 flex flex-row">
                  25
                  <span className=" text-green-500 text-xs ml-2 content-end mt-1">
                    {" "}
                    ▲ 49%
                  </span>
                </div>
              </div>
            </div>
            <div className="grid h-max">
              <div className="flex w-full" style={{ width: "500px" }}>
                <ReactECharts className="w-1/2 justify-between"
                  style={{ height: "170px", width: "370px" }}
                  option={horizontalChart}
                />
                <ReactECharts className="w-1/2 justify-end"
                  style={{ height: "170px", width: "400px" }}
                  option={triplebar}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
