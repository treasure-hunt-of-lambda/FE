import React from 'react';
import styled from "styled-components";

import Map from "./components/Map";

import mapdata from './components/mapdata';

function App() {
  return (
    <Scrollable >
      <h1>Map should render here</h1>
      <Map data = {mapdata} height={1000} width={1000}/>  
    </Scrollable>
  );
}

export default App;

const Scrollable = styled.div`
  height: 500px;
  width: 500px;
  overflow: scroll;
`;
