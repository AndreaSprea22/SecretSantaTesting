import React from 'react';
import { View, Text, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

const HomeScreen = (props) => {
  const navigateToSettings = () => {
    // Use the correct push method from 'react-native-navigation'
    Navigation.push(props.componentId, {
      component: {
        name: 'Settings', // Make sure 'Settings' is the name you've registered your settings screen with
      },
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello React Native Navigation 👋</Text>
      <Button
        title='Push Settings Screen'
        onPress={navigateToSettings} // Call the navigate function when the button is pressed
      />
    </View>
  );
};

// Make sure to register your HomeScreen component with the name you use here
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
};

export default HomeScreen;
