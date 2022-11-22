import React from 'react';
import {View, StyleSheet, Text, Image, Alert, Pressable} from 'react-native';

const FavoriteBox = ({image, onPress}) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        <Image style={styles.image} source={image} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 78,
    borderRadius: 10,
    margin: 10,
    resizeMode: 'contain',
  },
});
export default FavoriteBox;
