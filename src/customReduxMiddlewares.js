import * as actions from "./actions";

export const checkTimeOut = state => next => action => {
	// console.log(state.getState().explore.lastAction, state.getState().explore.cooldown, (new Date() - state.getState().explore.lastAction)/1000)
	if (action.type !== actions.INIT) {
		const currentState = state.getState()
		const elapsed = new Date() - currentState.explore.lastAction;
		if (elapsed < currentState.cooldown){
			alert(`Can't make action yet. Please wait ${currentState.cooldown - elapsed} `)
			next(action)
		}
	}
	next(action)
}