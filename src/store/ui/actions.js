import { uiConstants as uc } from './constants';

const apiStart = () => ({
    type: uc.API_START,
})

const apiFinish = () => ({
    type: uc.API_FINISH
})

const setActiveRoute = (route) => ({
    type: uc.SET_ACTIVE_ROUTE,
    payload: {
        route
    }
})

export const uiActions = {
    apiStart,
    apiFinish,
    setActiveRoute
};

