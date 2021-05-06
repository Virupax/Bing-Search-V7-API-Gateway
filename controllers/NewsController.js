var express = require('express'),
    queryParamConstants = require('../queryParamConstants'),
    axiosNews = require('../util/axiosUtil');


var router = express.Router();

router.get('/news', function(request, response){
    let payload = {};
    let paramsObj = axiosNews.buildCommonParamsObj(request.query);
    paramsObj[COMMON_PARAMS.category] = requestQueryParams[COMMON_PARAMS.category];
    
    payload.endPoint = queryParamConstants.NEWS_PARAMS.endPoint;
    payload.params = paramsObj;

    axiosNews.axiosGetNews(request, response, payload);
});


router.get('/news/search', function(request, response){
    let payload = {};
    const SEARCH_NEWS_PARAMS =  queryParamConstants.SEARCH_NEWS_PARAMS;
    let paramsObj = axiosNews.buildCommonParamsObj(request.query);
    paramsObj[SEARCH_NEWS_PARAMS.count] = request.query[SEARCH_NEWS_PARAMS.count];
    paramsObj[SEARCH_NEWS_PARAMS.freshness] = request.query[SEARCH_NEWS_PARAMS.freshness];
    paramsObj[SEARCH_NEWS_PARAMS.originalImg] = request.query[SEARCH_NEWS_PARAMS.originalImg];
    paramsObj[SEARCH_NEWS_PARAMS.query] = request.query[SEARCH_NEWS_PARAMS.query];

    payload.endPoint = SEARCH_NEWS_PARAMS.endPoint;
    payload.params = paramsObj;

    axiosNews.axiosGetNews(request, response, payload);
});

router.get('/news/trendingtopics', function(request, response){
    let payload = {};
    payload.endPoint = queryParamConstants.NEWS_TRENDING_TOPICS.endPoint;
    payload.params = axiosNews.buildCommonParamsObj(request.query);

    axiosNews.axiosGetNews(request, response, payload);
});



module.exports = router //Export the router to use in app.js