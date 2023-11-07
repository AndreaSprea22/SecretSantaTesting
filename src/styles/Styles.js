import { StyleSheet } from 'react-native';

// Global style definitions for the app
export const globalStyles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke', // set a default color
  },
  button: {
    color: '#710ce3',
  },
  // Add other global styles as needed
});

// Colors for navigation elements
export const navigationColors = {
  statusBarColor: '#4d089a',
  topBarTitleColor: 'white',
  backButtonColor: 'white',
  topBarBackgroundColor: '#4d089a',
  bottomTabBackgroundColor: '#4d089a', // Assuming you want a purple bottom tab bar
  bottomTabFontSize: 14,
  bottomTabSelectedFontSize: 14,
  bottomTabTextColor: 'grey', // Color of text when not selected
  bottomTabSelectedTextColor: 'grey', // Color of text when selected
  // Add other colors for navigation elements as needed
};

// Default navigation options to be applied to all screens
export const defaultNavigationOptions = {
  statusBar: {
    backgroundColor: navigationColors.statusBarColor,
  },
  topBar: {
    title: {
      color: navigationColors.topBarTitleColor,
    },
    backButton: {
      color: navigationColors.backButtonColor,
    },
    background: {
      color: navigationColors.topBarBackgroundColor,
    },
  },
  bottomTab: {
    fontSize: navigationColors.bottomTabFontSize,
    selectedFontSize: navigationColors.bottomTabSelectedFontSize,
    backgroundColor: navigationColors.bottomTabBackgroundColor,
    textColor: navigationColors.bottomTabTextColor,
    selectedTextColor: navigationColors.bottomTabSelectedTextColor,
    // Add other default options for bottom tab as needed
  },
};

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  loginButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#710ce3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  link: {
    color: '#710ce3',
    marginTop: 10,
  },
});