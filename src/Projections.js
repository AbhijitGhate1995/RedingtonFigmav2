import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { ProductServicE } from "./ProductServicE";
import { ProductDimension } from "./ProductDimension";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function Projections() {
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
  const [selectedRegion, setSelectedRegion] = useState(null);
  const Region = [
    { name: "Region", code: "All" },
    { name: "Target", code: "All" },
    { name: "LP", code: "All" },
    { name: "LY", code: "All" },
  ];
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
      bottom: "3%",
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
  const BarlineChart = {
    legend: {
      bottom: "1%",
      left: "left",
      show: true,
    },
    xAxis: {
      type: "category",
      data: ["2022-23", "2023-24", "2024-25", "2025-26", "2026-27"],
    },

    yAxis: {
      type: "value",
    },
    grid: {
      bottom: "50",
    },

    series: [
      {
        itemStyle: { normal: { color: "#385238" } },
        name: "Target",
        data: [220, 420, 500, 590, 650],
        type: "bar",
      },
      {
        itemStyle: { normal: { color: "#FDB022" } },
        name: "Ach%",
        data: [220, 400, 490, 590, 650],
        type: "line",
      },
    ],
  };

  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductDimension.getProductsMini().then((data) => setProduct(data));
  }, []);
  useEffect(() => {
    ProductServicE.getProductsMini().then((data) => setProducts(data));
  }, []);

  return (
    <div className="mt-10 flex-row grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-4 mb-10">
      <div className="bg-white py-4 rounded-xl shadow-lg px-4 h-auto">
        <div className="flex justify-between mb-5">
          <div className=" font-semibold text-lg">Metrics</div>
          <div>
            <label className="text-sm font-light m-2">SBU <Dropdown
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.value)}
              options={Duration}
              optionLabel="name"
              placeholder="SBU"
              className="w-22 md:w-12rem text-xs h-7 items-center"
            /></label>
            
          </div>
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

      {/* 2nd part */}

      <div className="bg-white py-4 rounded-xl shadow-lg px-4">
        <div>
          <div>Projection Trend</div>
          <ReactECharts option={BarlineChart} style={{height:500}} />
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
            view by
            <Dropdown
              value={selectedSUB}
              onChange={(e) => setSelectedSUB(e.value)}
              options={SUB}
              optionLabel="name"
              placeholder="Software"
              className="w-22 md:w-12rem text-xs h-7 items-center"
            />
          </div>
        </div>
        <div>
          <ReactECharts option={horizontalChart2} />
        </div>
      </div>

    {/* 4th part */}

      <div className="bg-white py-4 rounded-xl shadow-lg px-4">
        <div className="flex justify-between">
          <div className=" text-lg font-semibold">
            {" "}
            Cross Dimension Analysis
          </div>
          <div className="grid">
            view by
            <Dropdown
              value={selectedSUB}
              onChange={(e) => setSelectedSUB(e.value)}
              options={SUB}
              optionLabel="name"
              placeholder="SUB"
              className="w-22 md:w-12rem text-xs h-7 items-center"
            />
          </div>

          <div className="grid">
            view by{" "}
            <Dropdown
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.value)}
              options={Region}
              optionLabel="name"
              placeholder="Software"
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
  );
}
export default Projections;
