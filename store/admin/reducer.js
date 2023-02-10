import { actionTypes } from './action';

export const initState = {
	loading:false,
	admins:[],
	cooperatives:[],
	singleMembers:[],
	total:0
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.GET_ADMIN_SUCCESS:
            return {
                ...state,
                ...{
									admins: action?.payload?.data,
									total: action?.payload?.total
								},
            };
		case actionTypes.GET_COOPERATIVES_SUCCESS:
			return {
				...state,
				...{ cooperatives: action.payload },
			};
		case actionTypes.GET_ADMIN_DETAILS_SUCCESS:
			return {
				...state,
				...{ singleMembers: action.payload },
			};
        case actionTypes.LOADING:
			return {
				...state,
				...{ loading: action.payload },
			};
		case actionTypes.GET_PAGINATION:
			return {
				...state,
				...{ paginations: action.payload },
			};
		default:
            return state;
    }
}

export default reducer;
