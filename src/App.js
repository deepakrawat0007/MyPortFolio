import React from 'react';
// import { Counter } from './Redux/counter';
import PortFolio from './portfolio/portfolio';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import AboutMe from './portfolio/ABoutme';
import MyWork from './portfolio/mywork';


const App = ()=>{

  return(
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortFolio/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
        <Route path="/mywork" element={<MyWork/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
  }

export default App;