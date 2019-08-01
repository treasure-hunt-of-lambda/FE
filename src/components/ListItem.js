import React from "react";
import styled, {css} from "styled-components";
import {Download} from "react-feather";


const ListItem = (props) => {
	return (
		<StyledItem>
		{console.log(props.item)}
		{props.actionable ? <ItemButton onClick = {() => props.click(props.item, props.lastAction, props.cooldown)}><Download/></ItemButton> : null}
		<p>{props.item}</p>
		</StyledItem>
	)
}

export default ListItem;

const StyledItem = styled.li`
	word-break: break-word;
	display: flex;
    align-items: center;
`;

const ItemButton = styled.button`
	display: inline-block;
	border: none;
	padding: 10px;
	margin: 0 5px;
	text-decoration: none;
	background: none;
	color: #ffffff;
	font-family: sans-serif;
	font-size: 1rem;
	cursor: pointer;
	text-align: center;
	transition: background 250ms ease-in-out, 
				transform 150ms ease;
	-webkit-appearance: none;
	-moz-appearance: none;

	padding-top: 13px;
    padding-bottom: 13px;

	outline: none;
	&:active {
		transform: scale(0.99);
	}

	${props => props.color && props.hoverColor && css`
		background-color: ${props.color}
		&:hover {
			background-color: ${props.hoverColor}
		}

	`}
`;