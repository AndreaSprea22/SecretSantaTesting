import React from 'react';
import { Image, View, Text, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeIcon = () => (
  <Icon name="home" size={30} color="#900" />
  );
  
  const ProfileIcon = () => (
    <Image
      source={require('./src/assets/user.png')}
      style={{ width: 24, height: 24 }}
      resizeMode="contain"
    />
  );
  
const LoginScreen = () => {
    return (
      <View style={styles.root}>
        <Text> Here it is going to be implemented the login form </Text>
        <Button
          title='Login'
          color='#710ce3'
          onPress={() => Navigation.setRoot(mainRoot)}
        />
      </View>
    );
  };
  
  const HomeScreen = (props) => {
    return (
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
  };
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
  
  const SettingsScreen = () => {
    return (
      <View style={styles.root}>
        <Text>Settings Screen</Text>
      </View>
    );
  }
  SettingsScreen.options = {
    topBar: {
      title: {
        text: 'Settings'
      }
    },
    bottomTab: {
      text: 'Settings'
    }
  }
  
  Navigation.registerComponent('Login', () => LoginScreen);
  Navigation.registerComponent('Home', () => HomeScreen);
  Navigation.registerComponent('Settings', () => SettingsScreen);
  
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
                        icon: HomeIcon
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
                        icon: ProfileIcon
                    }
                  }
                }
              }
            ]
          }
    }
  };
  const loginRoot = {
    root: {
      component: {
        name: 'Login'
      }
    }
  };
  
  
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

  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot(isLoggedIn() ? mainRoot : loginRoot);
  });
  
  function isLoggedIn() {
    return true
  }
  
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'whitesmoke'
    }
  });