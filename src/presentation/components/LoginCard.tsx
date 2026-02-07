import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { useState } from 'react';

import '../../../global.css'
import { login, register } from '@/application/Auth';

export const LoginCard = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  try {
    register('admin', 'admin');
  } catch (error) {
    console.error(error);
  }

  const handleLoginClicked = () => {
    if (login(username, password)) {
      Alert.alert("message","Logged in");
      console.log("logged in");
    } else {
      Alert.alert("message","Login failed");
      console.log("login failed");
    }
  };

  return (
    <View className="bg-white p-4 shadow-md justify-center w-full" style={styles.container}>
      <Text className="text-xl font-bold">Username</Text>
      <TextInput
        placeholder="Username"
        className="border-gray-300"
        style={styles.input}
        onChangeText={setUsername}></TextInput>
      <Text className="text-xl font-bold">Password</Text>
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        className="border-gray-300"
        style={styles.input}
        onChangeText={setPassword}></TextInput>
      <Button title='Login' onPress={handleLoginClicked}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
  },
  input: {
    marginTop: 10,
    marginBottom: 14,
    borderRadius: 4,
    borderWidth: 1,
    height: 40
  }
})
