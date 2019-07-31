import * as actions from "./actions";

export const setLastAction = state => next => action => {
	const exploreActions = [actions.INIT, actions.MOVE];
	if (exploreActions.includes(action.type)) {
		action.payload.lastAction = Date.now();
	}
	next(action)
}