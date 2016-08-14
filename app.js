const express = require('express');
const path = require('path');
const app = express();
const xmlparser = require('express-xml-bodyparser');
 
app.use(xmlparser());
server = require('http').Server(app);
app.set('views', __dirname);
app.set('view engine', 'html');
app.engine('.html', require('ejs').__express);
require('./index')(app);
server.listen(80, () => {
	console.log('App start, port 80.');
});
