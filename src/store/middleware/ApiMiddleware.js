import axios from 'axios';
import { uiActions } from './../ui/actions';
import config from "../../config";

export const ApiMiddleware = ({ dispatch }) => next => action => {

    next(action);
    if (action.type !== 'API') {
        return;
    }

    const { payload } = action;
    const options = {
        method: payload.method || 'get',
        baseURL: payload.baseURL || config.API,
        url: payload.url,
        data: payload.data
    }

    axios(options).then((res) => {
        dispatch(uiActions.apiFinish());
        if (payload.afterSuccess) {
            payload.afterSuccess(res.data);
        }
    })
        .catch(err => {
            dispatch(uiActions.apiFinish())
            if (payload.onError) {
                payload.onError(err);
            }
            console.log(err);
        });
};