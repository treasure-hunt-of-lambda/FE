import * as actions from "../actions";

const initialState = {
	"name": "",
	"cooldown": 0,
	"encumbrance": 0,  // How much are you carrying?
	"strength": 10,  // How much can you carry?
	"speed": 10,  // How fast do you travel?
	"gold": 0,
	"inventory": [],
	"status": [],
	"errors": [],
	"messages": []
}

const branchTable = {
	[actions.REFRESH_INVENTORY_STATUS]: (state, action) => {return {...action.payload}},
	[actions.GET_ITEM]: (state, action) => {return {...state, inventory: [...state.inventory, action.payload]}},
	[actions.DROP_ITEM]: (state, action) => {return {...state, inventory: state.inventory.filter(item => item !== action.payload)}}
}

export default (state = initialState, action) => {
	return action.type in branchTable ? branchTable[action.type](state, action) : state;
}