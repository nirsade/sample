import { userConstants as uc } from './constants';

const setUserData = (key, value) => ({
	type: uc.SET_USER_DATA,
	payload: {
		key,
		value
	}
});


export const userActions = {
	setUserData
};