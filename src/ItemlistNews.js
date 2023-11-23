import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ItemlistNews = props => {
  const {data, navigation} = props;

  const click = () =>{
    navigation.navigate("NewsDetail", {id: data._id})
  }
  return (
    <TouchableOpacity onPress={click}>
      <View style={styles.container}>
        <Image style={styles.images} source={{uri: data.image}} />
        <View style={styles.content}>
          <Text style={styles.textItem}>{data.title}</Text>
          <Text numberOfLines={3} style={styles.textContent}>
            {data.content}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemlistNews;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
  },
  images: {
    width: 96,
    height: 96,
    borderRadius: 5,
  },
  textItem: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 19.5,
    fontFamily: 'Poppins',
    color: 'red',
  },
  textContent: {
    fontWeight: '400',
    marginTop: 5,
    fontSize: 14,
    lineHeight: 20,
    color: '#000000',
  },
  content: {
    start: 15,
    width: Dimensions.get('window').width - 96 - 15,
  },
});
