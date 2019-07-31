import {canMakeMove, axiosWithAuth, ON_COOLDOWN} from "./exploreActions";

export const GET_ITEM = "GET_ITEM";
export const DROP_ITEM = "DROP_ITEM";
export const REFRESH_INVENTORY_STATUS = "REFRESH_INVENTORY_STATUS";

export const getItem = (item, lastAction, cooldown) => dispatch=> {
	const canMove = canMakeMove(lastAction, cooldown);

	if (!canMove[0]){
		dispatch({
			type: ON_COOLDOWN,
			payload: cooldown - canMove[1]
		})
		return
	}
	else {
		axiosWithAuth.post("/take", {
			name: item
		}).then(res => {
			dispatch({
				type: GET_ITEM,
				payload: item
			})
		}).catch(err => {
			console.log(err)
		})
	}
}

export const refreshInventoryAndStatus = (item, lastAction, cooldown) => dispatch=> {
	const canMove = canMakeMove(lastAction, cooldown);

	if (!canMove[0]){
		dispatch({
			type: REFRESH_INVENTORY_STATUS,
			payload: cooldown - canMove[1]
		})
		return
	}
	else {
		axiosWithAuth.post("/status", {
			name: item
		}).then(res => {
			dispatch({
				type: GET_ITEM,
				payload: item
			})
		}).catch(err => {
			console.log(err)
		})
	}
}