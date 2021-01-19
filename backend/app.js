const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const postRoutes = require('./routes/post');
const userRoutes=require('./routes/user');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(helmet());
app.listen(8080,function(){
    console.log('Serveur en écoute');
});


app.use('/api', postRoutes);
app.use('/api', userRoutes);

module.exports = app;