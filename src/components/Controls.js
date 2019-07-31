import React from "react";
import styled from "styled-components";
import {ToggleLeft, ToggleRight, Circle} from "react-feather";
import {connect} from "react-redux";

import {move} from "../actions";

import Button from "./Button";


const Controls = (props) => {
	return (
		<ControlsWrapper>
			<Button color = "#778DA9" hoverColor = "#6D819A" click = {()=> console.log("click")} Icon = {ToggleLeft}/>
			<Button color = "#5D75AD" hoverColor = "#556B9E" click = {()=> props.move("n", props.lastAction, props.cooldown)} Icon = {Circle}/>
			<Button color = "#479B71" hoverColor = "#57A47D" click = {()=> props.move("s", props.lastAction, props.cooldown)} Icon = {Circle}/>
			<Button color = "#825167" hoverColor = "#8D6074" click = {()=> props.move("e", props.lastAction, props.cooldown)} Icon = {Circle}/>
			<Button color = "#E0D64C" hoverColor = "#CCC346" click = {()=> props.move("w", props.lastAction, props.cooldown)} Icon = {Circle}/>
		</ControlsWrapper>	
	)
}

const mstp = state => {
	return {
		lastAction: state.explore.lastAction,
		cooldown: state.explore.cooldown
	}
}

export default connect(mstp,{move})(Controls);

const ControlsWrapper = styled.div`
	position: absolute;
	bottom: 1px;
	left: 0;
	height: 50px;
	width: 78vw;
	background: #2F394C;

	display: flex;
`;