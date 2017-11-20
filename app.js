//"use strict";

let express = require('express'),
	bodyParser = require('body-parser'),
	auth = require('./modules/heroku-sf-auth'),
	contact = require('./modules/contact'),
	app = express();
	
//app.enable('trust proxy');

app.set('port', process.env.PORT || 5000);

/*
app.use('/', express.static(__dirname + '/www')); // serving company logos after successful authentication

app.use(bodyParser.urlencoded({extended: true}));


app.post('/contact', contact.execute);
app.post('/login', auth.loginLink);
app.post('/logout', auth.logout);
app.get('/login/:userId', auth.oauthLogin);
app.get('/oauthcallback', auth.oauthCallback);
*/

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});