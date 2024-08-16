import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { addUser, getUsers } from '../services/userService';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    const users = getUsers();
    const userExists = users.some(user => user.email === email);

    if (userExists) {
      setError('Email already exists.');
    } else {
      const newUser = {
        id: users.length + 1,
        email,
        password,
        name
      };
      addUser(newUser);
      navigation.navigate('Login');
    }
  };

  return (
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      {error ? <Text>{error}</Text> : null}
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
