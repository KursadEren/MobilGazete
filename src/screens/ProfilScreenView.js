import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserContext } from '../contexts/UserContext';

const ProfilScreenView = ({ route }) => {
  const { userId } = route.params;
  const { users } = useContext(UserContext);

  const userProfile = users.find(user => user.id === userId);

  if (!userProfile) {
    return (
      <View style={styles.container}>
        <Text>User not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{userProfile.name}</Text>
      <Text style={styles.bio}>{userProfile.bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default ProfilScreenView;
