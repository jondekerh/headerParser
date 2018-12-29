const express = require('express');
const ua = require('express-useragent');
const app = express();

function parser(req) {
  return {
    "ip": req.ip,
    "languages": req.acceptedLanguages,
    "software": ua.parse(req.headers['user-agent'])
  }
};

app.get('/', (req, res) => res.send(parser(req)));

module.exports = app;
