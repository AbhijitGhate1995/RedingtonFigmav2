import React,{useState} from 'react';
import { Dropdown } from 'primereact/dropdown';

function Sidebarfilter() {
    const [selectedYear, setSelectedYear] = useState(null);
    const Year = [
      { name: "2018-19", code: "NY" },
      { name: "2019-20", code: "RM" },
      { name: "2020-21", code: "LDN" },
      { name: "2021-22", code: "IST" },
      { name: "2022-2023", code: "PRS" },
    ];
    const [selectedSUB, setSelectedSUB] = useState(null);
    const SUB = [
      { name: "Networking", code: "All" },
      { name: "Cloud", code: "Cloud" },
      { name: "L&S", code: "L & S" },
      { name: "Software", code: "Sofware" },
      { name: "ESS", code: "Sofware" },
      { name: "Security", code: "Sofware" },
      { name: "Dell EMC", code: "Sofware" },
    ];
    const [selectedOwner, setSelectedOwner] = useState(null);
    const Owner = [
      { name: "Dinesh", code: "All" },
      { name: "Mayur", code: "Cloud" },
      { name: "Others", code: "L & S" },
      { name: "Sufiyan", code: "Sofware" },
      { name: "Shivam", code: "Sofware" },
      { name: "Inactive", code: "Sofware" },
      { name: "Giridhar", code: "Sofware" },
      { name: "Vardharajan", code: "Sofware" },
      { name: "Krishnaprasad", code: "Sofware" },
      { name: "Swapna", code: "Sofware" },
      { name: "BUCODE", code: "Sofware" },
      { name: "Rajmolkan", code: "Sofware" },
      { name: "ALok", code: "Sofware" },
      { name: "Ram", code: "Sofware" },
    ];
    const [selectedVendor, setSelectedVendor] = useState(null);
    const Vendor = [
      { name: "Networking", code: "All" },
      { name: "Cloud", code: "Cloud" },
      { name: "L&S", code: "L & S" },
      { name: "Software", code: "Sofware" },
      { name: "ESS", code: "Sofware" },
      { name: "Security", code: "Sofware" },
      { name: "Dell EMC", code: "Sofware" },
    ];
    const [selectedProfit, setSelectedProfit] = useState(null);
    const Profit = [
      { name: "LSCL", code: "All" },
      { name: "MSOF", code: "Cloud" },
      { name: "CACL", code: "L & S" },
      { name: "AMFG", code: "Sofware" },
      { name: "MSIN", code: "Sofware" },
      { name: "IBSL", code: "Sofware" },
      { name: "MSID", code: "Sofware" },
      { name: "IBTS", code: "Sofware" },
      { name: "VSCL", code: "Sofware" },
      { name: "AUSW", code: "Sofware" },
      { name: "ICMS", code: "Sofware" },
      { name: "KFCL", code: "Sofware" },
      { name: "TRCL", code: "Sofware" },
      { name: "AWSC", code: "Sofware" },
      { name: "VLCL", code: "Sofware" },
      { name: "BUCL", code: "Sofware" },
      { name: "MSCL", code: "Sofware" },
      { name: "MSDN", code: "Sofware" },

    ];
  return (
    <div>sidebarfilter
        <div className='container'>
            <div className='grid grid-cols-2'>
                <div className='row'>
                <div className=" grid">
                    <label className="text-xl font-light text-center">Fiancial Year</label>
                    <Dropdown
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.value)}
                      options={Year}
                      optionLabel="name"
                      placeholder="--Select Year --"
                      className="w-22 md:w-12rem text-xl items-center m-auto pt-0"
                    />
                  </div>

                </div>
                <div className=" grid">
                    <label className="text-xl font-light text-center">SUB</label>
                    <Dropdown
                      value={selectedSUB}
                      onChange={(e) => setSelectedSUB(e.value)}
                      options={SUB}
                      optionLabel="name"
                      placeholder="--Select  --"
                      className="w-22 md:w-12rem text-xl items-center m-auto pt-0"
                    />
                  </div>
                <div className='grid'>
                <div className=" grid">
                    <label className="text-xl font-light text-center">Owner</label>
                    <Dropdown
                      value={selectedOwner}
                      onChange={(e) => setSelectedOwner(e.value)}
                      options={Owner}
                      optionLabel="name"
                      placeholder="--Select  --"
                      className="w-22 md:w-12rem text-xl items-center m-auto pt-0"
                    />
                  </div>

                </div>
                <div className=" grid">
                    <label className="text-xl font-light text-center">Vendor</label>
                    <Dropdown
                      value={selectedVendor}
                      onChange={(e) => setSelectedVendor(e.value)}
                      options={Vendor}
                      optionLabel="name"
                      placeholder="--Select  --"
                      className="w-22 md:w-12rem text-xl items-center m-auto pt-0"
                    />
                  </div>

                </div>
                <div className=" grid">
                    <label className="text-xl font-light text-center">Profit Center</label>
                    <Dropdown
                      value={selectedProfit}
                      onChange={(e) => setSelectedProfit(e.value)}
                      options={Profit}
                      optionLabel="name"
                      placeholder="--Select  --"
                      className=" md:w-12rem text-xl items-center m-auto pt-0"
                    />
                  </div>

                </div>
    </div>
  )
}

export default Sidebarfilter