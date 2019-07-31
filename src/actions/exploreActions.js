import axios from "axios";
const baseURL = "https://lambda-treasure-hunt.herokuapp.com/api/adv/";
const authToken = `Token ${process.env.REACT_APP_PLAYER_KEY}`;

export const INIT = "INIT";
export const MOVE = "MOVE";
export const ON_COOLDOWN = "ON_COOLDOWN";

const axiosWithAuth = axios.create({
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

export const move = (dir, lastAction, cooldown) => dispatch => {
	const currentTime = Date.now()
	const elapsed = (currentTime - lastAction)/1000;
	if (elapsed < cooldown){
		dispatch({
			type: ON_COOLDOWN,
			payload: cooldown - elapsed 
		})
		return
	}
	else {
		axiosWithAuth.post("/move", {
			direction: dir
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