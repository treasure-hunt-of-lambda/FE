import React from "react";
import styled from "styled-components";

import ListItem from "./ListItem";

const List = (props) => {
	return (
		<ListContainer>
			<h2>{props.title}</h2>
			<ul>
				{ props.items.length > 0 ?
					props.items.map(item => <ListItem key = {item} item = {item} actionable = {props.actionable}/>)
					:
					<li>None</li>
				}
			</ul>
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