const express = require('express');
const app = express();
const port = 3000;

app.get('/home', (req,res) =>{

});

app.get('/login', (req,res) =>{

});

app.get('/profile', (req,res) =>{

});

app.listen(port, () =>{
    console.log("서버 오픈");
});