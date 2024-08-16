import AsyncStorage from '@react-native-async-storage/async-storage';

const ARTICLES_KEY = '@articles';

const mockArticles = [
  {
    id: '1',
    title: 'İlk Makale',
    author: 'Yazar 1',
    likes: 20,
    comments: 15,
    shares: 5,
    qualityScore: 7,
  },
  {
    id: '2',
    title: 'İkinci Makale',
    author: 'Yazar 2',
    likes: 50,
    comments: 25,
    shares: 10,
    qualityScore: 9,
  },
  {
    id: '3',
    title: 'Üçüncü Makale',
    author: 'Yazar 3',
    likes: 10,
    comments: 5,
    shares: 3,
    qualityScore: 5,
  },
];

export const fetchArticles = async () => {
  try {
    const storedArticles = await AsyncStorage.getItem(ARTICLES_KEY);
    if (storedArticles) {
      return JSON.parse(storedArticles);
    } else {
      await AsyncStorage.setItem(ARTICLES_KEY, JSON.stringify(mockArticles));
      return mockArticles;
    }
  } catch (error) {
    console.error('Error fetching articles', error);
    return [];
  }
};
