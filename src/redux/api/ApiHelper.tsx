// @ts-ignore
import axios from "Api/Axios";

export const URL = "https://heroku-fake-rest-api.herokuapp.com/";

export interface commonCrudInterface {
    "url": string,
    "params": any
}

const urlWithOrigin = (url: string) => {
    return URL + url;
}

/**
 * Params should be { next, keyword }
 * @param {string} url
 * @param {object} params
 */

const get = ({ url, params={} }: commonCrudInterface) => {
    const { _page, _limit } = params;
    const endPoint = urlWithOrigin(url);
    if (_page && _limit) return axios.get(endPoint, { params });
    return axios.get(endPoint);
}

// ApiHelper
export const ApiHelper = {
    posts: (params: any) => get({ url : "posts/", params }),
}