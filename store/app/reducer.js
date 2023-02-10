import { actionTypes } from './action';

export const initialState = {
    isDrawerMenu: false,
    selectedState: 'Lagos',
    selectedElectionType: 'Presidential'
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.TOGGLE_DRAWER_MENU_SUCCESS:
            return {
                ...state,
                isDrawerMenu: action.payload,
            };
        case actionTypes.SELECT_ELECTION_TYPE:
            return {
                ...state,
                selectedElectionType: action.payload,
            };
        case actionTypes.SELECT_STATE:
            return {
                ...state,
                selectedState: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;
