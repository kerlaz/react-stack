import React from 'react';
import mui from 'material-ui';
import trim from 'trim';
//import Firebase from 'firebase';
import Actions from '../actions';

var {Card} = mui;

class MessageBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message: ''
        };

    }

    onChange(event){
        this.setState({
            message: event.target.value
        })
    }

    onKeyUp(event){
        if(event.keyCode === 13 && trim(event.target.value) != ''){
            event.preventDefault();

            Actions.sendMessage(this.state.message);

            this.setState({
                message: ''
            });

            console.log('Sent a new message: ', event.target.value)
        }
    }

    render(){
        return (
            <Card style={{
            maxWidth: 1200,
            margin: '30px auto',
            padding: 30
            }}>
                <textarea
                    value={this.state.message}
                    onChange={this.onChange.bind(this)}
                    onKeyUp={this.onKeyUp.bind(this)}
                    style={{
                width: '100%',
                borderColor: '#D0D0D0',
                resize: 'none',
                borderRadius: 3,
                minHeight: 50,
                color: '#555',
                fontSize: 14,
                outline: 'auto 0px'
                }} />
            </Card>
        );
    }
}

export default MessageBox;