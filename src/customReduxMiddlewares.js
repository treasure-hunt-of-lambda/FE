import * as actions from "./actions";

export const setLastAction = state => next => action => {
	const exploreActions = [actions.INIT, actions.MOVE, actions.REFRESH_INVENTORY_STATUS];
	if (exploreActions.includes(action.type)) {
		action.payload.lastAction = Date.now();
	}
	next(action)
}