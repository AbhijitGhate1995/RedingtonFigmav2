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
    return(
        <div className="mt-10 flex-row grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-4 mb-10">
            <div className="bg-white py-4 rounded-xl shadow-lg px-4">
            <div className="flex justify-between mb-5">
                        <div className=" font-semibold text-lg">Metrics</div>
                        <div>
                        <label className="text-sm font-light">SUB</label>
                        <Dropdown value={selectedDuration} onChange={(e) => setSelectedDuration(e.value)}
                        options={Duration}
                        optionLabel="name"
                        placeholder="5 Year"
                        className="w-22 md:w-12rem text-sm h-7 items-center"/>
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
                                          <label for='checkbox-table-search-1'>checkbox</label>
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
                                          <label for='checkbox-table-search-1'>checkbox</label>
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
                                          <label for='checkbox-table-search-1'>checkbox</label>
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
                                          <label for='checkbox-table-search-1'>checkbox</label>
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
                                          <label for='checkbox-table-search-1'>checkbox</label>
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
                                          <label for='checkbox-table-search-1'>checkbox</label>
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
                                          <label for='checkbox-table-search-1'>checkbox</label>
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
                                          <label for='checkbox-table-search-1'>checkbox</label>
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
                                          <label for='checkbox-table-search-1'>checkbox</label>
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
                                          <label for='checkbox-table-search-1'>checkbox</label>
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
                                          <label for='checkbox-table-search-1'>checkbox</label>
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
                            <ReactECharts option={}/>                            
                        </div>
                    </div>

        </div>
    )
}
