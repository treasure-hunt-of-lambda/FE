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
			<Button color = "#5D75AD" hoverColor = {props.exits.includes("n") ? "#556B9E" : "disable"} click = {()=> props.move(props.room_id, "n", props.lastAction, props.cooldown)} Icon = {Circle}/>
			<Button color = "#479B71" hoverColor = {props.exits.includes("s") ? "#57A47D" : "disable"} click = {()=> props.move(props.room_id, "s", props.lastAction, props.cooldown)} Icon = {Circle}/>
			<Button color = "#825167" hoverColor = {props.exits.includes("e") ? "#8D6074" : "disable"} click = {()=> props.move(props.room_id, "e", props.lastAction, props.cooldown)} Icon = {Circle}/>
			<Button color = "#E0D64C" hoverColor = {props.exits.includes("w") ? "#CCC346" : "disable"} click = {()=> props.move(props.room_id, "w", props.lastAction, props.cooldown)} Icon = {Circle}/>
		</ControlsWrapper>	
	)
}

const mstp = state => {
	return {
		room_id: state.explore.room_id,
		lastAction: state.explore.lastAction,
		cooldown: state.explore.cooldown,
		exits: state.explore.exits
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