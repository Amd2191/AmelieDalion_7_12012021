const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const postRoutes = require('./routes/post');
const userRoutes=require('./routes/user');

const app = express();



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(bodyParser.json({
    limit: '50mb'
  }));
  
  app.use(bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true 
  }));
app.use(helmet());


app.use('/api', postRoutes);
app.use('/api', userRoutes);

module.exports = app;