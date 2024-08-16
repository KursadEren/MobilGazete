import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import ThemedButton from '../Component/ThemedButon';
import ThemedTextInput from '../Component/ThemedTextInput';

const ProfileScreen = ({ navigation }) => {
  const { user, updateProfile, becomeJournalist } = useContext(UserContext);
  const [name, setName] = useState(user ? user.name : '');
  const [bio, setBio] = useState(user ? user.bio : '');

  const handleSave = () => {
    updateProfile({ name, bio });
    navigation.navigate('ProfileView');
  };

  return (
    <View style={styles.container}>
      <ThemedTextInput
        style={styles.input}
        placeholder="NickName"
        value={name}
        onChangeText={setName}
      />
      <ThemedTextInput
        style={styles.input}
        placeholder="Bio"
        value={bio}
        onChangeText={setBio}
      />
      <ThemedButton title="Save Profile" onPress={handleSave} />
      <ThemedButton title="Become a Journalist" onPress={becomeJournalist} />
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    width: '100%',
  },
});

export default ProfileScreen;
