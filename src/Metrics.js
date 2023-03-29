import React,{useState} from "react";
import ReactECharts from "echarts-for-react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";


export default function Metrics(){

    const [selectedSUB, setSelectedSUB] = useState(null);
    const SUB = [
      { name: "SBU", code: "All" },
      { name: "Business Manager", code: "Cloud" },
      { name: "Vendor", code: "L & S" },
      { name: "Cost Center", code: "Sofware" },
    ];
    const [selectedRegion,setSelectedRegion]= useState(null);
    const Region = [
        {name : 'Region',code : 'All'},
        {name : 'Target',code : 'All'},
        {name : 'LP',code : 'All'},
        {name : 'LY',code : 'All'},
    ]

    const linechart1 ={
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              itemStyle: { normal: { color: "#385238" } },
              type: 'line',
              smooth: true,
              symbolSize : 40,
              label: {
                show: true
              },
              position: inside
            }
          ]
    };
    const horizontalChart2 ={
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {},
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['DellEmc', '#nNA', 'Networking', 'Software', 'ESS', 'Security']
          },
          series: [
            {
              type: 'bar',
              itemStyle: { normal: { color: "#029046" } },
              data: [6500, 5500, 4000, 3500, 2500, 1500]
            },
          ]

    }
    return(
        <div>
            <div className="mt-10 flex-row grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-4 mb-10">
                <div className=" bg-white py-4 rounded-xl shadow-lg px-4">
                    <div className="flex justify-between mb-5">
                        <div className=" font-semibold text-lg">Metrics</div>
                    </div>
                    <div className="relative overflow-x-auto sm:rounded-lg p-1">
                        <table className="w-full text-sm">
                            <thead>
                                <tr>
                                    <th scope="col" className=" p-4">
                                        <div className="flex items-center"></div>
                                    </th>
                                    <th scope="col" className="px-0 py-4">Metrics</th>
                                    <th scope="col" className="px-0 py-4">Target</th>
                                    <th scope="col" className="px-0 py-4">Achievement</th>
                                    <th scope="col" className="px-0 py-4">Target Var % </th>
                                    <th scope="col" className="px-0 py-4">Last Period </th>
                                    <th scope="col" className="px-0 py-4">Last Period Var % </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                          <label for='checkbox-table-search-1'>checkbox</label>
                                        </div>
                                    </td>
                                    <td>Gross Revenue (₹)</td>
                                    <td className="px-5 py-4"> ₹ 100 Cr</td>
                                    <td className="px-5 py-4"> ₹ 90 Cr</td>
                                    <td className="px-5 py-4"> 10% </td>
                                    <td className="px-5 py-4"> ₹ 100 Cr</td>
                                    <td className="px-5 py-4"> -11% </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                          <label for='checkbox-table-search-1'>checkbox</label>
                                        </div>
                                    </td>
                                    <td>Gross Margin Rate (%)</td>
                                    <td className="px-5 py-4"> ₹ 100 Cr</td>
                                    <td className="px-5 py-4"> ₹ 90 Cr</td>
                                    <td className="px-5 py-4"> 10% </td>
                                    <td className="px-5 py-4"> ₹ 100 Cr</td>
                                    <td className="px-5 py-4"> -11% </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                          <label for='checkbox-table-search-1'>checkbox</label>
                                        </div>
                                    </td>
                                    <td>GM without provision</td>
                                    <td className="px-5 py-4"> ₹ 100 Cr</td>
                                    <td className="px-5 py-4"> ₹ 90 Cr</td>
                                    <td className="px-5 py-4"> 10% </td>
                                    <td className="px-5 py-4"> ₹ 100 Cr</td>
                                    <td className="px-5 py-4"> -11% </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                          <label for='checkbox-table-search-1'>checkbox</label>
                                        </div>
                                    </td>
                                    <td>GM after provision</td>
                                    <td className="px-5 py-4"> ₹ 100 Cr</td>
                                    <td className="px-5 py-4"> ₹ 90 Cr</td>
                                    <td className="px-5 py-4"> 10% </td>
                                    <td className="px-5 py-4"> ₹ 100 Cr</td>
                                    <td className="px-5 py-4"> -11% </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                          <label for='checkbox-table-search-1'>checkbox</label>
                                        </div>
                                    </td>
                                    <td>Stock Provision</td>
                                    <td className="px-5 py-4"> ₹ 100 Cr</td>
                                    <td className="px-5 py-4"> ₹ 90 Cr</td>
                                    <td className="px-5 py-4"> 10% </td>
                                    <td className="px-5 py-4"> ₹ 100 Cr</td>
                                    <td className="px-5 py-4"> -11% </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                          <label for='checkbox-table-search-1'>checkbox</label>
                                        </div>
                                    </td>
                                    <td> Transaction Margin </td>
                                    <td className="px-5 py-4"> ₹ 100 Cr</td>
                                    <td className="px-5 py-4"> ₹ 90 Cr</td>
                                    <td className="px-5 py-4"> 10% </td>
                                    <td className="px-5 py-4"> ₹ 100 Cr</td>
                                    <td className="px-5 py-4"> -11% </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className=" bg-white py-4 rounded-xl shadow-lg px-4">
                    <div className="flex justify-between">
                        <div className=" text-lg font-semibold"> Trend Analysis</div>
                        <Button className=" text-base rounded-md">Compare</Button>
                    </div>
                    <div>
                        <ReactECharts option={linechart1}></ReactECharts>

                    </div>

                </div>
                <div className="bg-white py-4 rounded-xl shadow-lg px-4">
                    <div className="flex justify-between">
                        <div className=" text-lg font-semibold"> Break down by Dimensions</div>
                        <div>view by</div>
                        <label className="text-sm font-light">SUB</label>
                        <Dropdown
                        value={selectedSUB}
                        onChange={(e) => setSelectedSUB(e.value)}
                        options={SUB}
                        optionLabel="name"
                        placeholder="Select a SUB"
                        className="w-22 md:w-12rem text-sm h-7 items-center"/>
                        </div>
                        <div>
                            <ReactECharts option={horizontalChart2}/>
                        </div>

                </div>
                <div className="bg-white py-4 rounded-xl shadow-lg px-4">
                    <div className="flex justify-between">
                        <div className=" text-lg font-semibold"> Cross Dimension Analysis</div>
                        <div>view by</div>
                        <label className="text-sm font-light">SUB</label>
                        <Dropdown
                        value={selectedSUB}
                        onChange={(e) => setSelectedSUB(e.value)}
                        options={SUB}
                        optionLabel="name"
                        placeholder="SUB"
                        className="w-22 md:w-12rem text-sm h-7 items-center"/>
                        </div>
                        <div>view by</div>
                        <label className="text-sm font-light">Compare With</label>
                        <Dropdown
                        value={selectedRegion}
                        onChange={(e) => setSelectedRegion(e.value)}
                        options={Region}
                        optionLabel="name"
                        placeholder="Region"
                        className="w-22 md:w-12rem text-sm h-7 items-center"/>
                        </div>
                        <div>   
                        <table className="w-full text-sm">
                            <thead>
                                <tr>
                                    <th scope="col" className=" p-4">
                                        <div className="flex items-center"></div>
                                    </th>
                                    <th scope="col" className="px-0 py-4">SBU</th>
                                    <th scope="col" className="px-0 py-4">South</th>
                                    <th scope="col" className="px-0 py-4">North</th>
                                    <th scope="col" className="px-0 py-4">East</th>
                                    <th scope="col" className="px-0 py-4">West </th>
                                    <th scope="col" className="px-0 py-4">Central </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                          <label for='checkbox-table-search-1'>checkbox</label>
                                        </div>
                                    </td>
                                    <td> + Cloud </td>
                                    <td className="px-5 py-4"> ₹50 Cr</td>
                                    <td className="px-5 py-4"> ₹50 Cr</td>
                                    <td className="px-5 py-4"> ₹50 Cr </td>
                                    <td className="px-5 py-4"> ₹50 Cr</td>
                                    <td className="px-5 py-4"> ₹50 Cr</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                          <label for='checkbox-table-search-1'>checkbox</label>
                                        </div>
                                    </td>
                                    <td> + L&S </td>
                                    <td className="px-5 py-4"> ₹50 Cr</td>
                                    <td className="px-5 py-4"> ₹50 Cr</td>
                                    <td className="px-5 py-4">₹50 Cr </td>
                                    <td className="px-5 py-4"> ₹50 Cr</td>
                                    <td className="px-5 py-4"> ₹50 Cr</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                          <label for='checkbox-table-search-1'>checkbox</label>
                                        </div>
                                    </td>
                                    <td> + Software</td>
                                    <td className="px-5 py-4"> ₹50 Cr</td>
                                    <td className="px-5 py-4"> ₹50 Cr</td>
                                    <td className="px-5 py-4"> ₹50 Cr </td>
                                    <td className="px-5 py-4"> ₹50 Cr</td>
                                    <td className="px-5 py-4"> ₹50 Cr </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                          <label for='checkbox-table-search-1'>checkbox</label>
                                        </div>
                                    </td>
                                    <td> + Security </td>
                                    <td className="px-5 py-4"> ₹50 Cr</td>
                                    <td className="px-5 py-4"> ₹50 Cr</td>
                                    <td className="px-5 py-4"> ₹50 Cr </td>
                                    <td className="px-5 py-4"> ₹50 Cr</td>
                                    <td className="px-5 py-4"> ₹50 Cr </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                          <label for='checkbox-table-search-1'>checkbox</label>
                                        </div>
                                    </td>
                                    <td> + ESS</td>
                                    <td className="px-5 py-4"> ₹50 Cr</td>
                                    <td className="px-5 py-4"> ₹50 Cr</td>
                                    <td className="px-5 py-4">₹50 Cr </td>
                                    <td className="px-5 py-4"> ₹50 Cr</td>
                                    <td className="px-5 py-4"> ₹50 Cr </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                          <label for='checkbox-table-search-1'>checkbox</label>
                                        </div>
                                    </td>
                                    <td> + Networking </td>
                                    <td className="px-5 py-4"> ₹50 Cr </td>
                                    <td className="px-5 py-4"> ₹50 Cr </td>
                                    <td className="px-5 py-4"> ₹50 Cr </td>
                                    <td className="px-5 py-4"> ₹50 Cr </td>
                                    <td className="px-5 py-4"> ₹50 Cr </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                </div>
            </div>
    )
}