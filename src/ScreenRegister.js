import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ToastAndroid,
 
} from 'react-native';
import React, {useState} from 'react';
import AxiosIntance from './ultil/AxiosIntance';



const ScreenRegister = (props) => {
    const {navigation} = props

    const [emailUser, setemailUser] = useState("")
    const [password, setpassword] = useState("")
    const [passwordTwo, setpasswordTwo] = useState("")
    const [textErrorPass, settextErrorPass] = useState("")
    const [passwordMismatch, setpasswordMismatch] = useState(false)

    const dangKy = async () =>{
        if(password == passwordTwo){
            try {
                const response = await AxiosIntance().post("/users/register", {email: emailUser, password: passwordTwo})     
                
                if(response.error == false){
                    ToastAndroid.show("Đăng ký thành công", ToastAndroid.SHORT)
                    navigation.navigate("Login")
                }
                else{
                    ToastAndroid.show("Đăng ký thất bại", ToastAndroid.SHORT)
                }
            } catch (error) {
                console.log(error)
            }
        }else{
              settextErrorPass("Mật khẩu không trùng khớp")
              setpasswordMismatch(true)
        }
    }
    


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
      <TextInput style={styles.textInput} onChangeText={setemailUser}></TextInput>

      <Text style={[styles.textUser, {marginTop: 20}]}>
        Password <Text style={{color: 'red'}}>*</Text>
      </Text>
      <TextInput style={styles.textInput} onChangeText={setpassword} secureTextEntry={true} >
        
      </TextInput>
         
      <Text style={[styles.textUser, {marginTop: 20}]}>
        Re-enter the password <Text style={{color: 'red'}}>*</Text>
      </Text>
      <TextInput style={[styles.textInput, passwordMismatch && {borderColor: 'red'}]} onChangeText={setpasswordTwo} secureTextEntry={true}>
      
      </TextInput>

      <Text style={styles.textError}>{textErrorPass}</Text>

      <TouchableOpacity style={styles.btnLogin} onPress={dangKy}>
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

export default ScreenRegister;

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
  textError:{
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: 'red',
    marginTop: 4,
    
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
  imagePassword: {
    width: 30,
    height: 30,
    marginRight: 10,
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
    backgroundColor: 'green',
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
