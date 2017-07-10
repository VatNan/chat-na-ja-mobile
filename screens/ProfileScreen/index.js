import React, { Component } from 'react';
import  { 
    Text
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import CustomScrollView from '../../components/CustomScrollView';

class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Profile',
    };

    state = {
        icons: [
            { name: '500px-with-circle' },
            { name: 'baidu' },
            { name: 'bug' },
            { name: 'evernote' },
            { name: 'emoji-flirt' },
            { name: 'emoji-happy' },
            { name: 'emoji-neutral' },
            { name: 'emoji-sad' },
            { name: 'network' },
            { name: 'paper-plane' },
            { name: 'awareness-ribbon' },
            { name: 'tripadvisor' },
        ],
        colors: [
            {name: 'black'},
            {name: 'blue'},
            {name: 'red'},
            {name: 'yello'},
            {name: 'green'},
            {name: 'orange'},
            {name: 'purple'},
        ],

        profile: {
            icon: 'network',
            color: 'red',
            name: 'Template'
        }
    };

    /**
     * @description for setting icon for user's profile
     * @return void
    */
    selectIcon = () => {

    }

    /**
     * @description for setting icon for user's profile
     * @return void
    */
    selectColor = () => {

    }

    render() {
        let { profile } = this.state;

        return (
            <CustomScrollView>
                <Entypo name={profile.icon} size={100} color={profile.color} />
            </CustomScrollView>
        );
    }
}

export default ProfileScreen;

