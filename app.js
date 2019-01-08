const express = require('express');
let bodyParser = require('body-parser');
let app = express();

let urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();
app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', function(req, res, next){
    console.log("Request Url :" +  req.url);
    next();
});

app.get('/', function(req, res){
    res.render('index');

});
app.get('/json', function(req, res){
    res.render('indexJson');

});

app.post('/person', urlencodedParser, function(req, res){
    res.send('Thank You ' + req.body.firstName + " " + req.body.lastName);  
});

app.post('/personJson', jsonParser, function(req, res){
    res.send('Thank You For Json data ');
    console.log(req.body.fristname + " " + req.body.lastname)
});

app.get('/person/:id', function(req, res){
    res.render('employee', {ID: req.params.id,
    employeeName: req.query.employeeName});
});

app.get('/api', function(req,res){
    res.json({FirstName : 'John', LastName : 'Doe'});
});

app.listen(5000);