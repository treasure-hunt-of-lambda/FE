import React from "react";
import styled, {css} from "styled-components";

const Button = (Icon) => ({color, click}) => {
	return (
		<ButtonWrapper color = {color}>
			<Icon onClick = {click}/>
		</ButtonWrapper>
	)
}

export default Button;

const ButtonWrapper = styled.div`
	${props => props.color && css`
		background-color: ${props.color}
	`}
`;