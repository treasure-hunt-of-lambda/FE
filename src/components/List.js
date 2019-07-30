import React from "react";

const List = (props) => {
	return (
		<>
			<h2>{props.title}</h2>
			<ul>
				{props.items.map(item => <li>{item}</li>)}
			</ul>
		</>
	)
}

export default List;