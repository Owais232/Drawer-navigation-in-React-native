/**
 * @format
 */
import 'react-native-gesture-handler'; // This should be the first line in your entry file
import { AppRegistry } from 'react-native';
import App from './App'; // Adjust the import based on your file structure
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
