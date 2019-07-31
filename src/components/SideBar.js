import React, {  } from "react";
import styled from "styled-components";

import List from "./List";

const SideBar = ({currentState}) => {
	return (
		<SidebarWrapper>
			<h1>{currentState.room_id} | {currentState.title}</h1>
			<p>{currentState.description}</p>
			<List title = "Players" items = {currentState.players}/>
			<List title = "Items" items = {currentState.items}/>
		</SidebarWrapper>
	)
}

export default SideBar;

const SidebarWrapper = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	height: 100vh;
	width: 20vw;
	background: #1B263B;
	color: #E0E1DD;
	padding: 0 1vw;
	min-width: 260px;

	h1 {
		font-family: 'Forum', cursive;
	}
	p {
		font-family: 'Muli', sans-serif;
	}
`;