import React, { useContext } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemedTextInput = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <TextInput
      {...props}
      style={[styles.input, { borderColor: theme.primary, color: theme.text }]}
      placeholderTextColor={theme.text}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
  },
});

export default ThemedTextInput;
