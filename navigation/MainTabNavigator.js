/**
 * @flow
 */

import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    // Links: {
    //   screen: LinksScreen,
    // },
    Profile: {
      screen: ProfileScreen
    },
    Settings: {
      screen: SettingsScreen,
    },
    Chat: {
      screen: ChatScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      // Set the tab bar icon
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 'home';
            break;
          // case 'Links':
          //   iconName = 'book';
          //   break;
          case 'Profile':
            iconName = 'user';
            break;
          case 'Settings':
            iconName = 'cog';
            break;
          case 'Chat': 
            iconName = 'comment';
            break;
        }
        return (
          <FontAwesome
            name={iconName}
            size={32}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    // Put tab bar on bottom of screen on both platforms
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    // Disable animation so that iOS/Android have same behaviors
    animationEnabled: false,
    // Don't show the labels
    tabBarOptions: {
      showLabel: false,
    },
  }
);
