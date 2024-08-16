import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { UserProvider } from './src/contexts/UserContext';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ArticleDetailScreen from './src/screens/ArticleDetailScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './src/screens/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfilScreenView from './src/screens/ProfilScreenView';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="ArticleDetail" component={ArticleDetailScreen} />
            <Stack.Screen name="BattomTAB" component={BattomTAB} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </ThemeProvider>
  );
};

const BattomTAB = () =>{

    return (
        
            <Tab.Navigator  screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = 'home';
                } else if (route.name === 'Profile') {
                  iconName = 'user';
                }

                return <Icon name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#a0522d',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="ProfilScreenView" component={ProfilScreenView} />

            </Tab.Navigator>
       
    );
};

export default App;
