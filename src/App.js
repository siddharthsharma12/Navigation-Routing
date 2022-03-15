import React from 'react';
import Home from './Home';
import Page3 from './Page3';
import Page2 from './Page2';
import Page4 from './Page4';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navigation from './Navigation';
// import {Switch } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navigation/>
    {/* <Switch> */}
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/Page2" element = {<Page2/>}/>
      <Route path = "/Page3" element = {<Page3/>}/>
      <Route path = "/Page4" element = {<Page4/>}/>
    </Routes>
    {/* </Switch> */}

    </BrowserRouter>

    </>
  )
}

export default App
