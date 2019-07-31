import React from "react";
import styled from "styled-components";
import {ToggleLeft, ToggleRight, Circle} from "react-feather";

import Button from "./Button";

const Controls = (props) => {
	return (
		<ControlsWrapper>
			<Button color = "#778DA9" hoverColor = "#6D819A" click = {()=> console.log("click")} Icon = {ToggleLeft}/>
			<Button color = "#5D75AD" hoverColor = "#556B9E" click = {()=> console.log("click")} Icon = {Circle}/>
			<Button color = "#479B71" hoverColor = "#57A47D" click = {()=> console.log("click")} Icon = {Circle}/>
			<Button color = "#825167" hoverColor = "#8D6074" click = {()=> console.log("click")} Icon = {Circle}/>
			<Button color = "#E0D64C" hoverColor = "#CCC346" click = {()=> console.log("click")} Icon = {Circle}/>
		</ControlsWrapper>	
	)
}

export default Controls;

const ControlsWrapper = styled.div`
	position: absolute;
	bottom: 1px;
	left: 0;
	height: 50px;
	width: 78vw;
	background: #2F394C;

	display: flex;
`;