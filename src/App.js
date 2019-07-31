import React, {useEffect} from 'react';
import styled from "styled-components";
import panzoom from "panzoom";
import  {connect} from "react-redux";

import Map from "./components/Map";
import SideBar from "./components/SideBar";
import Controls from "./components/Controls";

import mapdata from './components/mapdata';

import {init} from "./actions";

function App(props) {

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
    props.init("data")
  },[])

  return (
    <>
      <Scrollable>
        <Map data = {mapdata} height={1000} width={1000} id = "scrollable"  />  
      </Scrollable>
      <Controls/>
      <SideBar currentState = {sampleState}/>
    </>
  );
}

const mstp = state => {
  return {

  }
}

export default connect(mstp,{init})(App);

const Scrollable = styled.div`
  height: 100vh;
  width: 100vw;
`;

const sampleState = {
  "room_id": 0,
  "title": "A misty room",
  "description": "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
  "coordinates": "(60,60)",
  "elevation": 0,
  "terrain": "NORMAL",
  "players": [
    "player61",
    "player55",
    "player146",
    "player118"
  ],
  "items": [],
  "exits": [
    "n",
    "s",
    "w",
    "e"
  ],
  "cooldown": 1.0,
  "errors": [],
  "messages": []
}