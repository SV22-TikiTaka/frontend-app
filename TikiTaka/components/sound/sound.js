import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Sound from 'react-native-sound';
const SoundTest = () => {
  const path5 = 'https://tikitaka-s3.s3.ap-northeast-2.amazonaws.com/8';

  let music = new Sound(path5, null, error => {
    if (error) {
      console.log('play failed');
    }
  });
  return (
    <View>
      <TouchableOpacity onPress={() => music.play()}>
        <Text>재생</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SoundTest;
