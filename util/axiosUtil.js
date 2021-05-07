var axios = require('axios'),
    queryParamConstants = require('../App Constants/queryParamConstants'),
    apiConstants = require('../App Constants/apiConstants'),
    Error = require('../models/error');

axios.defaults.baseURL = apiConstants.END_POINT + apiConstants.APIV7;
axios.defaults.headers.common[apiConstants.AUTH_HEADER] = apiConstants.ACCESS_TOKEN;
    
var axiosGetNewsUtil = function(request, response, payload){

    axios.get(payload.endPoint,{params: payload.params})
    .then(function (bingResponse) {
        // handle success
        response.send(bingResponse.data);
    })
    .catch(function (error) {
        // handle error
        let errorModel = new Error(error.response.status, error.response.statusText, error.response.data.errors);
        response.send(errorModel);
    });
} 

var buildCommonParamsObj = function(requestQueryParams){
    let paramsObj = {};
    if(requestQueryParams && requestQueryParams != undefined){
        const COMMON_PARAMS =  queryParamConstants.COMMON_PARAMS;
        paramsObj[COMMON_PARAMS.market] = requestQueryParams[COMMON_PARAMS.market];
        paramsObj[COMMON_PARAMS.safeSearch] = requestQueryParams[COMMON_PARAMS.safeSearch];
        paramsObj[COMMON_PARAMS.since] = requestQueryParams[COMMON_PARAMS.since];
        paramsObj[COMMON_PARAMS.sortBy] = requestQueryParams[COMMON_PARAMS.sortBy];
        paramsObj[COMMON_PARAMS.textDecorations] = requestQueryParams[COMMON_PARAMS.textDecorations];
        paramsObj[COMMON_PARAMS.textFormat] = requestQueryParams[COMMON_PARAMS.textFormat];
    
    }    
    return paramsObj;
}

module.exports = {
    axiosGetNews : axiosGetNewsUtil,
    buildCommonParamsObj  : buildCommonParamsObj
};