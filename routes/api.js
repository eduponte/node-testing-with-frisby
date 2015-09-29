
var express = require('express');
var request = require('request');
var bearerToken = require('express-bearer-token');

var secure = function (req, res, next) {
  if (req.token && req.token === "mF_9.B5f-4.1JqM") {
    next();
  } else {
    res.sendStatus(401);
  }
};

var router = express.Router();

router.get('/token', function (req, res) {
  res.send({
    "access_token":"mF_9.B5f-4.1JqM",
    "token_type":"Bearer",
    "expires_in":3600,
    "refresh_token":"tGzv3JOkF0XG5Qx2TlKWIA"
  });
});

router.get('/secure', bearerToken(), secure, function (req, res) {
  res.send({
    "name":"Private resource",
    "public":"false"
  });
});

module.exports = router;
