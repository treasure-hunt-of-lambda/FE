import React from 'react';
import {ResponsiveNetwork} from "@nivo/network";
import styled, {css} from "styled-components";

const Map = ({data, height, width, id}) => {
	const transformedMap = transformMap(data)
	const currentRoom = ['0'];
	const currentExits= ['1','4','8','3',];
	const colors = {
		"n": "rgb(255, 0, 0)",
		"s": "rgb(0, 255, 0)",
		"e": "rgb(0, 0, 255)",
		"w": "rgb(255, 0, 255)",
	}
	return (
		<MapWrapper height={height} width={width} id = {id}>
			<ResponsiveNetwork
				nodes = {transformedMap.nodes}
				links = {transformedMap.links}
				margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
				repulsivity={5}
				iterations={60}
				nodeColor={function(e){
					return currentRoom.includes(e.id) ? "rgb(0, 0, 0)" : currentExits.includes(e.id) ? "rgb(153, 51, 255)" : e.color
				}}
				nodeBorderWidth={0}
				nodeBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
				linkThickness={function(e){return 2*(2-e.source.depth)}}
				linkColor={function(e){
					return currentRoom.includes(e.source.id) ? colors[e.dir] : "rgb(97, 205, 187)"
				}}
				motionStiffness={160}
				motionDamping={12}
			/>
		</MapWrapper>
	)
}

export default Map;

const MapWrapper = styled.div`
	height: 2000px;
	width: 2000px;
	${props => console.log(props)}
	${props => props.height && props.width && css`
		height: ${`${props.height}px`}
		width: ${`${props.width}px`}
	`}
`;


function transformMap(map) {
	const newForm = {
		nodes: [],
		links: [],
	};

	let linked = {}

	for (let room in map) {
		newForm.nodes.push({...node, id: room, });
		for(let exit in map[room]) {
			let exitRoom = map[room][exit]
			if (!(exitRoom in linked)){
				linked[room]= 0;
				newForm.links.push({...link, source: `${room}`, target: `${exitRoom}`, dir: exit});
			}
		}
	}
	return newForm;
}

const node = {
	"id": "1",
	"radius": 3,
	"depth": 1,
	"color": "rgb(97, 205, 187)"
}

const link = {
	"source": "1",
	"target": "2",
	"distance": 5
}