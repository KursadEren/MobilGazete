import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemedButton = ({ title, onPress, icon, onlyIcon = false }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: theme.primary, padding: onlyIcon ? 10 : 15 },
      ]}
      onPress={onPress}
    >
      {icon && <Icon name={icon} size={20} color="#fff" style={onlyIcon ? {} : styles.icon} />}
      {!onlyIcon && <Text style={[styles.buttonText, { color: theme.text }]}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  icon: {
    marginRight: 8,
  },
});

export default ThemedButton;
