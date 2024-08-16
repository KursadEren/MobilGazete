import React, { useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeContext } from '../contexts/ThemeContext';
import ThemedTextInput from '../Component/ThemedTextInput';
import ThemedButton from '../Component/ThemedButon';

const ArticleDetailScreen = ({ route, navigation }) => {
  const { article } = route.params;
  const { theme } = useContext(ThemeContext);
  const [comments, setComments] = useState(article.comments || []);
  const [newComment, setNewComment] = useState('');
  const [likes, setLikes] = useState(article.likes);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: comments.length + 1, text: newComment }]);
      setNewComment('');
    }
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const HandleProfile = () => {
    navigation.navigate('ProfilScreenView', { userId: article.authorId });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>{article.title}</Text>
      <TouchableOpacity onPress={HandleProfile} style={[styles.author, { color: theme.text }]}>
        <Text>
        By: {article.author}
        </Text>
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <ThemedButton onPress={handleLike} icon="newspaper-o" onlyIcon={true} />
        <ThemedButton onPress={handleToggleFavorite} icon={isFavorite ? "heart" : "heart-o"} onlyIcon={true} />
      </View>

      <ThemedTextInput
        placeholder="Add a comment..."
        value={newComment}
        onChangeText={setNewComment}
      />
      <ThemedButton title="Add Comment" onPress={handleAddComment} />

      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.commentContainer}>
            <Text style={{ color: theme.text }}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  icon: {
    alignItems: 'center',
  },
  commentContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
  },
});

export default ArticleDetailScreen;
