import axios from "axios";
const baseURL = "https://lambda-treasure-hunt.herokuapp.com/api/adv/";
const authToken = `Token ${process.env.REACT_APP_PLAYER_KEY}`;

export const INIT = "INIT";
const axiosWithAuth = axios.create({
	baseURL: baseURL,
	timeout: 1000,
	headers: {
		Authorization: authToken
	}
});

export const init = (data) => dispatch => {
	axiosWithAuth.get("/init", {
		Headers: {
			Authorization: authToken
		}
	}).then(res => {
		dispatch({
			type: INIT,
			payload: res.data
		})
	}).catch(err => {
		console.log(err)
	})
}