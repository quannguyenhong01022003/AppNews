import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ToastAndroid
} from 'react-native';
import React, {useContext, useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AxiosIntance from './ultil/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from './ultil/AppContext';

const ScreenLogin = props => {
  const {navigation} = props;
  const {setisLogin} = useContext(AppContext)

  const [emailUser, setemailUser] = useState('');
  const [password, setpassword] = useState('');

  const dangNhap = async () => {
    try {
      const response = await AxiosIntance().post('/auth/login', {
        email: emailUser,
        password: password,
      });
      if (response.error == false) {
        console.log(response.data.token);
        await AsyncStorage.setItem('token', response.data.token);
        ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT);
        setisLogin(true)
      } else ToastAndroid.show('Đăng nhập thât bại', ToastAndroid.SHORT);
    } catch (error) {
      console.log(error)
    }
  };
  const dangKy = () => {
    navigation.navigate('Register');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <Text style={[styles.text, {color: '#1877F2'}]}>Again!</Text>
      <Text style={styles.textWelcome}>
        Welcome back you’ve {'\n'}
        been missed
      </Text>

      <Text style={styles.textUser}>
        Username <Text style={{color: 'red'}}>*</Text>
      </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setemailUser}></TextInput>

      <Text style={[styles.textUser, {marginTop: 20}]}>
        Password <Text style={{color: 'red'}}>*</Text>
      </Text>
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        onChangeText={setpassword}></TextInput>

      <View
        style={[
          styles.remeber,
          {
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
          },
        ]}>
        <View style={styles.remeber}>
          <BouncyCheckbox fillColor="blue" />
          <Text style={styles.rememberText}>Remember me</Text>
        </View>
        <Text style={[styles.rememberText, {color: '#5890FF'}]}>
          Forgot the password?
        </Text>
      </View>

      <TouchableOpacity style={styles.btnLogin} onPress={dangNhap}>
        <Text style={styles.textLogin}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={dangKy} style={styles.btnLogin}>
        <Text style={styles.textLogin}>Register</Text>
      </TouchableOpacity>

      <Text style={[styles.remeber, {textAlign: 'center', marginTop: 15}]}>
        or continute with
      </Text>

      <View
        style={[
          styles.remeber,
          {justifyContent: 'space-between', marginTop: 20},
        ]}>
        <TouchableOpacity style={styles.imageBtnLogin}>
          <Image
            style={styles.imageBtn}
            source={require('./images/Icon_fb.png')}></Image>
          <Text style={[styles.textLogin, {color: '#667080'}]}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.imageBtnLogin}>
          <Image
            style={styles.imageBtn}
            source={require('./images/Icon_google.png')}></Image>
          <Text style={[styles.textLogin, {color: '#667080'}]}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScreenLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Poppins',
    marginStart: 10,
    marginEnd: 10,
    flexDirection: 'column',
  },
  text: {
    fontSize: 48,
    lineHeight: 72,
    color: '#050505',
    fontWeight: '700',
  },

  textWelcome: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#4E4B66',
    marginTop: 4,
    marginBottom: 40,
  },
  textUser: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
  },
  textInput: {
    padding: 10,
    borderColor: '#4E4B66',
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: 'white',
    marginTop: 10,
  },
  remeber: {
    flexDirection: 'row',
  },
  rememberText: {
    color: '#4E4B66',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
  },
  textLogin: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  btnLogin: {
    marginTop: 15,
    paddingHorizontal: 24,
    paddingVertical: 13,
    backgroundColor: '#1877F2',
    borderRadius: 6,
  },
  imageBtn: {
    width: 21,
    height: 21,
    end: 10,
  },
  imageBtnLogin: {
    flexDirection: 'row',
    backgroundColor: '#EEF1F4',
    width: 174,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
});
