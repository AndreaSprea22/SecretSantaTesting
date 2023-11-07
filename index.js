import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Define the Home Icon component
const HomeIcon = () => (
  <MaterialIcons name="home" size={30} color="#900" />
);

// Login Screen component
const LoginScreen = () => (
  <View style={styles.root}>
    <Text> Here it is going to be implemented the login form </Text>
    <Button
      title='Login'
      color='#710ce3'
      onPress={() => Navigation.setRoot(mainRoot)}
    />
  </View>
);

// Home Screen component
const HomeScreen = (props) => (
  <View style={styles.root}>
    <HomeIcon/>
    <Text>Hello React Native Navigation 👋</Text>
    <Button
      title='Push Settings Screen'
      color='#710ce3'
      onPress={() => Navigation.push(props.componentId, {
        component: {
          name: 'Settings',
          passProps: {
            name: 'TestPropsToPass',
            status: 'TestPropsToPass'
          }
        }
      })} />
  </View>
);

// Settings Screen component
const SettingsScreen = () => (
  <View style={styles.root}>
    <Text>Settings Screen</Text>
  </View>
);

// Component options
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home'
    }
  },
  bottomTab: {
    text: 'Home'
  }
};

SettingsScreen.options = {
  topBar: {
    title: {
      text: 'Settings'
    }
  },
  bottomTab: {
    text: 'Settings'
  }
};

// Register the components
Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);

// Set default options
Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a'
  },
  topBar: {
    title: {
      color: 'white'
    },
    backButton: {
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14
  }
});

// App launched listener
Navigation.events().registerAppLaunchedListener(async () => {
  // Load the icons
  const personIcon = await MaterialIcons.getImageSource('home', 25);
  const settingsIcon = await MaterialIcons.getImageSource('settings', 25);

  // Define the root based on the user's login status
  const mainRoot = {
    root: {
      bottomTabs: {
        id: 'BOTTOM_TABS_LAYOUT',
        children: [
          {
            stack: {
              id: 'HOME_TAB',
              children: [
                {
                  component: {
                    id: 'HOME_SCREEN',
                    name: 'Home'
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon: personIcon,
                  text: 'Home'
                }
              }
            }
          },
          {
            stack: {
              id: 'PROFILE_TAB',
              children: [
                {
                  component: {
                    id: 'PROFILE_SCREEN',
                    name: 'Settings'
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon: settingsIcon,
                  text: 'Settings'
                }
              }
            }
          }
        ]
      }
    }
  };

  // Check if the user is logged in and set the root accordingly
  if (isLoggedIn()) {
    Navigation.setRoot(mainRoot);
  } else {
    Navigation.setRoot(loginRoot);
  }
});

// Check if user is logged in (placeholder function)
function isLoggedIn() {
  // Replace with your actual login logic
  return true;
}

// Styles for the components
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});

// Define the login root (used if the user is not logged in)
const loginRoot = {
  root: {
    component: {
      name: 'Login'
    }
  }
};
