import React from "react";
import styled from "styled-components";

const List = (props) => {
	return (
		<ListContainer>
			<h2>{props.title}</h2>
			<ul>
				{props.items.map(item => <li>{item}</li>)}
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
	}
`;