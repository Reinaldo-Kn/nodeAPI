const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/project',require('./controllers/projectController'));

app.listen(3000);
console.log("API listen 🥳 😎 😳"); 