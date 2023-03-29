import React,{useState} from "react";
import ReactECharts from "echarts-for-react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

function Projections(){
    const [selectedDuration, setSelectedDuration] = useState(null);
    const Duration = [
      { name: "SBU", code: "All" },
      { name: "Business Manager", code: "Cloud" },
      { name: "Vendor", code: "L & S" },
      { name: "Cost Center", code: "Sofware" },
    ];
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
    ];
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
  };
    const BarlineChart = {
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
          data: ["2022-23", "2023-24", "2024-25", "2025-26","2026-27"],
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
            itemStyle: { normal: { color: "#385238" } },
            name: "Target",
            data: [220, 420, 500, 590,650],
            type: "bar",
          },
          {
            itemStyle: { normal: { color: "#FDB022" } },
            name: "Ach%",
            data: [220,400,490,590,650],
            type: "line",
          },
        ],
      };
    return(
        <div className="mt-10 flex-row grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-4 mb-10">
            <div className="bg-white py-4 rounded-xl shadow-lg px-4 h-auto">
            <div className="flex justify-between mb-5">
                        <div className=" font-semibold text-lg">Metrics</div>
                        <div>
                        <label className="text-sm font-light m-2">SBU</label>
                        <Dropdown value={selectedDuration} onChange={(e) => setSelectedDuration(e.value)}
                        options={Duration}
                        optionLabel="name"
                        placeholder="SBU"
                        className="w-22 md:w-12rem text-xs h-7 items-center"/>
                        </div>
                    </div>
                    <div className="relative overflow-x-auto sm:rounded-lg p-1">
                        <table className="w-full text-sm">
                            <thead>
                                <tr>
                                    <th scope="col" className=" p-4">
                                        <div className="flex items-center"></div>
                                    </th>
                                    <th scope="col" className="px-0 py-4">Metrics</th>
                                    <th scope="col" className="px-0 py-4">2024</th>
                                    <th scope="col" className="px-0 py-4">2025</th>
                                    <th scope="col" className="px-0 py-4">2026 </th>
                                    <th scope="col" className="px-0 py-4">2027 </th>
                                    <th scope="col" className="px-0 py-4">2028 </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                        </div>
                                    </td>
                                    <td>Gross Revenue (₹)</td>
                                    <td className="px-5 py-4"> ₹ 210 Cr</td>
                                    <td className="px-5 py-4"> ₹ 410 Cr</td>
                                    <td className="px-5 py-4"> ₹ 495 Cr </td>
                                    <td className="px-5 py-4"> ₹ 595 Cr</td>
                                    <td className="px-5 py-4"> ₹ 650 Cr </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                        </div>
                                    </td>
                                    <td>Product Revenue (₹)</td>
                                    <td className="px-5 py-4"> ₹ 210 Cr</td>
                                    <td className="px-5 py-4"> ₹ 410 Cr</td>
                                    <td className="px-5 py-4"> ₹ 495 Cr </td>
                                    <td className="px-5 py-4"> ₹ 595 Cr</td>
                                    <td className="px-5 py-4"> ₹ 650 Cr </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                        </div>
                                    </td>
                                    <td>Service revenue (₹) </td>
                                    <td className="px-5 py-4"> ₹ 210 Cr</td>
                                    <td className="px-5 py-4"> ₹ 410 Cr</td>
                                    <td className="px-5 py-4"> ₹ 495 Cr </td>
                                    <td className="px-5 py-4"> ₹ 595 Cr</td>
                                    <td className="px-5 py-4"> ₹ 650 Cr </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                        </div>
                                    </td>
                                    <td>Operating Revenue (₹)</td>
                                    <td className="px-5 py-4"> ₹ 210 Cr</td>
                                    <td className="px-5 py-4"> ₹ 410 Cr</td>
                                    <td className="px-5 py-4"> ₹ 495 Cr </td>
                                    <td className="px-5 py-4"> ₹ 595 Cr</td>
                                    <td className="px-5 py-4"> ₹ 650 Cr </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                        </div>
                                    </td>
                                    <td>Non-Operating Revenue (₹)</td>
                                    <td className="px-5 py-4"> ₹ 210 Cr</td>
                                    <td className="px-5 py-4"> ₹ 410 Cr</td>
                                    <td className="px-5 py-4"> ₹ 495 Cr </td>
                                    <td className="px-5 py-4"> ₹ 595 Cr</td>
                                    <td className="px-5 py-4"> ₹ 650 Cr </td>
                                   
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                        </div>
                                    </td>
                                    <td> Non-Profit Revenue (₹) </td>
                                    <td className="px-5 py-4"> ₹ 210 Cr</td>
                                    <td className="px-5 py-4"> ₹ 410 Cr</td>
                                    <td className="px-5 py-4"> ₹ 495 Cr </td>
                                    <td className="px-5 py-4"> ₹ 595 Cr</td>
                                    <td className="px-5 py-4"> ₹ 650 Cr </td>  
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                        </div>
                                    </td>
                                    <td> COGS (₹) </td>
                                    <td className="px-5 py-4"> ₹ 210 Cr</td>
                                    <td className="px-5 py-4"> ₹ 410 Cr</td>
                                    <td className="px-5 py-4"> ₹ 495 Cr </td>
                                    <td className="px-5 py-4"> ₹ 595 Cr</td>
                                    <td className="px-5 py-4"> ₹ 650 Cr </td>  
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                        </div>
                                    </td>
                                    <td> Accured Revenue (₹) </td>
                                    <td className="px-5 py-4"> ₹ 210 Cr</td>
                                    <td className="px-5 py-4"> ₹ 410 Cr</td>
                                    <td className="px-5 py-4"> ₹ 495 Cr </td>
                                    <td className="px-5 py-4"> ₹ 595 Cr</td>
                                    <td className="px-5 py-4"> ₹ 650 Cr </td>  
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                        </div>
                                    </td>
                                    <td> Deferred Revenue (₹) </td>
                                    <td className="px-5 py-4"> ₹ 210 Cr</td>
                                    <td className="px-5 py-4"> ₹ 410 Cr</td>
                                    <td className="px-5 py-4"> ₹ 495 Cr </td>
                                    <td className="px-5 py-4"> ₹ 595 Cr</td>
                                    <td className="px-5 py-4"> ₹ 650 Cr </td>  
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                        </div>
                                    </td>
                                    <td> Net Revenue (₹) </td>
                                    <td className="px-5 py-4"> ₹ 210 Cr</td>
                                    <td className="px-5 py-4"> ₹ 410 Cr</td>
                                    <td className="px-5 py-4"> ₹ 495 Cr </td>
                                    <td className="px-5 py-4"> ₹ 595 Cr</td>
                                    <td className="px-5 py-4"> ₹ 650 Cr </td>  
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded'/>
                                        </div>
                                    </td>
                                    <td> Revenue/Unit (₹) </td>
                                    <td className="px-5 py-4"> ₹ 210 Cr</td>
                                    <td className="px-5 py-4"> ₹ 410 Cr</td>
                                    <td className="px-5 py-4"> ₹ 495 Cr </td>
                                    <td className="px-5 py-4"> ₹ 595 Cr</td>
                                    <td className="px-5 py-4"> ₹ 650 Cr </td>  
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
            </div>
                    <div className="bg-white py-4 rounded-xl shadow-lg px-4">
                        <div>
                            <div>
                                Projection Trend
                            </div>
                            <ReactECharts option={BarlineChart}/>                            
                        </div>
                    </div>
                    <div className="bg-white py-4 rounded-xl shadow-lg px-4">
                    <div className="flex justify-between">
                        <div className=" text-lg font-semibold"> Break down by Dimensions</div>
                        <div className="grid">view by 
                        <Dropdown
                        value={selectedSUB}
                        onChange={(e) => setSelectedSUB(e.value)}
                        options={SUB}
                        optionLabel="name"
                        placeholder="Software"
                        className="w-22 md:w-12rem text-sm h-7 items-center"/></div>
                        </div>
                        <div>
                            <ReactECharts option={horizontalChart2}/>
                        </div>

                    </div>
                    <div className="bg-white py-4 rounded-xl shadow-lg px-4">
                    <div className="flex justify-between">
                        <div className=" text-lg font-semibold"> Cross Dimension Analysis</div>
                        <div className="grid">view by<Dropdown
                        value={selectedSUB}
                        onChange={(e) => setSelectedSUB(e.value)}
                        options={SUB}
                        optionLabel="name"
                        placeholder="SUB"
                        className="w-22 md:w-12rem text-sm h-7 items-center"/></div>
                        
                        <div className="grid">view by <Dropdown
                        value={selectedRegion}
                        onChange={(e) => setSelectedRegion(e.value)}
                        options={Region}
                        optionLabel="name"
                        placeholder="Software"
                        className="w-22 md:w-12rem text-sm h-7 items-center"/></div>
                        
                        </div>
                        
                        <div>   
                        <table className="w-full text-sm border-2 border-slate-600 mt-2">
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
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded ml-2'/>
                                        
                                        </div>
                                    </td>
                                    <td> + Cloud </td>
                                    <td className="px-5 py-4 bg-pink-100"> ₹50 Cr</td>
                                    <td className="px-5 py-4 bg-pink-100"> ₹50 Cr</td>
                                    <td className="px-5 py-4 bg-pink-100"> ₹50 Cr </td>
                                    <td className="px-5 py-4 bg-pink-100"> ₹50 Cr</td>
                                    <td className="px-5 py-4 bg-pink-100"> ₹50 Cr</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded ml-2'/>
                                        
                                        </div>
                                    </td>
                                    <td> + L&S </td>
                                    <td className="px-5 py-4 bg-pink-100"> ₹50 Cr</td>
                                    <td className="px-5 py-4 bg-pink-100"> ₹50 Cr</td>
                                    <td className="px-5 py-4 bg-pink-100">₹50 Cr </td>
                                    <td className="px-5 py-4 bg-pink-100"> ₹50 Cr</td>
                                    <td className="px-5 py-4 bg-pink-100"> ₹50 Cr</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded ml-2'/>
                                        
                                        </div>
                                    </td>
                                    <td> + Software</td>
                                    <td className="px-5 py-4 bg-green-100"> ₹50 Cr</td>
                                    <td className="px-5 py-4 bg-green-100"> ₹50 Cr</td>
                                    <td className="px-5 py-4 bg-green-100"> ₹50 Cr </td>
                                    <td className="px-5 py-4 bg-green-100"> ₹50 Cr</td>
                                    <td className="px-5 py-4 bg-green-100"> ₹50 Cr </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded ml-2'/>
                                        
                                        </div>
                                    </td>
                                    <td> + Security </td>
                                    <td className="px-5 py-4 bg-yellow-100"> ₹50 Cr</td>
                                    <td className="px-5 py-4 bg-yellow-100"> ₹50 Cr</td>
                                    <td className="px-5 py-4 bg-yellow-100"> ₹50 Cr </td>
                                    <td className="px-5 py-4 bg-yellow-100"> ₹50 Cr</td>
                                    <td className="px-5 py-4 bg-yellow-100"> ₹50 Cr </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded ml-2'/>
                                        
                                        </div>
                                    </td>
                                    <td> + ESS</td>
                                    <td className="px-5 py-4 bg-yellow-100"> ₹50 Cr</td>
                                    <td className="px-5 py-4 bg-yellow-100"> ₹50 Cr</td>
                                    <td className="px-5 py-4 bg-yellow-100"> ₹50 Cr </td>
                                    <td className="px-5 py-4 bg-yellow-100"> ₹50 Cr</td>
                                    <td className="px-5 py-4 bg-yellow-100"> ₹50 Cr </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div><input id="checkbox-table-search-1" type={"checkbox"} className=' w-4 h-4 text-green-600 bg-white border-gray-300 rounded ml-2'/>
                                        
                                        </div>
                                    </td>
                                    <td> + Networking </td>
                                    <td className="px-5 py-4 bg-green-200"> ₹50 Cr </td>
                                    <td className="px-5 py-4 bg-green-200"> ₹50 Cr </td>
                                    <td className="px-5 py-4 bg-green-200"> ₹50 Cr </td>
                                    <td className="px-5 py-4 bg-green-200"> ₹50 Cr </td>
                                    <td className="px-5 py-4 bg-green-200"> ₹50 Cr </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>

                    </div>
                    <div>

                    </div>

        </div>
    )
}
export default Projections;
