const express = require('express');
const router = require('./routes');
const mongoose = require('mongoose');

const server = express();

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-bmqmo.mongodb.net/omnistack8?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

server.use(express.json());

server.use(router);

server.listen(3333);
