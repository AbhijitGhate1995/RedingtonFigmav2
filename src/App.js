import './App.css';
import Main from './Main';
import Metrics from './Metrics';
import Header from './Header';

import Comparison from './Comparison';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from './Content';
import Business from './Business';
import Projections from './Projections';
import Detailed from './Detailed';
import Home from './Home';
import Figma from './Figma';
function App() {
  return (
    <div>
      
             
          <BrowserRouter>
            
            <Routes>
              <Route path="/" element={<Header/>}>
              <Route path='/' element={<Home/>}/>

              <Route path='header/' element={<Content/>}>
              <Route path="/header/matrics" element={<Metrics />} />
              <Route path="/header/business" element={<Business />} />
              <Route path="/header/comparison" element={<Comparison />} />
              <Route path="/header/detailed" element={<Detailed />} />
              <Route path="/header/projections" element={<Projections />} />
             
              </Route>
              </Route>
            </Routes>
        
          </BrowserRouter>
         
    
    </div >



  );
}

export default App;
