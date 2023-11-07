import { Navigation } from 'react-native-navigation';
import HomeScreen from './../screens/HomeScreen';
import SettingsScreen from './../screens/SettingsScreen';
import LoginScreen from './../screens/LoginScreen';
import { defaultNavigationOptions } from './../styles/Styles';
import { loadIcons } from './Icons'; // Make sure the path is correct

let mainRoot;

// Define the root for the login screen
export const loginRoot = {
  root: {
    component: {
      name: 'Login',
      options: {
        topBar: {
          title: {
            text: 'Login'
          },
          // Any other options you want to set for the Login topBar
        }
      }
    }
  }
};

// Set default navigation options
export function setDefaultNavigationOptions() {
  Navigation.setDefaultOptions(defaultNavigationOptions);
}

// Register the screens with React Native Navigation
export function registerScreens() {
  Navigation.registerComponent('Home', () => HomeScreen);
  Navigation.registerComponent('Login', () => LoginScreen);
  Navigation.registerComponent('Settings', () => SettingsScreen);
}

// Function to set the main root with loaded icons
export async function setRootWithIcons() {
  const icons = await loadIcons();
  
  mainRoot = {
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [{
                component: {
                  name: 'Home',
                  options: {
                    bottomTab: {
                      text: 'Home',
                      icon: icons.personIcon,
                    }
                  }
                }
              }],
            }
          },
          {
            stack: {
              children: [{
                component: {
                  name: 'Settings',
                  options: {
                    bottomTab: {
                      text: 'Settings',
                      icon: icons.settingsIcon,
                    }
                  }
                }
              }],
            }
          },
        ]
      }
    }
  };
}

// Start the app by setting the login screen as the root
export function startApp() {
  registerScreens();
  setDefaultNavigationOptions();
  Navigation.events().registerAppLaunchedListener(async () => {
    // Initially, set the root to the login screen
    Navigation.setRoot(loginRoot);
  });
}

// You can call this function after a successful login to switch to the main app
export async function switchToMainApp() {
  await setRootWithIcons(); // Load icons and set the main app root
  Navigation.setRoot(mainRoot); // Set the root of the app to the main app's tabs
}
