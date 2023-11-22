import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListNews from '../ListNews';
import NewsDetail from '../NewsDetail';
import {AppContext} from './AppContext';
import ScreenLogin from '../ScreenLogin';
import ScreenRegister from '../ScreenRegister';

// Login, Register... => Stack
const Stack = createNativeStackNavigator();
const Users = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={ScreenLogin} />
      <Stack.Screen name="Register" component={ScreenRegister} />
    </Stack.Navigator>
  );
};

// ListNew, NewDetail .. => Tab
const Tab = createBottomTabNavigator();
const Main = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={ListNews} options={{title: 'Trang chủ'}}/>
      <Tab.Screen name="Settings" component={NewsDetail} options={{title: 'Cá nhân'}}/>
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  const {isLogin} = useContext(AppContext); // Gọi dữ liệu dùng chung
  return <>{isLogin == false ? <Users /> : <Main />}</>;
};

export default AppNavigation;
