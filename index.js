/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ScreenLogin from './src/ScreenLogin';
import ItemlistNews from './src/ItemlistNews';
import ListNews from './src/ListNews';
import NewsDetail from './src/NewsDetail';
import ScreenRegister from './src/ScreenRegister';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/ultil/AppNavigation';
import { AppContextProvider } from './src/ultil/AppContext';


function myApp() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <AppNavigation/>
      </NavigationContainer>
    </AppContextProvider>
  );
}

AppRegistry.registerComponent(appName, () => myApp);
