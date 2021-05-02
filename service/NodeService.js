'use strict';


/**
 * Invalid line
 *
 * returns InvalidEndNode
 **/
exports.invalid_end_nodeGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "INVALID_END_NODE",
  "body" : {
    "newLine" : "newLine",
    "heading" : "Player 2",
    "message" : "Invalid"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Invalid the second node
 *
 * returns InvalidStartNode
 **/
exports.invalid_start_nodeGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "INVALID_START_NODE",
  "body" : {
    "newLine" : "newLine",
    "heading" : "Player 2",
    "message" : "Not a valid starting position"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Clicked on node
 *
 * returns NodeClicked
 **/
exports.node_clickedGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "NODE_CLICKED",
  "body" : {
    "x" : 0,
    "y" : 3
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Select a second node
 *
 * returns ValidEndNode
 **/
exports.valid_end_nodeGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "VALID_END_NODE",
  "body" : {
    "newLine" : {
      "start" : {
        "x" : 0,
        "y" : 3
      },
      "end" : {
        "x" : 4,
        "y" : 4
      }
    },
    "heading" : "Player 1",
    "message" : "message"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Valid the second node
 *
 * returns ValideStartNode
 **/
exports.valid_start_nodeGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "VALID_START_NODE",
  "body" : {
    "newLine" : "newLine",
    "heading" : "Player 2",
    "message" : "Select a second node to complete the line."
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

