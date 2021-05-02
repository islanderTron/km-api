'use strict';

var utils = require('../utils/writer.js');
var Initalization = require('../service/InitalizationService');

module.exports.initalizeGET = function initalizeGET (req, res, next) {
  Initalization.initalizeGET()
    .then(function (response) {
      console.log('test')
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
