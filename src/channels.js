// channels.js
const slack = require('slack');
const apiKeys = require('../apiKeys');
const token = apiKeys.SLACK_API_TOKEN;

slack.channels.list({ token }, (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
})