'use strict';


/**
 * Inform the player to make their move
 * Remind the player to make their move
 *
 * returns UpdateText
 **/
exports.update_textPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "UPDATE_TEXT",
  "body" : {
    "newLine" : "newLine",
    "heading" : "Player 2",
    "message" : "Are you asleep?"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

