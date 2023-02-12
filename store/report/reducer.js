import { actionTypes } from './action';

export const initState = {
	loading: false,
	reports:[],
	total:0
};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case actionTypes.SET_STATE:
			return { ...state, ...action.payload }
		default:
			return state
	}
}
