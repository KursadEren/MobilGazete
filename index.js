import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import 'react-native-gesture-handler';  // Bunu ekleyin

AppRegistry.registerComponent(appName, () => App);
