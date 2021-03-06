import React from 'react';
import Header from './components/Header.js';
import StartGameScreen from './screens/StartGameScreen.js';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
