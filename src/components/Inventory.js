import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {RefreshCw, Upload, DollarSign} from "react-feather";

import List from "./List";
import {dropItem, sellItem} from "../actions";

const Inventory = (props) => {
	const [isHidden, setIsHidden] = useState(true);

	return (
		<InventoryWrapper hidden = {isHidden}>
			<Header onClick = {() => setIsHidden(prev => !prev)}>
				<h1>Inventory {props.carrying}/{props.capacity}</h1>
			</Header>
			<Clickable margin = "10px">
				<RefreshCw/>
			</Clickable>
			<h2>${props.gold}</h2>

			<ul>
				{props.items.map((item, index) => {
					return (
						<li key = {`${item}${index}`}>
							<Clickable onClick = {() => props.sellItem(item, props.lastAction, props.cooldown)}>
								<DollarSign/>
							</Clickable>
							<Clickable onClick = {() => props.dropItem(item, props.lastAction, props.cooldown)}>
								<Upload/>
							</Clickable>
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
		cooldown: state.explore.cooldown,
		gold: state.items.gold
	}
}

export default connect(mstp,{dropItem, sellItem})(Inventory);

const InventoryWrapper = styled.div`
	display: block;
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

	li{
		display: flex;
		align-items: center;
		justify-content: center;
		word-break: break-word;
	}
`;

const Header = styled.div`
	&:hover{
		cursor: pointer;
	}
`;

const Clickable = styled.div`
	background: none;
	&:hover{
		cursor: pointer;
	}
	width: min-content;
	margin ${props => props.margin ? props.margin : "5px"}
`;
