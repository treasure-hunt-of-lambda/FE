import React from "react";
import styled from "styled-components";

import ListItem from "./ListItem";

const List = (props) => {
	return (
		<ListContainer>
			<h2>{props.title}</h2>
			<Ulist>
				{ props.items.length > 0 ?
					props.items.map(item => 
					<ListItem 
						key = {item} 
						item = {item} 
						actionable = {props.actionable} 
						click = {props.click}
						lastAction = {props.lastAction}
						cooldown = {props.cooldown}
						/>)
					:
					<li>None</li>
				}
			</Ulist>
		</ListContainer>
	)
}

export default List;

const ListContainer = styled.div`
	h2 {
		font-family: 'Exo', sans-serif;
	}
	li {
		font-family: 'Muli', sans-serif;
		list-style: none;
		margin: 5px 0;
	}
`;

const Ulist = styled.ul`
	max-height: 150px;
	height: 300px;
	overflow-y: auto;
	&::-webkit-scrollbar {
		width: .5em;
	}
	&::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	}
	&::-webkit-scrollbar-thumb {
		background-color: darkgrey;
		outline: 1px solid slategrey;
	}
}
 
`;