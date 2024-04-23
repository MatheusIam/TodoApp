/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import HomeScreen from './src/pages/HomeScreen';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.tituloCentro}>Lista de Tarefas APP</Text>
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tituloCentro: {
    textAlign: 'center',
    marginTop: 10,
  },
});

export default App;
