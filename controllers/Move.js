'use strict';

var utils = require('../utils/writer.js');
var Move = require('../service/MoveService');

module.exports.update_textPOST = function update_textPOST (req, res, next) {
  Move.update_textPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
