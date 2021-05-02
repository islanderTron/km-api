'use strict';

var utils = require('../utils/writer.js');
var Node = require('../service/NodeService');

module.exports.invalid_end_nodeGET = function invalid_end_nodeGET (req, res, next) {
  Node.invalid_end_nodeGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.invalid_start_nodeGET = function invalid_start_nodeGET (req, res, next) {
  Node.invalid_start_nodeGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.node_clickedGET = function node_clickedGET (req, res, next) {
  Node.node_clickedGET()
    .then(function (response) {
      console.log(response.body);
      utils.writeJson(req, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.valid_end_nodeGET = function valid_end_nodeGET (req, res, next) {
  Node.valid_end_nodeGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.valid_start_nodeGET = function valid_start_nodeGET (req, res, next) {
  Node.valid_start_nodeGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
