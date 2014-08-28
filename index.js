var express = require('express');
var app = express();

//require('./generateList');


//eval(fs.readFileSync('./generateList.js')+'');

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 'port');

