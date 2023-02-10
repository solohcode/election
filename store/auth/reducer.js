import { actionTypes } from './action';

export const initState = {
    isLoggedIn: false,
	loading:false,
	cooperatives:[],
    show:false
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: true },
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: false, loading: false },
            };
		case actionTypes.LOADING:
			return {
				...state,
				...{ loading: action.payload },
			};
		case actionTypes.GET_COOPERATIVES_SUCCESS:
			return {
				...state,
				...{ cooperatives: action.payload },
			};
        case actionTypes.SET_SHOW:
            return {
                ...state,
                ...{ show: action.payload },
            };
        default:
            return state;
    }
}

export default reducer;
