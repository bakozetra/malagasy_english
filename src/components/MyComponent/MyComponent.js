// components/Task.js
import * as React from 'react';
import { Text, SafeAreaView } from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function MyComponent({word}) {

  console.log(word);
  return (
    <SafeAreaView >
      <Text>{word}</Text>
      <Text>{word}</Text>
      <Text>{word}</Text>
    </SafeAreaView>
  );
}