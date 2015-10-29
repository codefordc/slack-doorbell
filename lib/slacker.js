var request = require('request');

module.exports = function (caller, message, callback) {
  var body = {
    pretext: 'Someone is at the door.',
    text:     caller + ' says: ' + message,
    color:   'good',
    channel: process.env.SLACK_CHANNEL || '#doorbell',
    username: process.env.DOORBELL_NAME || 'doorbell',
    icon_emoji: process.env.DOORBELL_ICON || ':bell:'
  };

  var options = {
    url:  process.env.SLACK_DOMAIN,
    body: JSON.stringify(body)
  };
  console.log(options);
  request.post(options, function(err, res, body) {
    if (err) {
      console.error(err);
    }
    if (typeof callback === 'function') {
      callback(err, res, body);
    }
  });
};
