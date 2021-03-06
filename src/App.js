import React, {useEffect} from 'react';
import styled from "styled-components";
import panzoom from "panzoom";
import  {connect} from "react-redux";

import Map from "./components/Map";
import SideBar from "./components/SideBar";
import Controls from "./components/Controls";
import Inventory from "./components/Inventory";

import mapdata from './components/mapdata';

import {init, refreshInventoryAndStatus, canMakeMove} from "./actions";

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
      );
    panzoomInstance.moveTo(0,0);
    props.init("data");
    const settingInventory = setInterval(() => {
      const success = props.refreshInventoryAndStatus(props.gameState.lastAction, props.gameState.cooldown)
      if (success){
        clearInterval(settingInventory);
      }
    }, 2000);
  },[])

  return (
    <>
      <Scrollable>
        <Map data = {mapdata} height={1000} width={1000} id = "scrollable"  />  
      </Scrollable>
      <Controls/>
      <SideBar currentState = {props.gameState}/>
      <Inventory/>
    </>
  );
}

const mstp = state => {
  return {
    gameState: state.explore
  }
}

export default connect(mstp,{init, refreshInventoryAndStatus})(App);

const Scrollable = styled.div`
  height: 100vh;
  width: 100vw;
`;
