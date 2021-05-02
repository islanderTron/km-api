'use strict';


/**
 * Start the game
 *
 * returns InitalizeGame
 **/
exports.initalizeGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "INITALIZE",
  "body" : {
    "newLine" : "newLine",
    "heading" : "Player 1",
    "message" : "Awaiting Player 1's Move"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

