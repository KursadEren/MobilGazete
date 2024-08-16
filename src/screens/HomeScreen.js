import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';
import { UserContext } from '../contexts/UserContext';

const HomeScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  const articles = [
    { id: '1', title: 'First Article', author: 'Author 1', category: 'Tech' },
    { id: '2', title: 'Second Article', author: 'Author 2', category: 'Health' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.articleContainer, { backgroundColor: theme.background }]}
      onPress={() => navigation.navigate('ArticleDetail', { article: item })}
    >
      <Text style={[styles.title, { color: theme.text }]}>{item.title}</Text>
      <Text style={[styles.author, { color: theme.text }]}>{item.author}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.text }]}>
        Welcome, {user ? user.name : 'Guest'}
      </Text>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
  },
  articleContainer: {
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
  },
});

export default HomeScreen;
