
import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import ReactECharts from 'echarts-for-react';
import { ProductService } from "./Services";
import { ProductDimension } from "./ProductDimension";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {Link} from 'react-router-dom';

export default function Business() {
    const [selectedSUB, setSelectedSUB] = useState(null);
    const SUB = [
        { name: "SBU", code: "All" },
        { name: "Business Manager", code: "Cloud" },
        { name: "Vendor", code: "L & S" },
        { name: "Cost Center", code: "Sofware" },
    ];
    const [selectedRegion, setSelectedRegion] = useState(null);
    const Region = [
        { name: "Region", code: "All" },
        { name: "Target", code: "All" },
        { name: "LP", code: "All" },
        { name: "LY", code: "All" },
    ];
    const [product, setProduct] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        ProductDimension.getProductsMini().then((data) => setProduct(data));
    }, []);
    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);
    const [selectedCity, setSelectedCity] = useState(null);
    const demo = [
        { name: 'Compare', code: 'NY' },
        { name: 'Target', code: 'RM' },
        { name: 'LP', code: 'LDN' },
        { name: 'LY', code: 'IST' },

    ];
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '1%',
            right: '2%',
            bottom: '8%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Ab'],

                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '30%',
                data: [300, 155, 200, 334, 390, 330, 220, 333],
                color: '#029046',
            }
        ]
    };
    const [selectedYear, setSelectedYear] = useState(null);
    const Year = [
        { name: "2018-19", code: "NY" },
        { name: "2019-20", code: "RM" },
        { name: "2020-21", code: "LDN" },
        { name: "2021-22", code: "IST" },
        { name: "2022-2023", code: "PRS" },
    ];
   
    return (
        <>
            <div className='bg-slate-100' >

            <div class="grid grid-cols-7 gap-4 ">
                <div className='col-span-2'>
                    <div className='bg-[#262D29] text-white py-3 max-h-full w-auto rounded-xl border  border-[#E1E6E3] px-4 '>
                        <p className=' text-green-600 p-3 font-semibold'>Buisness Insight</p>
                        <ul>
                            <li className='leading-10  tracking-wide text-base bg-[#029046] rounded-md'>1.Sed do eiusmod temporolore magna.</li>
                            <li className='leading-10   tracking-wide text-base'>2.Sed do eiusmod tempor e magna aliqua.</li>
                            <li className='leading-10  tracking-wide text-base'>3.Ut enim ad minim veniam, llamco laboris nisi </li>
                            <li className='leading-10   tracking-wide text-base'>4.Commodo consequat. Duis aut in voluptate </li>
                            <li className='leading-10   tracking-wide text-base'>5.Excepteur sint occaecat c culim id est laborum.</li>
                            <li className='leading-10   tracking-wide text-base'>6.Sed do eiusmod temporolore magna aliqua.</li>
                            <li className='leading-10   tracking-wide text-base'>7.Sed do eiusmod tempor e magna aliqua.</li>
                            <li className='leading-10   tracking-wide text-base'>8.Ut enim ad minim veniam, llamco laboris nisi </li>
                            <li className='leading-10   tracking-wide text-base'>9.Commodo consequat. Duis aut in voluptate </li>
                            <li className='leading-10  tracking-wide text-base'>10.Excepteur sint occaecat c culim id est laborum.</li>
                        </ul>
                    </div>
                </div>
                <div className='col-span-3'>
                    <div class="grid grid-rows-2 gap-4  ">

                        <div className='bg-white py-3 rounded-xl shadow-xl  border h-96 border-[#E1E6E3] px-4 '>
                            <div>
                                <h2 className='flex text-lg justify-between font-semibold'>Chart <div >
                                    <div className="grid">

                                        <Dropdown
                                            value={selectedRegion}
                                            onChange={(e) => setSelectedRegion(e.value)}
                                            options={Region}
                                            optionLabel="name"
                                            placeholder="Compare"
                                            className="w-22 md:w-12rem text-xs h-7 items-center"
                                        />

                                    </div></div></h2>

                                <div className='max-w-3xl h-72'>
                                    <ReactECharts option={option}></ReactECharts>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-xl shadow-xl  border-[#E1E6E3] px-4 '>
                            <div>
                                <div className=" flex flex-row justify-between mt-3">
                                    <div className='text-lg justify-between font-semibold'>Cross Dimentional Analysis</div>
                                    <div className="grid">

                                        <Dropdown
                                            value={selectedRegion}
                                            onChange={(e) => setSelectedRegion(e.value)}
                                            options={Region}
                                            optionLabel="name"
                                            placeholder="Compare"
                                            className="w-22 md:w-12rem text-xs h-7 items-center"
                                        />

                                    </div>

                                </div>


                                <div className=" mt-2">
                                    <DataTable value={product}>
                                        <Column field="SBU" header="SBU" sortable></Column>
                                        <Column field="south" header="South" sortable></Column>
                                        <Column
                                            field="north"
                                            header="North"
                                            sortable
                                            style={{ width: "25%" }}
                                        ></Column>

                                        <Column field="central" header="Central" sortable></Column>
                                    </DataTable>
                                </div>
                            

                            </div>
                        </div>

                    </div>
                </div>


                <div className='col-span-2 '>
                    <div className='bg-white py-3 max-h-full shadow-xl rounded-xl border border-[#E1E6E3] px-4 '>
                        <div> <p className=' text-green-600 bg-slate-100 text-lg flex '><img style={{ width: "40px", height: "40px" }} src='Frame.png' /><div className='pl-2 pt-1'>Key Insight</div> </p></div>
                        <div className='list mb-5 w-80 pl-7 '>
                            <ul className="mt-4  justify-normal list-image-[url(check.png)] ... ">

                                <li className='leading p-2'>So I started to walk into the water.
                                    I won't lie to you boys, I was terrified.
                                    But I pressed on, and as I made my way past the breakers </li>
                                <hr></hr>
                                <li className='leading  p-2'>So I started to walk into the water.
                                    I won't lie to you boys, I was terrified.
                                    But I pressed on, and as I made my way past the breakers </li>
                                <hr></hr>
                                <li className='leading p-2'>So I started to walk into the water.
                                    I won't lie to you boys, I was terrified.
                                    But I pressed on, and as I made my way past the breakers </li>
                                <hr></hr>
                                <li className='leading p-2'>So I started to walk into the water.
                                    I won't lie to you boys, I was terrified.
                                    But I pressed on, and as I made my way past the breakers </li>
                                <hr></hr>
                                <li className='leading p-2'>So I started to walk into the water.
                                    I won't lie to you boys, I was terrified.
                                    But I pressed on, and as I made my way past the breakers </li>
                                <hr></hr>


                            </ul>
                        </div>
                    </div>

                </div>



            </div>
        </div>
        </>
    )
}
