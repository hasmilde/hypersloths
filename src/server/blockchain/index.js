'use strict';

const blockchain = require('express').Router(); // eslint-disable-line new-cap
const config = require('./config');
const example = require('./example');
const secret = require('./../../../secret.json');

blockchain.route('/config')
  .get(function(req, res) {
  	res.send(config);
  });

blockchain.route('/example')
  .get(function(req, res) {
  	res.send(example);
  });


module.exports = blockchain;
