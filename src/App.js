import React, {useEffect} from 'react';
import styled from "styled-components";
import panzoom from "panzoom";

import Map from "./components/Map";

import mapdata from './components/mapdata';

function App() {

  useEffect(() => {
    const scrollable = document.getElementById('scrollable');
    const panzoomInstance = panzoom(scrollable, {
        maxZoom: 5,
        minZoom: 0.1
      })
    panzoomInstance.zoomAbs(
        0, // initial x position
        5000, // initial y position
        1  // initial zoom 
      )
    panzoomInstance.moveTo(0,-50)
  },[])

  return (
    <>
      <div id = "scrollable">
        <Map data = {mapdata} height={1000} width={1000} />  
      </div>

    </>
  );
}

export default App;