import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {RefreshCw, Upload, DollarSign} from "react-feather";

import List from "./List";
import {dropItem} from "../actions";

const Inventory = (props) => {
	const [isHidden, setIsHidden] = useState(true);

	return (
		<InventoryWrapper hidden = {isHidden}>
			<Header onClick = {() => setIsHidden(prev => !prev)}>
				<h1>Inventory {props.carrying}/{props.capacity}</h1>
			</Header>
			<RefreshCw/>

			<ul>
				{props.items.map(item => {
					return (
						<li>
							<DollarSign/>
							<Upload/>
							{item}
						</li>
					)
				})}
			</ul>

			{/* <List 
				title = "" 
				items = {props.items} 
				actionable = {true} 
				click = {() => props.dropItem()} 
				lastAction = {props.lastAction} 
				cooldown = {props.cooldown}/> */}
		</InventoryWrapper>
	)
}

const mstp = state => {
	return {
		items: state.items.inventory,
		carrying: state.items.encumbrance,
		capacity: state.items.strength,
		lastAction: state.explore.lastAction,
		cooldown: state.explore.cooldown
	}
}

export default connect(mstp,{dropItem})(Inventory);

const InventoryWrapper = styled.div`
	// position: fixed;
	display: block;
	// bottom:0;
	// right: 0;
	z-index: 10;
	position: fixed;
    bottom: 0;
    right: 0;
	transition: height 1s;
    height: ${props => props.hidden ? "80px": "500px"};
    width: 20vw;
    background: #233B7F;
    color: #E0E1DD;
    padding: 0 1vw;
	min-width: 260px;
	
`;

const Header = styled.div`
	&:hover{
		cursor: pointer;
	}
`;