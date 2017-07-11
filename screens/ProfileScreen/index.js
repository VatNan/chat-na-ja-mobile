import React, { Component } from 'react';
import {
    Text
} from 'react-native';

//Component
import BlockProfile from './BlockProfile';

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
            { name: 'black' },
            { name: 'blue' },
            { name: 'red' },
            { name: 'yello' },
            { name: 'green' },
            { name: 'orange' },
            { name: 'purple' },
        ],

        //show modal
        visibleModalIcons: false,
        visibleModalColors: false,
        visibleModalName: false,

        //initial
        profile: {
            icon: 'baidu',
            color: 'green',
            name: 'Kawo'
        }
    };

    /**
     * @description set status show or hide modal icons
     */
    setVisibleModalIcons = (visible) => {
        this.setState({
            visibleModalIcons: visible
        });
    }

    /**
     * @description setting icon for user's profile
     * @return void
    */
    selectIcon = () => {

    }

    /**
     * @description setting icon for user's profile
     * @return void
    */
    selectColor = () => {

    }

    render() {
        let state = this.state;

        return (
            <BlockProfile
                 setVisibleModalIcons={this.setVisibleModalIcons}
                {...state} 
            />
        );
    }
}

export default ProfileScreen;

