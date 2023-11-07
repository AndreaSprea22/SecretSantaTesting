import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/Styles';

const SettingsScreen = () => (
  <View style={globalStyles.root}>
    <Text>Settings Screen</Text>
  </View>
);

SettingsScreen.options = {
  topBar: {
    title: {
      text: 'Settings',
    },
  },
  bottomTab: {
    text: 'Settings',
    // If you have your icon loading logic set up properly,
    // you can reference the icon like this:
    // icon: require('../path-to-icon/settings-icon.png'),
  },
};

export default SettingsScreen;
