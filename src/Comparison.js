import React, { useState, useEffect } from 'react'
import { Checkbox } from "primereact/checkbox";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Row } from 'primereact/row';
import { ProductService } from './Services';
import ReactECharts from 'echarts-for-react';

export default function Comparison() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' },
        { name: 'Software', key: 'S' },
        { name: 'Networking', key: 'N' }
    ];
    const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };
    const Circle1 = {
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
                    { value: 70, name: "70%", itemStyle: { color: '#029046' } },
                    { value: 30, itemStyle: { color: '#E4E7EC' }, },

                ]
            }
        ]

    };
    const Circle3 = {
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
                    { value: 70, name: "70%", itemStyle: { color: '#E73369' } },
                    { value: 30, itemStyle: { color: '#E4E7EC' }, },

                ]
            }
        ]

    };
    return (
        <div>
            <div className='bg-slate-100' >

                <div class="grid grid-cols-7 gap-4 ">
                    <div className='col-span-2 '>
                        <div className='bg-white py-3 max-h-full shadow-xl rounded-xl border border-[#E1E6E3] px-4 '>
                            <div > <p className='rounded-md text-green-600 bg-slate-100 text-lg flex '><div className='pl-2 pt-1 font-semibold'>SBU</div> </p></div>

                            <div className="grid-cols-1  mt-3 h-96">
                                {categories.map((category) => {
                                    return (
                                        <div key={category.key} className="flex align-items-center gap-1 ">
                                            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                                            <label htmlFor={category.key} className="ml-2 mb-2">
                                                {category.name}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>

                    </div>
                    <div className='col-span-5'>
                        <div>

                            <div className='bg-white py-3 rounded-xl shadow-xl  border  border-[#E1E6E3] px-4 '>
                                <div>
                                    <h2 className='flex text-lg justify-between font-semibold '>Comparison View </h2>
                                    <div className="card rounded-md ">
                                        <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>

                                            <Column field="category" header="category" sortable style={{ width: '25%' }}></Column>
                                            <Column field="cloud" header="Cloud" sortable style={{ width: '25%' }}></Column>
                                            <Column field="ls" header="L&S" sortable style={{ width: '25%' }}></Column>
                                            <Column field="quantity" header="Security" sortable style={{ width: '25%' }}></Column>

                                        </DataTable>
                                    </div>

                                </div>
                            </div>
                            <div className='bg-white mt-4 py-3 rounded-xl shadow-xl  border-[#E1E6E3] px-4 '>
                                <div>
                                    <div className='grid grid-cols-4'>
                                        <div>
                                            <div className=' pt-3 w-52'><h1 className='text-center font-semibold'>Target Achivement</h1> <img src='../money.png'></img></div>

                                        </div>

                                        <div> <ReactECharts style={{ height: "240px", width: "140px" }} option={Circle1}></ReactECharts><h1 className='pl-12 font-semibold'>Cloud</h1></div>
                                        <div> <ReactECharts style={{ height: "240px", width: "140px" }} option={Circle2}></ReactECharts><h1 className='pl-12 font-semibold'>L&S</h1></div>
                                        <div> <ReactECharts style={{ height: "240px", width: "140px" }} option={Circle3}></ReactECharts><h1 className='pl-11 font-semibold'>Security</h1></div>

                                    </div>
                                </div>
                            </div>
                            <div className='bg-white mt-4 rounded-xl shadow-xl  border-[#91a498] px-4 '>
                                <div className='grid grid-cols-4'>
                                    <div>
                                        <div className=' pt-3 w-52'><h1 className='text-center font-semibold'>Target Achivement</h1> <img src='../money.png'></img></div>

                                    </div>

                                    <div> <ReactECharts style={{ height: "240px", width: "140px" }} option={Circle1}></ReactECharts><h1 className='pl-12 font-semibold'>Cloud</h1></div>
                                    <div> <ReactECharts style={{ height: "240px", width: "140px" }} option={Circle2}></ReactECharts><h1 className='pl-12 font-semibold'>L&S</h1></div>
                                    <div> <ReactECharts style={{ height: "240px", width: "140px" }} option={Circle3}></ReactECharts><h1 className='pl-11 font-semibold'>Security</h1></div>

                                </div>
                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
