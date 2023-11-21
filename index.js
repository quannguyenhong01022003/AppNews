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

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


function myApp() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
          <Stack.Screen name="Login" component={ScreenLogin} />
          <Stack.Screen name="Register" component={ScreenRegister} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
AppRegistry.registerComponent(appName, () => myApp);
