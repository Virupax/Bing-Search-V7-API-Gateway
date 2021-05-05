var express = require('express'),
	app = express(),
	cors = require('cors'),
    apiConstants = require('./apiConstants');
	port = process.env.PORT || apiConstants.DEFAULT_PORT,
    newsController = require('./controllers/NewsController');

app.use(cors());
app.use('/api/v1/', newsController);


//log message
app.listen(port, function() {
    console.log('Bing Seearch V7 API gateway app listening on port '+port+ '!');
});


/**
 * Global exception handler
 */
 process.on('uncaughtException', function (err) {
    console.error(err);
  });