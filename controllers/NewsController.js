var express = require('express');

var router = express.Router();

router.get('/news', function(request, response){
    console.log('news');
});


router.get('/news/search', function(request, response){
    console.log('search');
});

router.get('/news/trendingtopics', function(request, response){
    console.log('trendingtopics');
});



module.exports = router //Export the router to use in app.js