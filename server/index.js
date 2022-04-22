const express = require('express')
const api = require('./api/v1')
const morgan = require('morgan');
const logger = require('./config/logger')


const app = express()

app.use(logger.request)
app.use(express.json());

app.use('/api',api);
app.use('/api/v1',api);


app.use((req, res,next) => {
  next({
    statusCode:404,
    message:'Route Not Found'
  })
})

app.use((err, req, res, next) => {
  const {statusCode = 500, message = '', level = 'error'} = err
  logger[level](message);
  res.status(statusCode);
  res.json( { 
    message,
   });
})

module.exports = app;

