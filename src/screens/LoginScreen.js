import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { loginStyles } from '../styles/Styles';
import { switchToMainApp } from './../navigation/Navigation';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = async () => {
    // TODO: Implement authentication logic here (e.g., check username and password)
    // For now, we'll assume the login is successful and switch to the main app
    console.log('Login button pressed'); // This should log when the button is pressed
    await switchToMainApp(); // This function will load icons and set the main app root
  };

  const handleRegisterPress = () => {
    // TODO: Implement navigation to the registration screen
    console.log('Register link pressed'); // Log that the register link is pressed
  };

  const handleForgotPasswordPress = () => {
    // TODO: Implement navigation to the password recovery screen
    console.log('Forgot Password link pressed'); // Log that the forgot password link is pressed
  };

  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.title}>Login</Text>
      <TextInput
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
        style={loginStyles.input}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true} // To hide the password characters
        style={loginStyles.input}
      />
      <TouchableOpacity style={loginStyles.loginButton} onPress={handleLoginPress}>
        <Text style={loginStyles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegisterPress}>
        <Text style={loginStyles.link}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPasswordPress}>
        <Text style={loginStyles.link}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

LoginScreen.options = {
  topBar: {
    title: {
      text: 'Login',
    },
  },
};

export default LoginScreen;
