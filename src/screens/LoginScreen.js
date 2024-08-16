import React, { useState, useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import ThemedTextInput from '../Component/ThemedTextInput';
import ThemedButton from '../Component/ThemedButon';
import { UserContext } from '../contexts/UserContext';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(UserContext);

  const handleLogin = () => {
    const isAuthenticated = login({ email, password });
    if (isAuthenticated) {
      navigation.navigate('BattomTAB');
    } else {
      Alert.alert('Login Failed', 'Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <ThemedTextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <ThemedTextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <ThemedButton title="Login" onPress={handleLogin} />
      <ThemedButton title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default LoginScreen;
