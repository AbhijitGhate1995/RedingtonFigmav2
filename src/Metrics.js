import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "./ProductService";
import {ProdShop} from "./ProdShop";
import { ProductDimension } from "./ProductDimension";

export default function Matrics() {
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

  const linechart1 = {
    xAxis: {
      type: "category",
      data: ["Q1", "Q2", "Q3", "Q4", "Q1", "Q2", "Q3"],
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
    },

    series: [
      {
        data: [200, 30, 50, 96, 60, 76, 221],
        type: 'line',
        layout: 'none',
        coordinateSystem: 'cartesian2d',
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        symbolSize: 20,
        label: {
          show: true,
          position: "top",
          // backgroundColor: '#6a7985',
          // color:'#FFFFFF',
        },
      },
    ],
  };
  const horizontalChart2 = {
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
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: ["DellEmc", "#nNA", "Networking", "Software", "ESS", "Security"],
    },
    series: [
      {
        type: "bar",
        itemStyle: { normal: { color: "#029046" } },
        data: [6500, 5500, 4000, 3500, 2500, 1500],
      },
    ],
  };

  // Metrics Table
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProdShop.getProductsMini().then((data) => setProducts(data));
  }, []);


  // Dimention Table
  const [product, setProduct] = useState([]);

  useEffect(() => {
    ProductDimension.getProductsMini().then((data) => setProduct(data));
  }, []);

  
  return (
    <div>
      <div className="mt-10 flex-row grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-4 mb-10">
        <div className=" bg-white py-4 rounded-xl shadow-lg px-4">
          <div className="flex justify-between mb-5">
            <div className=" font-semibold text-lg">Metrics</div>
          </div>
          <div className="relative overflow-x-auto sm:rounded-lg p-1">
            <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
              <Column
                field="metrics"
                header="Matrics"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                field="target"
                header="Target"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                field="achievement"
                header="Achievement"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                field="targetvar"
                header="Target Var %"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                field="period"
                header="Matrics"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                field="var"
                header="Last Period Var %"
                sortable
                style={{ width: "25%" }}
              ></Column>
            </DataTable>
          </div>
        </div>

        {/* 2nd Part */}

        <div className=" bg-white py-4 rounded-xl shadow-lg px-4">
          <div className="flex justify-between">
            <div className=" text-lg font-semibold"> Trend Analysis</div>
            <Dropdown
                value={selectedSUB}
                onChange={(e) => setSelectedSUB(e.value)}
                options={SUB}
                optionLabel="name"
                placeholder="Compare"
                className="w-22 md:w-12rem text-sm h-7 items-center"
              />
          </div>
          <div>
            <ReactECharts option={linechart1} style={{height: 500}}></ReactECharts>
          </div>
          <div className="flex justify-evenly mb-0">
            <button className=" text-sm px-3 h-8 rounded w-32 bg-green-100">FY19-20</button>
            <button className=" text-sm px-3 h-8 rounded w-32 bg-green-100">FY19-20</button>
            <button className=" text-sm px-3 h-8 rounded w-32 bg-green-100">FY19-20</button>
            <button className=" text-sm px-3 h-8 rounded w-32 bg-green-100">FY19-20</button>
          </div>
        </div>

        {/* 3rd Part */}

        <div className="bg-white py-4 rounded-xl shadow-lg px-4">
          <div className="flex justify-between">
            <div className=" text-lg font-semibold">
              {" "}
              Break down by Dimensions
            </div>
            <div className="grid">
              view by{" "}
              <Dropdown
                value={selectedSUB}
                onChange={(e) => setSelectedSUB(e.value)}
                options={SUB}
                optionLabel="name"
                placeholder="SUB"
                className="w-22 md:w-12rem text-sm h-7 items-center"
              />
            </div>
          </div>
          <div>
            <ReactECharts option={horizontalChart2} style={{height: 450}} />
          </div>
        </div>

        {/*  4th Part */}

        <div className="bg-white py-4 rounded-xl shadow-lg px-4">
          <div className="flex justify-between">
            <div className=" text-lg font-semibold">
              {" "}
              Cross Dimension Analysis
            </div>
            <div className="grid">
              view by{" "}
              <Dropdown
                value={selectedSUB}
                onChange={(e) => setSelectedSUB(e.value)}
                options={SUB}
                optionLabel="name"
                placeholder="SUB"
                className="w-22 md:w-12rem text-sm h-7 items-center"
              />
            </div>
            <div className="grid">
              view by{" "}
              <Dropdown
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.value)}
                options={Region}
                optionLabel="name"
                placeholder="Region"
                className="w-22 md:w-12rem text-sm h-7 items-center"
              />
            </div>
          </div>

          <div className="mt-12">
            <DataTable value={product}>
              <Column field="SBU" header="SBU" sortable></Column>
              <Column field="south" header="South" sortable></Column>
              <Column
                field="north"
                header="North"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                field="east"
                header="East"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                field="west"
                header="West"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column field="central" header="Central" sortable></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
}
