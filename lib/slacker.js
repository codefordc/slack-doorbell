var request = require('request');

module.exports = function (caller, message, callback) {
  var body = {
    pretext: 'Someone is at the door.',
    text:     caller + ' says: ' + message,
    color:   'good'
  };

  var options = {
    url:  process.env.SLACK_URL,
    body: JSON.stringify(body)
  };

  request.post(options, function(err, res, body) {
    if (err) console.error(err);
    if (typeof callback === 'function') callback(err, res, body);
  });
};
