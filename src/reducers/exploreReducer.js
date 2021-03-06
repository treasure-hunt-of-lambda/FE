import * as actions from "../actions";

const initialState = {
	"room_id": "id",
	"title": "Room",
	"description": "Description",
	"coordinates": "(0,0)",
	"elevation": 0,
	"terrain": "NORMAL",
	"players": [],
	"items": [],
	"exits": [],
	"cooldown": 1.0,
	"errors": [],
	"messages": [],
	"lastAction": Date.now()
}

const branchTable = {
	[actions.INIT]: (state, action) => {return {...action.payload}},
	[actions.MOVE]: (state, action) => {return {...action.payload}}
}

export default (state = initialState, action) => {
	return action.type in branchTable ? branchTable[action.type](state, action) : state;
}