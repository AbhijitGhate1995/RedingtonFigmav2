import React from "react";
import ReactECharts from "echarts-for-react";
import { Button } from "primereact/button";


export default function Metrics(){
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

                    </div>

                </div>
            </div>
        </div>
    )
}