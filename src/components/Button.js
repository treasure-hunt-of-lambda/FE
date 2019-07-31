import React from "react";
import styled, {css} from "styled-components";

const Button = ({color, hoverColor, click, Icon}) => {
	return (
		<ButtonWrapper color = {color} hoverColor = {hoverColor} onClick = {click}>
			<Icon/>
		</ButtonWrapper>
	)
}

export default Button;

const ButtonWrapper = styled.button`
	// referenced 
	// https://css-tricks.com/overriding-default-button-styles/

	display: inline-block;
	border: none;
	padding: 1rem 2rem;
	margin: 0;
	text-decoration: none;
	background: #0069ed;
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
	background-color: ${({hoverColor}) => hoverColor === "disable" && "#BAC6C5"}
`;