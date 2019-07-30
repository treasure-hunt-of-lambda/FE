import React, {useEffect} from 'react';
import styled from "styled-components";
import panzoom from "panzoom";

import Map from "./components/Map";
import SideBar from "./components/SideBar";

import mapdata from './components/mapdata';

function App() {

  useEffect(() => {
    const scrollable = document.getElementById('scrollable');
    const panzoomInstance = panzoom(scrollable, {
        maxZoom: 5,
        minZoom: 1,
        bounds: true

      })
    panzoomInstance.zoomAbs(
        0, // initial x position
        0, // initial y position
        1  // initial zoom 
      )
    panzoomInstance.moveTo(0,0)
  },[])

  return (
    <>
      <Scrollable>
        <Map data = {mapdata} height={1000} width={1000} id = "scrollable"  />  
      </Scrollable>
      <SideBar/>
    </>
  );
}

export default App;

const Scrollable = styled.div`
  height: 100vh;
  width: 100vw;
`;