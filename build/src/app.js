/*
import express from 'express';
import bodyParser from "body-parser";
// or
// import express = require('express')

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json('node server started');
});

app.post('/configs', (req, res) => {
  console.log('hello')
  console.log(req.body)
  res.send('OK done');
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});

*/ 
