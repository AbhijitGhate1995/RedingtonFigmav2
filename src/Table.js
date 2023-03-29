import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './ProductService';

export default function Table() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <>
        <div className="container m-auto bg-white overflow-y-auto">
            <div className='card border'>
            <div className='m-5'>
                        <div className='text-xl font-normal'>Detailed View</div>
                    </div>
                    <hr/>
            <div className="card">
                <DataTable value={products} removableSort tableStyle={{ minWidth: '50rem' }}>
                    <Column field="SUB" header="SUB" sortable style={{ width: '25%' }}></Column>
                    <Column field="ProfitCenter" header="Profit" sortable style={{ width: '25%' }}></Column>
                    <Column field="Vendor" header="Vendor" sortable style={{ width: '25%' }}></Column>
                    <Column field="Owner" header="Owner" sortable style={{ width: '25%' }}></Column>
                    <Column field="EBITA" header="EBITA" sortable style={{ width: '25%' }}></Column>
                    <Column field="EBITAPer" header="EBITA%" sortable style={{ width: '25%' }}></Column>
                    <Column field="EBIT" header="EBIT" sortable style={{ width: '25%' }}></Column>
                    <Column field="EBITUnit" header="EBIT/Unit" sortable style={{ width: '25%' }}></Column>
                    <Column field="EBITPer" header="EBIT%" sortable style={{ width: '25%' }}></Column>
                    <Column field="PBTPer" header="PBT%" sortable style={{ width: '25%' }}></Column>
                    <Column field="PAT" header="PAT" sortable style={{ width: '25%' }}></Column>
                    <Column field="PATPer" header="PAT%" sortable style={{ width: '25%' }}></Column>
                    <Column field="Target" header="Target" sortable style={{ width: '25%' }}></Column>
                    <Column field="TargetAchPer" header="Target Ach%" sortable style={{ width: '25%' }}></Column>
                </DataTable>
            </div>
            </div>
        </div>
        </>
    );
}