// https://www.npmjs.com/package/slack

var slack = require('slack')
const apiKeys = require('../apiKeys');
const token = apiKeys.SLACK_API_TOKEN;
var bot = slack.rtm.client()

// logs: ws, started, close, listen, etc... in addition to the RTM event handler methods 
console.log(Object.keys(bot))

// do something with the rtm.start payload 
bot.started(function(payload) {
    console.log('payload from rtm.start', payload)
})

// respond to a user_typing message 
bot.user_typing(function(msg) {
    console.log('several people are coding', msg)
})

bot.message((msg) => {
    console.log('message.channels', msg)
});

// start listening to the slack team associated to the token 
bot.listen({token:token})