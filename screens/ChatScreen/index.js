import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import CustomScrollView from '../../components/CustomScrollView';
import ChatBox from './ChatBox'

class ChatScreen extends Component {
    static navigationOptions = {
        title: 'Chat',
    };

    render() {
        return (
            <CustomScrollView>
                <ChatBox
                    mode="me"
                >
                    <Text>
                        Test 555
                    </Text>
                </ChatBox>
                <ChatBox
                    mode="notMe"
                >
                </ChatBox>
                <ChatBox
                    mode="notMe"
                >
                </ChatBox>
                <ChatBox
                    mode="notMe"
                >
                </ChatBox>
                <ChatBox
                    mode="me"
                >
                </ChatBox>
                <ChatBox
                    mode="notMe"
                >
                </ChatBox>
            </CustomScrollView>
        );
    }
}

export default ChatScreen;