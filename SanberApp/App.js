import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import Component from './Latihan/Compoent/component';
// import Telegram from './Tugas/Tugas12/Telegram';
import Flexbox from './Latihan/Flexbox/flexbox';
import Props from './Latihan/Flexbox/props';

export default function App() {
  return (
    <>
      <Flexbox />
      { <Props /> }
    </>
    // <Telegram />
    // <Component />
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
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
