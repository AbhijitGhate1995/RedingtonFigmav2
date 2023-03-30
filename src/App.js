import './App.css';
import Main from './Main';
import Metrics from './Metrics';
import Header from './Header';

import Comparison from './Comparison';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from './Content';
import Business from './Business';
import Projections from './Projections';
function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Header/>} />


          <Route path="/header/matrics" element={<Metrics />} />
          <Route path="/header/business" element={<Business/> } />
          <Route path="/header/comparison" element={<Comparison />} />
         <Route path="/header/main" element={<Main/>} />
         <Route path="/header/projections" element={<Projections/>} />





        </Routes>


      </BrowserRouter>

    </div>



  );
}

export default App;
