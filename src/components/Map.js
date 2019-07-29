import React from 'react';
import {ResponsiveNetwork} from "@nivo/network";
import styled from "styled-components";

const Map = ({data}) => {
	const transformedMap = transformMap(data)
	const currentRoom = ['1'];
	const colors = {
		"n": "rgb(255, 0, 0)",
		"s": "rgb(0, 255, 0)",
		"e": "rgb(0, 0, 255)",
		"w": "rgb(255, 0, 255)",
	}
	return (
		<MapWrapper>
			<ResponsiveNetwork
				nodes = {transformedMap.nodes}
				links = {transformedMap.links}
				margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
				repulsivity={5}
				iterations={60}
				nodeColor={function(e){
					return currentRoom.includes(e.id) ? "rgb(255, 0, 0)" : e.color
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
	min-height: 100vh;
	height: 150vh
	width: 100%;
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
			if (!(map[room][exit] in linked)){
				linked.room = 0;
				newForm.links.push({...link, source: `${room}`, target: `${map[room][exit]}`, dir: exit});
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