import axios from "axios";
import map from "../components/mapdata";

const baseURL = "https://lambda-treasure-hunt.herokuapp.com/api/adv/";
const authToken = `Token ${process.env.REACT_APP_PLAYER_KEY}`;

export const INIT = "INIT";
export const MOVE = "MOVE";
export const ON_COOLDOWN = "ON_COOLDOWN";
export const NOT_EXIT = "NOT_EXIT";

export const axiosWithAuth = axios.create({
	baseURL: baseURL,
	timeout: 1000,
	headers: {
		Authorization: authToken
	}
});

export const init = () => dispatch => {
	axiosWithAuth.get("/init").then(res => {
		dispatch({
			type: INIT,
			payload: res.data
		})
	}).catch(err => {
		console.log(err)
	})
}

export const canMakeMove = (lastAction, cooldown) => {
	const currentTime = Date.now()
	const elapsed = (currentTime - lastAction)/1000;
	return [elapsed <= cooldown, elapsed] 
}

export const move = (current_room, direction, lastAction, cooldown) => dispatch => {
	const canMove = canMakeMove(lastAction, cooldown);
	if (canMove[0]){
		dispatch({
			type: ON_COOLDOWN,
			payload: cooldown - canMove[1]
		})
		return
	}
	else if (!Object.keys(map[`${current_room}`]).includes(direction)){
		dispatch({
			type: NOT_EXIT
		})
	}
	else {
		axiosWithAuth.post("/move", {
			direction,
			next_room_id: `${map[`${current_room}`][direction]}`
		}).then(res => {
			dispatch({
				type: MOVE,
				payload: res.data
			})
		}).catch(err => {
			console.log(err)
		})
	}
}