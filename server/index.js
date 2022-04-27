const express = require('express')
const api = require('./api/v1')

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

app.use((err, req, res) => {
  const { message = ''} = err
  let {statusCode = 500} = err

  if(err?.name === "ValidationError"){
    statusCode = 422;
  }
  console.log(JSON.stringify(err,null,2))


  res.status(statusCode);
  res.json( { 
    message,
   });
})

module.exports = app;

