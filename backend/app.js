const express = require('express');
const bodyParser = require('body-parser');
const checkLoginRouter = require('./checkLogin.js');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/login', checkLoginRouter);

app.listen(PORT, () =>  {
    console.log('Server is running');
});