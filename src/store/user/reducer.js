import { getFromLocal } from '../../helpers/storage';
import { userConstants as uc } from './constants';

const initialState = {
	name: getFromLocal('name'),
	job: '',
	address: '',
}

export const user = (state = initialState, action) => {
	switch (action.type) {
		case uc.SET_USER_DATA:
			return Object.assign({}, state, {
				[action.payload.key]: action.payload.value
			});
		case uc.LOGOUT:
			return initialState;
		default:
			return state;
	}
}

export default user;