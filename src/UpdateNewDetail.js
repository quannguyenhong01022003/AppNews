import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AxiosIntance from './ultil/AxiosIntance';

const UpdateNewDetail = () => {
  const [image, setimage] = useState("")
  const [title, settitle] = useState("")
  const [content, setcontent] = useState("")

  // Chụp ảnh
  const capture = async () => {
    const result = await launchCamera();

    const formData = new FormData();
    formData.append('image', {
      uri: result.assets[0].uri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    const response = await AxiosIntance("multipart/form-data").post('/media/upload', formData)
    console.log(response.data.path)

    if(response.error == false){
      setimage(response.data.path)
      ToastAndroid.show("Đăng ảnh thành công", ToastAndroid.SHORT)
    }else{
      ToastAndroid.show("Đăng ảnh thất bại", ToastAndroid.SHORT)
    }
  };

  // Lấy ảnh từ thư viện
  const getImageLibrary = async () => {
    const result = await launchImageLibrary();

    const formData = new FormData();
    formData.append('image', {
      uri: result.assets[0].uri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    const response = await AxiosIntance("multipart/form-data").post('/media/upload', formData)
    console.log(response.data.path)
   
    if(response.error == false){
      setimage(response.data.path)
      ToastAndroid.show("Đăng ảnh thành công", ToastAndroid.SHORT)
    }else{
      ToastAndroid.show("Đăng ảnh thất bại", ToastAndroid.SHORT)
    }
  };

  const dangTin = async () =>{
    const response = await AxiosIntance().post('/articles', {image: image, content: content, title: title})
    if(response.error == false){
      ToastAndroid.show("Đăng tin thành công", ToastAndroid.SHORT)
    }else{
      ToastAndroid.show("Đăng tin thất bại", ToastAndroid.SHORT)
    }
    console.log(response)
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableOpacity style={[styles.button, {marginTop: 80}]} onPress={capture}>
        <Text style={styles.textt}>Chụp ảnh</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, {marginTop: 40}]} onPress={getImageLibrary}>
        <Text style={styles.textt}>Chọn ảnh từ thư viện</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="Tiêu đề" onChangeText={settitle}/>
      <TextInput
        style={[styles.input, {height: 200}]}
        placeholder="Nội dung"
        multiline={true}
        textAlignVertical="top"
        onChangeText={setcontent}
      />
      <TouchableOpacity
        style={[styles.button, {marginTop: 150, height: 50, width: 350}]} onPress={dangTin}>
        <Text style={styles.textt}>Đăng tin</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default UpdateNewDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    padding: 5,
    borderRadius: 8,
    backgroundColor: 'blue',
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textt: {
    color: 'white',
  },
  input: {
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 30,
    paddingHorizontal: 10,
  },
});
