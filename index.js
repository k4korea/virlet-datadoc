var express =require('express');
var fs = require('fs');
var app = express();

//import './tracer'; 

const tracer = require('dd-trace').init();

app.get('/index',function(req,res){
    fs.readFile('index.html', function(error, data){
      res.writeHead(200, {'Content-Type': 'text/html'} ) ;
      res.end(data);
    });
    
});

app.get('/',function(req,res){
    fs.readFile('main.html', function(error, data){
      res.writeHead(200, {'Content-Type': 'text/html'})  ;
      res.end(data);
    });
    
});

app.get('/imgs',function(req,res){
    fs.readFile('virtlet4.jpg', function(error, data){
      res.writeHead(200, {'Content-Type': 'text/html'})  ;
      res.end(data);
    });
    
});

app.listen( 80, function(){
    console.log('Server Start');
})
