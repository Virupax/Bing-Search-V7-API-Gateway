var express = require('express'),
    swaggerJsdoc = require('swagger-jsdoc'),
    swaggerUi = require('swagger-ui-express'),
    queryParamConstants = require('../App Constants/queryParamConstants'),
    axiosNews = require('../util/axiosUtil');

var router = express.Router();


//Swagger Definition
const options = {
    swaggerDefinition: {
      info: {
        title: 'Bing Search API V7 API Gateway for News',
        version: '1.0.0',
        description: 'ByPass the setup of Azure Bing Search resource, Connect to Bing search news using three end points for Top, Trending and Search news!'
      },
      host: '104.131.96.211:3000',
      basePath: '/api/v1/'
    },
    // apis: ['./controllers/NewsController.js'],
    apis: ['./docs/**/*.yaml'],
  };
  const specs = swaggerJsdoc(options);
  router.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));




router.get('/news', function(request, response){
    try{
        let payload = {};
        const NEWS_PARAMS =  queryParamConstants.NEWS_PARAMS;
        let paramsObj = axiosNews.buildCommonParamsObj(request.query);
        paramsObj[NEWS_PARAMS.category] = request.query[NEWS_PARAMS.category];
        
        payload.endPoint = queryParamConstants.NEWS_PARAMS.endPoint;
        payload.params = paramsObj;
    
        axiosNews.axiosGetNews(request, response, payload);
    }catch(error){
        let errorModel = new Error();
        errorModel.setInternalServerError();
        response.send(errorModel);
    }
});


router.get('/news/search', function(request, response){
    try{
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
    }catch(error){
        let errorModel = new Error();
        errorModel.setInternalServerError();
        response.send(errorModel);
    }
});

router.get('/news/trendingtopics', function(request, response){
    try{
        let payload = {};
        payload.endPoint = queryParamConstants.NEWS_TRENDING_TOPICS.endPoint;
        payload.params = axiosNews.buildCommonParamsObj(request.query);
    
        axiosNews.axiosGetNews(request, response, payload);    
    }catch(error){
        let errorModel = new Error();
        errorModel.setInternalServerError();
        response.send(errorModel);
    }
});



module.exports = router //Export the router to use in app.js