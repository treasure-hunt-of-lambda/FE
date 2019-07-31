import React from 'react';
import {ResponsiveNetwork} from "@nivo/network";
import styled, {css} from "styled-components";
import {connect} from "react-redux";

const Map = ({data, height, width, id, gameState}) => {
	const transformedMap = transformMap(data)
	const currentRoom = `${gameState.room_id}`;
	const currentExits= gameState.exits;
	const colors = {
		"n": "#5D75AD",
		"s": "#479B71",
		"e": "#825167",
		"w": "#E0D64C",
	}
	const complement_dirs = {'n': 's', 's': 'n', 'e': 'w', 'w': 'e'}
	return (
		<MapWrapper height={height} width={width} id = {id}>
			<ResponsiveNetwork
				nodes = {transformedMap.nodes}
				links = {transformedMap.links}
				margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
				repulsivity={5}
				iterations={60}
				nodeColor={function(e){
					return currentRoom === e.id ? "rgb(0, 0, 0)" : Object.values(data[e.id]).includes(parseInt(currentRoom)) ? "rgb(153, 51, 255)" : e.color
				}}
				nodeBorderWidth={0}
				nodeBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
				linkThickness={function(e){return 2*(2-e.source.depth)}}
				linkColor={function(e){
					if (currentRoom === e.source.id) {
						const [dir] = Object.entries(data[currentRoom]).find(([key, value]) => `${value}` === e.target.id)
						return  colors[dir]
					}
					else if (currentRoom === e.target.id) {
						const [dir] = Object.entries(data[currentRoom]).find(([key, value]) => `${value}` === e.source.id)
						return  colors[dir]
					}
					else{
						const def = "rgb(97, 205, 187)" 
						return def 
					}
				}}
				motionStiffness={160}
				motionDamping={12}
			/>
		</MapWrapper>
	)
}

const mstp = state => {
	return {
		gameState: state.explore
	}
}

export default connect(mstp,{})(Map);

const MapWrapper = styled.div`
	height: 2000px;
	width: 2000px;
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