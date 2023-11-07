# App Development Steps

1) Follow env setup here https://reactnative.dev/docs/environment-setup
2) Follow native navigation setup here https://wix.github.io/react-native-navigation/docs/installing
3) npm install --save react-native-navigation
4) npx rnn-link
5) pod install --project-directory=ios
6) npm install react-native-elements
7) Adding icons following this tutorial: https://github.com/oblador/react-native-vector-icons#ios-setup
NOTE: It worked when in Xcode I removed all the fonts from Build phases.

# TODO
- [X] Push the code to Repository for versioning control and being able to revert if something brakes.
  - **Status:** Done
  - **Owner:** AndreaSprea22

- [X] Add icons to View and to bottom navigation bar
  - **Status:** Done
  - **Owner:** AndreaSprea22

- [ ] Better structure code within Index.js and understand how to split the code (e.g. navigation bar in anotehr module)
  - **Status:** To Do
  - **Owner:** AndreaSprea22

- [ ] Login function at the moment is returning a simple constant Bool. Define here the logic for Firebase.
  - **Status:** To Do
  - **Owner:** 

# Start the App

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.
To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# Useful links

- [Troubleshooting](https://reactnative.dev/docs/troubleshooting)
- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
