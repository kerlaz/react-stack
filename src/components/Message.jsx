import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let avaPic = '';
        if(this.props.message.profilePic){
            avaPic = this.props.message.profilePic;
        } else {
            avaPic = '';
        }
        return (

            <ListItem
                leftAvatar={<Avatar src={avaPic}/>}
            >{this.props.message.message}
            </ListItem>
        );
    }
}
export default Message;