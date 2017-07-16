import React, {Component} from 'react';
import apiKeys from '../../apiKeys';
// https://www.npmjs.com/package/slack
import slack from 'slack';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.bot = slack.rtm.client();
        this.token = apiKeys.SLACK_API_TOKEN;

        this.state = {
            message: {}
        };

        // logs: ws, started, close, listen, etc... in addition to the RTM event handler methods
        console.log(Object.keys(this.bot))
        // do something with the rtm.start payload
        this.bot.started(function(payload) {
            console.log('payload from rtm.start', payload)
        });

        this.bot.reaction_added((message) => {
           this.setState({message});

           console.log('reaction_added', message);
        });

        // respond to a user_typing message
        this.bot.user_typing(function(message) {
            this.setState({message});
            console.log('several people are coding', message);
        })

        this.bot.listen({token:this.token});
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                Hello Greet-And-Read World!!!
            </div>
        );
    }
}