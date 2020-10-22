//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {TabBar} from './navigation/AppNavigator'
import HomeScreen from './screens/HomeScreen'

export default function App() {
  return (
      <TabBar
      barColor="#ffffff"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
